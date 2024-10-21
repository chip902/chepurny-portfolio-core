"use client";

import {
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	VStack,
	HStack,
	Badge,
	Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

interface Project {
	title: string;
	description: string;
	technologies: string[];
	githubLink: string;
	liveLink: string;
}

interface ProjectModalProps {
	isOpen: boolean;
	onClose: () => void;
	project: Project;
	onClick: () => void;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} size="xl">
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{project.title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<VStack align="start" spacing={4}>
						<Text fontSize="lg">{project.description}</Text>
						<HStack wrap="wrap">
							{project.technologies.map((tech, index) => (
								<Badge key={index} colorScheme="blue">
									{tech}
								</Badge>
							))}
						</HStack>
						<HStack spacing={4}>
							{project.githubLink && (
								<Button leftIcon={<FaGithub />} as={Link} href={project.githubLink} target="_blank" size="sm" variant="outline">
									GitHub
								</Button>
							)}
							{project.liveLink && (
								<Button rightIcon={<ExternalLinkIcon />} as={Link} href={project.liveLink} target="_blank" size="sm" colorScheme="blue">
									Live Demo
								</Button>
							)}
						</HStack>
					</VStack>
				</ModalBody>
				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default ProjectModal;
