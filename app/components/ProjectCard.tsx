import { Box, Heading, Text, Link } from '@chakra-ui/react';

interface Props {
    title: string;
    description: string;
    technologies: string[];
    liveDemo: string;
    repository: string;
}


const ProjectCard = ( { title, description, technologies, liveDemo, repository }:Props ) => {
    return (
      <Box borderWidth={1} borderRadius="md" p={4}>
        <Heading as="h3" size="md" mb={2}>{title}</Heading>
        <Text mb={2}>{description}</Text>
        <Text mb={2}>
          <strong>Technologies:</strong> {technologies.join(', ')}
        </Text>
        <Link href={liveDemo} isExternal mr={4}>Live Demo</Link>
        <Link href={repository} isExternal>Repository</Link>
      </Box>
    );
  };

  export default ProjectCard;