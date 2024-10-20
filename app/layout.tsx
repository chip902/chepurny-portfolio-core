import { Providers } from "./providers";

export const metadata = {
	title: "Andrew Chepurny - Portfolio",
	description: "Showcase of my coding projects and skills",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
