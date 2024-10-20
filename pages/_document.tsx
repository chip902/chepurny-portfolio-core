import Layout from "@/app/layout";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<style>{`body { font-family: roberto; }`}</style>
				</Head>
				<Layout>
					<body>
						<Main />
						<NextScript />
					</body>
				</Layout>
			</Html>
		);
	}
}

export default MyDocument;
