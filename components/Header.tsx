'use client'

import { useState } from 'react'
import { Box, Flex, Link, Button, useColorMode, useColorModeValue, IconButton, Stack, Collapse } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('white', 'gray.800')
  const color = useColorModeValue('gray.800', 'white')

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Box as="header" position="sticky" top={0} zIndex={50} bg={bgColor} color={color} borderBottom="1px" borderColor={useColorModeValue('gray.200', 'gray.700')}>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" maxWidth="6xl" margin="0 auto">
        <Flex align="center" mr={5}>
          <Link href="/" fontWeight="bold" fontSize="lg">Your Name</Link>
        </Flex>

        <Stack direction="row" display={{ base: 'none', md: 'flex' }} width={{ base: 'full', md: 'auto' }} alignItems="center" flexGrow={1} mt={{ base: 4, md: 0 }} spacing={6}>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact">Contact</Link>
        </Stack>

        <Box>
          <IconButton
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            aria-label="Toggle color mode"
            mr={2}
          />
          <IconButton
            display={{ base: 'block', md: 'none' }}
            onClick={toggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle navigation"
          />
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link href="#projects" onClick={toggle}>Projects</Link>
            <Link href="#skills" onClick={toggle}>Skills</Link>
            <Link href="#contact" onClick={toggle}>Contact</Link>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  )
}

export default Header