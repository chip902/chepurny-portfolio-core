import { Box, Container, Text } from "@chakra-ui/react";
import { Providers } from "./provider";
import NavigationMenu from "./components/NavMenu";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body>
    <Box>
      <Providers>
        <NavigationMenu/>
        {/* Main content */}
        <Container maxW="container.lg" py={8}>
          {children}
        </Container>
        {/* Footer */}
        <Box as="footer" bg="gray.100" py={4}>
          <Container maxW="container.lg">
            <Text>&copy; {new Date().getFullYear()} Andrew Chepurny. All rights reserved.</Text>
          </Container>
        </Box>
      </Providers>
    </Box>
    </body>
    </html>
  );
}
