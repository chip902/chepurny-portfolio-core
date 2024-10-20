import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Box } from "@chakra-ui/react";

export const metadata = {
	title: "Andrew Chepurny - Portfolio",
	description: "Showcase of my coding projects and skills",
};
export default function Home() {
	return (
		<Box minHeight="100vh" display="flex" flexDirection="column">
			<Header />
			<Box as="main" flexGrow={1} display="flex" flexDirection="column">
				<Hero />
				<Projects />
				<Skills />
				<Contact />
			</Box>
			<Footer />
		</Box>
	);
}
