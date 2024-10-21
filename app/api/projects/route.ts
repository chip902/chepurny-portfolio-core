import { NextResponse } from "next/server";

const VERCEL_API_TOKEN = process.env.VERCEL_API_TOKEN;
const VERCEL_TEAM_ID = process.env.VERCEL_TEAM_ID;

export async function GET() {
	if (!VERCEL_API_TOKEN) {
		return NextResponse.json({ error: "Vercel API token is not set" }, { status: 500 });
	}

	try {
		const response = await fetch(`https://api.vercel.com/v9/projects?teamId=${VERCEL_TEAM_ID}`, {
			headers: {
				Authorization: `Bearer ${VERCEL_API_TOKEN}`,
			},
		});

		if (!response.ok) {
			throw new Error("Failed to fetch projects from Vercel API");
		}

		const data = await response.json();

		// Transform the data to match our project structure
		const projects = data.projects.map((project: any) => ({
			title: project.name,
			description: project.framework || "A Vercel project",
			technologies: [project.framework].filter(Boolean),
			githubLink: project.link?.repo || "",
			liveLink: `https://${project.latestDeployments[0]?.url}` || "",
		}));

		return NextResponse.json(projects);
	} catch (error) {
		console.error("Error fetching projects:", error);
		return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 });
	}
}
