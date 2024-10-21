// pages/about.tsx

import Header from "@/components/Header";
import { Container, Heading, Text, Box, Image } from "@chakra-ui/react";
import { Suspense } from "react";

function About() {
	return (
		<div className="min-h-screen flex flex-col">
			<Suspense fallback={<div>Loading header...</div>}>
				<Header />
			</Suspense>
			<main className="flex-grow flex flex-col">
				<Container maxW="container.lg" py={12}>
					<Heading as="h2" size="xl" mb={6} textAlign="center">
						About Me
					</Heading>

					<Box display="flex" justifyContent="center" alignItems="center" mb={8}>
						<Image src="/andrew-profile.jpeg" alt="Andrew Chepurny" borderRadius="full" boxSize="150px" /> {/* Replace with your profile image */}
					</Box>

					<Text fontSize="xl">
						Driven by a passion for building innovative web experiences and leveraging data insights to drive business success, I&apos;m Andrew
						Chepurny, a Senior Digital Analytics Engineer and Web Developer. My expertise spans the full spectrum of the development lifecycle, from
						crafting elegant front-end interfaces using React and TypeScript to architecting complex back-end systems with Node.js and Python. With
						over 16 years of experience in the digital analytics realm, I&apos;ve honed my skills in Adobe Experience Platform, Adobe Analytics, and
						various data visualization tools. I thrive on transforming complex data into actionable insights that empower businesses to make
						informed decisions. Beyond technical proficiency, I value clear communication, collaborative teamwork, and a dedication to delivering
						exceptional results.
					</Text>
				</Container>
			</main>
		</div>
	);
}

export default About;
