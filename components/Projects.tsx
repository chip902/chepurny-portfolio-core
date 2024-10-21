"use client";

import { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid, Text, Badge, Button, VStack, HStack, useColorModeValue, Spinner } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

interface Project {
	title: string;
	description: string;
	technologies: string[];
	githubLink: string;
	liveLink: string;
}

const Projects = ({ initialProjects }: { initialProjects: Project[] }) => {
	const [projects, setProjects] = useState<Project[]>(initialProjects);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const bgColor = useColorModeValue("gray.100", "gray.700");

	useEffect(() => {
		const fetchProjects = async () => {
			setLoading(true);
			try {
				const response = await fetch("/api/projects");
				if (!response.ok) {
					throw new Error("Failed to fetch projects");
				}
				const data = await response.json();
				setProjects(data);
			} catch (err) {
				setError("Failed to load projects. Please try again later.");
				console.error("Error fetching projects:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	if (loading) {
		return (
			<Box as="section" id="projects" py={{ base: 20, md: 32 }} bg={bgColor} textAlign="center">
				<Spinner size="xl" />
			</Box>
		);
	}

	if (error) {
		return (
			<Box as="section" id="projects" py={{ base: 20, md: 32 }} bg={bgColor} textAlign="center">
				<Text color="red.500">{error}</Text>
			</Box>
		);
	}
	return (
		<Box as="section" id="projects" py={{ base: 20, md: 32 }} bg={bgColor}>
			<Box maxW="6xl" mx="auto" px={4}>
				<Heading as="h2" size="2xl" textAlign="center" mb={16}>
					My Projects
				</Heading>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
					{projects.map((project, index) => (
						<Box key={index} bg={bgColor} p={6} rounded="md" shadow="md">
							<VStack align="start" spacing={4}>
								<Heading as="h3" size="lg">
									{project.title}
								</Heading>
								<Text>{project.description}</Text>
								<HStack wrap="wrap">
									{project.technologies.map((tech, techIndex) => (
										<Badge key={techIndex} colorScheme="blue">
											{tech}
										</Badge>
									))}
								</HStack>
								<HStack spacing={4}>
									{project.githubLink && (
										<Button leftIcon={<FaGithub />} as="a" href={project.githubLink} target="_blank" size="sm" variant="outline">
											GitHub
										</Button>
									)}
									{project.liveLink && (
										<Button rightIcon={<ExternalLinkIcon />} as="a" href={project.liveLink} target="_blank" size="sm" colorScheme="blue">
											Live Demo
										</Button>
									)}
								</HStack>
							</VStack>
						</Box>
					))}
				</SimpleGrid>
			</Box>
		</Box>
	);
};

export default Projects;
