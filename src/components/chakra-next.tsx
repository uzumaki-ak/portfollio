import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

import NextLink, { LinkProps as NextLinkProps } from "next/link";

//  *Extends ChakraLinkProps → Inherits all props from Chakra UI’s <Link> component, meaning it can accept styles like color, isExternal, etc.

// Omit<NextLinkProps, "href"> removes the href property from NextLinkProps.
 // This means nextProps can include all Next.js <Link> props (like prefetch, replace, scroll), except href (since we already define it separately). 

interface CNLinkProps extends ChakraLinkProps {
  href: string;
  children: React.ReactNode;
  nextProps?: Omit<NextLinkProps, "href ">;
}

export const CNLink = ({
  href,
  children,
  nextProps,
  ...props
}: CNLinkProps) => {
  return (
    // *passed as child so that what evr property chkralink gets it al;so gets ppassed to tyhe nxtluink
    <ChakraLink color={'gray.500'} {...props} asChild>
      <NextLink href={href} {...nextProps}>
        {children}
      </NextLink>
    </ChakraLink>
  );
};
