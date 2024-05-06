import { Box, Container, Text } from "@chakra-ui/react";
import { Providers } from "./provider";
import NavigationMenu from "./components/NavMenu";
import Footer from "./components/Footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html>
			<body>
				<Box>
					<Providers>
						<NavigationMenu />
						{/* Main content */}
						<Container maxW="container.lg" py={8}>
							{children}
						</Container>
						<Footer />
					</Providers>
				</Box>
			</body>
		</html>
	);
}
