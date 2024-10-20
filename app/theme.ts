import { theme } from "@chakra-ui/pro-theme";
import { extendTheme } from "@chakra-ui/react";

const proTheme = extendTheme(theme);
const extenstion = {
	colors: { ...proTheme.colors, brand: proTheme.colors.teal },
};

const buttonColor = {
	colors: {
		brand: {
			0: "#ffffff",
			50: "#0F073F",
			500: "#0F073F",
			900: "#0F073F",
			1000: "#4C34FB",
		},
	},
};

const buttonLink = {
	...buttonColor,
	components: {
		Button: {
			variants: {
				solid: {
					bg: "brand.500",
					color: "white",
					_hover: {
						bg: "brand.1000",
						_disabled: {
							bg: "brand.500",
						},
					},
				},
				footer: {
					bg: "brand.500",
					color: "white",
					_hover: {
						bg: "brand.0",
						color: "brand.500",
						_disabled: {
							bg: "brand.500",
						},
					},
				},
				linkNav: {
					position: "relative",
					color: "black",
					_hover: {
						color: "#4c34fb",
						textDecoration: "none",
						_after: {
							width: "100%",
						},
					},
					_after: {
						content: '""',
						position: "absolute",
						width: "0",
						height: "2px",
						backgroundColor: "#4c34fb",
						bottom: "0",
						left: "50%",
						transform: "translateX(-50%)",
						transition: "width 0.3s ease-out",
					},
				},
			},
		},
	},
};

const fontConfig = {
	fonts: {
		body: "Quicksand, system-ui, sans-serif",
		nav: "Quicksand, system-ui, sans-serif",
		heading: "Quicksand, Georgia, serif",
		mono: "Menlo, monospace",
	},
	fontSizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "3.75rem",
		"7xl": "4.5rem",
		"8xl": "6rem",
		"9xl": "8rem",
	},
	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	},
	lineHeights: {
		normal: "normal",
		none: 1,
		shorter: 1.25,
		short: 1.375,
		base: 1.5,
		tall: 1.625,
		taller: "2",
		"3": ".75rem",
		"4": "1rem",
		"5": "1.25rem",
		"6": "1.5rem",
		"7": "1.75rem",
		"8": "2rem",
		"9": "2.25rem",
		"10": "2.5rem",
	},
	letterSpacings: {
		tighter: "-0.05em",
		tight: "-0.025em",
		normal: "0",
		wide: "0.025em",
		wider: "0.05em",
		widest: "0.1em",
	},
};

const mobileMenuStyles = {
	components: {
		Drawer: {
			// Drawer customizations if needed
		},
		Accordion: {
			parts: ["button", "panel"],
			baseStyle: {
				button: {
					// Apply the same styles as "mobileMenu" variant for Button
					fontSize: "lg",
					fontWeight: "med",
					textAlign: "left",
					justifyContent: "flex-start",
					_expanded: { bg: "gray.200" },
					_hover: { bg: "gray.100" },
					// Add other styles as needed
				},
				panel: {
					padding: 4, // Panel padding
					// Define other panel styles if needed
				},
				// Define item styles if needed
			},
		},
		Button: {
			variants: {
				mobileMenu: {
					fontSize: "med",
					fontWeight: "med",
					textAlign: "left",
					justifyContent: "flex-start",
				},
			},
		},
	},
};

const imageConfig = {
	components: {
		Image: {
			global: {
				shadow: "2xl",
			},
		},
	},
};

const extendedConfig = extendTheme({ ...fontConfig, ...extenstion, ...imageConfig, ...buttonColor, ...mobileMenuStyles, ...buttonLink });
const myTheme = extendTheme(extendedConfig, proTheme);

export default myTheme;
