import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const VERCEL_API_TOKEN = process.env.VERCEL_API_TOKEN;
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;
const SCREENSHOT_API_KEY = process.env.SCREENSHOT_API_KEY;

const FALLBACK_IMAGE_URL = "https://via.placeholder.com/300x200?text=Project+Preview";
const CACHE_DIR = path.join(process.cwd(), "cache");
const CACHE_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

function getScreenshotUrl(url: string) {
	if (!SCREENSHOT_API_KEY) {
		console.error("Screenshot API key is not set");
		return FALLBACK_IMAGE_URL;
	}

	const encodedUrl = encodeURIComponent(url);
	return `https://api.screenshotmachine.com?key=${SCREENSHOT_API_KEY}&url=${encodedUrl}&dimension=1024x768&delay=2000`;
}

async function getCachedScreenshot(projectId: string, liveLink: string): Promise<string> {
	const cacheFilePath = path.join(CACHE_DIR, `${projectId}.jpg`);

	// Check if cache directory exists, if not create it
	if (!fs.existsSync(CACHE_DIR)) {
		fs.mkdirSync(CACHE_DIR, { recursive: true });
	}

	// Check if cached file exists and is not expired
	if (fs.existsSync(cacheFilePath)) {
		const stats = fs.statSync(cacheFilePath);
		if (Date.now() - stats.mtimeMs < CACHE_DURATION) {
			return `data:image/jpeg;base64,${fs.readFileSync(cacheFilePath, "base64")}`;
		}
	}

	// If not cached or expired, fetch new screenshot
	const screenshotUrl = getScreenshotUrl(liveLink);
	try {
		const response = await fetch(screenshotUrl);
		if (!response.ok) throw new Error("Failed to fetch screenshot");
		const buffer = await response.arrayBuffer();
		fs.writeFileSync(cacheFilePath, Buffer.from(buffer));
		return `data:image/jpeg;base64,${Buffer.from(buffer).toString("base64")}`;
	} catch (error) {
		console.error("Error fetching screenshot:", error);
		return FALLBACK_IMAGE_URL;
	}
}

export async function GET() {
	if (!VERCEL_API_TOKEN) {
		return NextResponse.json({ error: "Vercel API token is not set" }, { status: 500 });
	}

	try {
		const projectsResponse = await fetch(`https://api.vercel.com/v9/projects?teamId=${VERCEL_TEAM_ID}`, {
			headers: {
				Authorization: `Bearer ${VERCEL_API_TOKEN}`,
			},
		});

		if (!projectsResponse.ok) {
			throw new Error("Failed to fetch projects from Vercel API");
		}

		const projectsData = await projectsResponse.json();

		const projects = await Promise.all(
			projectsData.projects.map(async (project: any) => {
				const domainsResponse = await fetch(`https://api.vercel.com/v9/projects/${project.id}/domains?teamId=${VERCEL_TEAM_ID}`, {
					headers: {
						Authorization: `Bearer ${VERCEL_API_TOKEN}`,
					},
				});

				if (!domainsResponse.ok) {
					console.error(`Failed to fetch domains for project ${project.id}`);
					return null;
				}

				const domainsData = await domainsResponse.json();
				const publicDomain = domainsData.domains.find((domain: any) => domain.verified) || domainsData.domains[0];

				if (!publicDomain) {
					console.error(`No domain found for project ${project.id}`);
					return null;
				}

				const liveLink = `https://${publicDomain.name}`;
				const imageUrl = await getCachedScreenshot(project.id, liveLink);

				return {
					title: project.name,
					description: project.framework || "A Vercel project",
					technologies: [project.framework].filter(Boolean),
					githubLink: project.link?.repo || "",
					liveLink,
					imageUrl,
				};
			})
		);

		return NextResponse.json(projects.filter(Boolean));
	} catch (error) {
		console.error("Error fetching projects:", error);
		return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
	}
}
