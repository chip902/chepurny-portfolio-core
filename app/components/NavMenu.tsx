import { Box, Container, Flex, Heading, Link } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavigationMenu = () => (
    <Box as="header" bg="gray.400" py={4}>
        <Container maxW="container.lg">
            <Heading as="h1" size="xl">Andrew Chepurny</Heading>
            <Flex as="nav" justifyContent="space-between" alignItems="center" p={4}>
                <Link href="/" p={2}>Home</Link>
                <Link href="/about" p={2}>About Me</Link>
                <Link href="/projects" p={2}>Projects</Link>
                <Link href="/contact" p={2}>Contact</Link>
                <ColorModeSwitch/>
            </Flex>
        </Container>
    </Box>
);

export default NavigationMenu;
