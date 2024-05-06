import { Box, Container, Text } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box as="footer" bg="gray.400" py={4}>
			<Container maxW="container.lg">
				<Text>&copy; {new Date().getFullYear()} Andrew Chepurny. All rights reserved.</Text>
			</Container>
		</Box>
	);
};

export default Footer;
