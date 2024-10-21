import { Suspense } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

async function getProjects() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`, { cache: "no-store" });
	if (!res.ok) {
		throw new Error("Failed to fetch projects");
	}
	return res.json();
}
export const metadata = {
	title: "Andrew Chepurny - Portfolio",
	description: "Showcase of my coding projects and skills",
};

export default async function Home() {
	const projects = await getProjects();

	return (
		<div className="min-h-screen flex flex-col">
			<Suspense fallback={<div>Loading header...</div>}>
				<Header />
			</Suspense>
			<main className="flex-grow flex flex-col">
				<Suspense fallback={<div>Loading hero...</div>}>
					<Hero />
				</Suspense>
				<Suspense fallback={<div>Loading projects...</div>}>
					<Projects initialProjects={projects} />
				</Suspense>
				<Suspense fallback={<div>Loading skills...</div>}>
					<Skills />
				</Suspense>
				<Suspense fallback={<div>Loading contact...</div>}>
					<Contact />
				</Suspense>
			</main>
			<Suspense fallback={<div>Loading footer...</div>}>
				<Footer />
			</Suspense>
		</div>
	);
}
