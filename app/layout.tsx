import { Providers } from "./providers";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: "400",
	style: "normal",
	display: "swap",
	subsets: ["latin"],
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className={roboto.className} lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
