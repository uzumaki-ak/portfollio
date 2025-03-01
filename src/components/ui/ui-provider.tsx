"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineTextStyles,
} from "@chakra-ui/react";
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
    "html, body": {
      bg: "blackAlpha.800",
      color: "whiteAlpha.500",

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
      bg: "gray.700",
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      bg: "darkorange",
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
  return <ChakraProvider value={styleSystum}>{props.children}</ChakraProvider>;
}
