"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import myTheme from "./theme";

const theme = extendTheme({
	config: {
		initialColorMode: "system",
		useSystemColorMode: true,
	},
});

export function Providers({ children }: { children: React.ReactNode }) {
	return <ChakraProvider theme={myTheme}>{children}</ChakraProvider>;
}
