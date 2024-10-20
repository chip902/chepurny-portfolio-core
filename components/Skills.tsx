'use client'

import { Box, Heading, Wrap, WrapItem, Tag, Container } from '@chakra-ui/react'

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", "HTML", "CSS",
  "Tailwind CSS", "Git", "Docker", "AWS", "Python", "Machine Learning"
]

const Skills = () => {
  return (
    <Box as="section" id="skills" py={{ base: 20, md: 32 }}>
      <Container maxW="4xl">
        <Heading as="h2" size="2xl" textAlign="center" mb={16}>
          My Skills
        </Heading>
        <Wrap justify="center" spacing={4}>
          {skills.map((skill, index) => (
            <WrapItem key={index}>
              <Tag size="lg" variant="subtle" colorScheme="blue" py={2} px={4}>
                {skill}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </Box>
  )
}

export default Skills