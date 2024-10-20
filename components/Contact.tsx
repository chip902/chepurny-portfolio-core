'use client'

import { useState } from 'react'
import { Box, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast, Container, useColorModeValue } from '@chakra-ui/react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log({ name, email, message })
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    setName('')
    setEmail('')
    setMessage('')
  }

  const bgColor = useColorModeValue('gray.100', 'gray.700')

  return (
    <Box as="section" id="contact" py={{ base: 20, md: 32 }} bg={bgColor}>
      <Container maxW="md">
        <Heading as="h2" size="2xl" textAlign="center" mb={16}>
          Get in Touch
        </Heading>
        <VStack as="form" onSubmit={handleSubmit} spacing={6}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              minH="150px"
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Send Message
          </Button>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact