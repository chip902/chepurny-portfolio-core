// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrew Chepurny - Portfolio",
  description: "A portfolio showcasing my React projects",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box>
          {/* Header */}
          <Box as="header" bg="gray.100" py={4}>
            <Container maxW="container.lg">
              <Heading as="h1" size="xl">Your Name</Heading>
              {/* Navigation menu */}
            </Container>
          </Box>

          {/* Main content */}
          <Container maxW="container.lg" py={8}>
            {children}
          </Container>

          {/* Footer */}
          <Box as="footer" bg="gray.100" py={4}>
            <Container maxW="container.lg">
              <Text>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</Text>
              {/* Contact information and social media links */}
            </Container>
          </Box>
        </Box>
      </body>
    </html>
  );
}