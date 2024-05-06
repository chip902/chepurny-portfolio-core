import { Box, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';
import {projects} from '../data/projects';

const ProjectsSection = () => (
  <Box padding="4" maxW="1200px" margin="auto">
      <SimpleGrid columns={1} spacing={10}>
        {projects.map(project => (
          <ProjectCard project={project} key={project.id} {...project} />
        ))}
      </SimpleGrid>
    </Box>
);
  export default ProjectsSection;