"use client";

import { Box, Heading, SimpleGrid, Text, Badge, Button, VStack, HStack, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

const projects = [
	{
		title: "Project 1",
		description: "A brief description of Project 1",
		technologies: ["React", "Node.js", "MongoDB"],
		githubLink: "https://github.com/yourusername/project1",
		liveLink: "https://project1.com",
	},
	{
		title: "Project 2",
		description: "A brief description of Project 2",
		technologies: ["Vue.js", "Express", "PostgreSQL"],
		githubLink: "https://github.com/yourusername/project2",
		liveLink: "https://project2.com",
	},
	{
		title: "Project 3",
		description: "A brief description of Project 3",
		technologies: ["React Native", "Firebase"],
		githubLink: "https://github.com/yourusername/project3",
		liveLink: "https://project3.com",
	},
];

const Projects = () => {
	const bgColor = useColorModeValue("gray.100", "gray.700");

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
									<Button leftIcon={<FaGithub />} as="a" href={project.githubLink} target="_blank" size="sm" variant="outline">
										GitHub
									</Button>
									<Button rightIcon={<ExternalLinkIcon />} as="a" href={project.liveLink} target="_blank" size="sm" colorScheme="blue">
										Live Demo
									</Button>
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
