"use client";

import { Box, Heading, Text, Button, VStack, Container } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Hero = () => {
	return (
		<Box as="section" py={{ base: 20, md: 32 }}>
			<Container maxW="4xl" textAlign="center">
				<VStack spacing={6}>
					<Heading as="h1" size="4xl" fontWeight="bold" lineHeight="tight">
						Hi, I&apos;m
						<Text as="span" color="blue.500" ml={5}>
							Andrew Chepurny
						</Text>
					</Heading>
					<Text fontSize={{ base: "lg", sm: "xl", md: "2xl" }} color="gray.500">
						I&apos;m a Senior Digital Analytics Engineer & Web Developer
					</Text>
					<Button size="lg" rightIcon={<ArrowForwardIcon />}>
						View My Work
					</Button>
				</VStack>
			</Container>
		</Box>
	);
};

export default Hero;
