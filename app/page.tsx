import { Box, Heading, Text } from '@chakra-ui/react';
import Layout from './layout';

const Home = () => {
  return (
    <Layout>
      <Box>
        <Heading as="h2" size="xl" mb={4}>Welcome to My Portfolio</Heading>
        <Text>
          Hi, I am Andrew Chepurny, a React developer with expertise in building modern web applications.
        </Text>
        {/* Highlight your notable projects or skills */}
      </Box>
    </Layout>
  );
};

export default Home;