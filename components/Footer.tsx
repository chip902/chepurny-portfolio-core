'use client'

import { Box, Text, HStack, Link, Container, useColorModeValue } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box as="footer" bg={bgColor} borderTop="1px" borderColor={borderColor}>
      <Container maxW="6xl" py={10}>
        <Box display={{ base: 'block', md: 'flex' }} alignItems="center" justifyContent="space-between">
          <Text textAlign={{ base: 'center', md: 'left' }} fontSize="sm" mb={{ base: 4, md: 0 }}>
            Built by Your Name. Hosted on{" "}
            <Link href="https://vercel.com" isExternal fontWeight="medium">
              Vercel
            </Link>
            . The source code is available on{" "}
            <Link href="https://github.com/yourusername/portfolio" isExternal fontWeight="medium">
              GitHub
            </Link>
            .
          </Text>
          <HStack spacing={6} justify={{ base: 'center', md: 'flex-end' }}>
            <Link href="https://github.com/yourusername" isExternal>
              <FaGithub size={24} />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" isExternal>
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://twitter.com/yourusername" isExternal>
              <FaTwitter size={24} />
            </Link>
          </HStack>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer