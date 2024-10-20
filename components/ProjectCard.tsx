"use client";
import { Box, Image, Text, useDisclosure } from "@chakra-ui/react";
import ProjectModal from "./Modal";
import { Project } from "@/app/types/project";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<Box
			borderWidth={3}
			_hover={{
				transform: "scale(1.03)",
				transitionDuration: "0.2s",
				transitionTimingFunction: "ease-in-out",
			}}
			borderRadius={10}
			overflow={"hidden"}
			p={4}
			onClick={onOpen}>
			<Image src={project.imageUrl} alt={project.title} />
			<Box p="6">
				<Text mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
					{project.title}
				</Text>
				<Text>{project.summary}</Text>
			</Box>
			<ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
		</Box>
	);
};

export default ProjectCard;
