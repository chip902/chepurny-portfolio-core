import { SimpleGrid } from '@chakra-ui/react';
import ProjectCard from '../components/ProjectCard';
import {projects} from '../data/projects';

const ProjectsSection = () => (
  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
    {projects.map((project) => (
      <ProjectCard key={project.id} {...project} />
    ))}
  </SimpleGrid>
);
  export default ProjectsSection;