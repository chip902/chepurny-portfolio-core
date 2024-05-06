import { Box, Heading, Text } from "@chakra-ui/react";
import ProjectsSection from "./projects/page";

const Home = () => {
	return (
		<Box>
			<Heading as="h2" size="xl" mb={4}>
				Welcome to My Portfolio
			</Heading>
			<Text>Hi, I am Andrew Chepurny, a React developer with expertise in building modern web applications.</Text>
			<ProjectsSection />
		</Box>
	);
};

export default Home;
