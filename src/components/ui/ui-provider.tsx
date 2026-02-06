import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineTextStyles,
} from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { Saira as BodyFont, DM_Sans as HeadingFont } from "next/font/google";

export const bodyFont = BodyFont({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
});

export const headingFont = HeadingFont({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
});

// !setting up fonts

const styleSystum = createSystem(defaultConfig, {
  globalCss: {
    ":root": {
      "--accent-color": "#ED8936", // Default darkorange
    },
    "html, body": {
      bg: "blackAlpha.900", // Slightly darker for better contrast
      color: "whiteAlpha.800",
      lineHeight: 1.5,
      scrollBehavior: "smooth",
    },
    "h1, h2, h3, h4, h5": {
      color: "white",
    },
    "::-webkit-scrollbar": {
      width: "10px",
      zIndex: "1",
    },
    // track
    "::-webkit-scrollbar-track": {
      bg: "gray.950",
    },
    // thumb
    "::-webkit-scrollbar-thumb": {
      bg: "var(--accent-color)", // Dynamic accent color
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      bg: "var(--accent-color)",
      filter: "brightness(1.1)",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: headingFont.style.fontFamily,
        },
        body: {
          value: bodyFont.style.fontFamily,
        },
      },
      colors: {
        accent: {
          value: "var(--accent-color)",
        },
      },
    },
    textStyles: defineTextStyles({
      cardHeading: {
        description: "the heading for the card",
        value: {
          fontSize: "xl",
          fontWeight: "medium",
        },
      },
    }),
  },
});

type props = {
  children: React.ReactNode;
};

export function UiProvider(props: props) {
  return (
    <ChakraProvider value={styleSystum}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
