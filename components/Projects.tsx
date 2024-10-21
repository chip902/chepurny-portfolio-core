"use client";

import { useState, useEffect } from "react";
import { Box, Heading, SimpleGrid, Text, Badge, Button, VStack, HStack, useColorModeValue, Spinner, useDisclosure, Image } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import ProjectModal from "./Modal";
import { formatProjectTitle } from "@/lib/utils";

interface Project {
	title: string;
	description: string;
	technologies: string[];
	githubLink: string;
	liveLink: string;
	imageUrl: string | undefined | null;
}

const Projects = ({ initialProjects }: { initialProjects: Project[] }) => {
	const [projects, setProjects] = useState<Project[]>(initialProjects);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const { isOpen, onOpen, onClose } = useDisclosure();

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
				console.error("Error fetching projects:", err);
				// Use initial projects as fallback
				setProjects(initialProjects);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, [initialProjects]);

	const handleProjectClick = (project: Project) => {
		setSelectedProject(project);
		onOpen();
	};

	if (loading) {
		return (
			<Box as="section" id="projects" py={{ base: 20, md: 32 }} bg={bgColor} textAlign="center">
				<Spinner size="xl" />
			</Box>
		);
	}

	return (
		<Box as="section" id="projects" py={{ base: 20, md: 32 }} bg={bgColor}>
			<Box maxW="6xl" mx="auto" px={4}>
				<Heading as="h2" size="2xl" textAlign="center" mb={16}>
					My Projects
				</Heading>
				{error && (
					<Text color="red.500" textAlign="center" mb={8}>
						{error}
					</Text>
				)}
				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
					{projects.map((project, index) => (
						<Box
							key={index}
							bg={bgColor}
							p={6}
							rounded="md"
							shadow="md"
							onClick={() => handleProjectClick(project)}
							cursor="pointer"
							transition="all 0.2s"
							_hover={{ transform: "scale(1.05)" }}>
							<VStack align="start" spacing={4}>
								{project.imageUrl && <Image src={project.imageUrl} alt={project.title} borderRadius="md" />}
								<Heading as="h3" size="lg">
									{formatProjectTitle(project.title)}
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
			{selectedProject && <ProjectModal isOpen={isOpen} onClose={onClose} project={selectedProject} onClick={() => {}} />}
		</Box>
	);
};

export default Projects;
