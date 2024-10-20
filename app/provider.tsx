"use client";
import { ChakraProvider } from "@chakra-ui/react";
import myTheme from "./theme";
export function Providers({ children }: { children: React.ReactNode }) {
	return <ChakraProvider theme={myTheme}>{children}</ChakraProvider>;
}
