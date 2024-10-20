"use client";
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { CgDarkMode } from "react-icons/cg";

const ColorModeSwitch = () => {
	const { toggleColorMode, colorMode } = useColorMode();
	return (
		<HStack>
			<Switch colorScheme={"green"} isChecked={colorMode === "dark"} onChange={toggleColorMode} />
			<Text whiteSpace={"nowrap"}>
				<CgDarkMode fontSize="18px"/>
			</Text>
		</HStack>
	);
};

export default ColorModeSwitch;
