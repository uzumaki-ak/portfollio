import { navItems } from "@/lib/config/nav-confg";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { CNLink } from "./chakra-next";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const items = [
    {
      title: "landing",
      href: navItems.home,
    },
    {
      title: "resume",
      href: navItems.resume,
    },
    {
      title: "projects",
      href: navItems.projects,
    },
    // {
    //   title: "blog",
    //   href: navItems.blog,
    // },
    {
      title: "contact",
      href: navItems.contact,
    },
  ];

  return (
    <Flex
      gap={5}
      flexWrap={"wrap"}
      py={{
        base: 8,
        lg: 12,
      }}
    >
      {items.map((item) => (
        <CNLink
          key={item.title}
          href={item.href}
          color={pathname === item.href ? "darkorange" : "gray.500"}
        >
          {item.title}
        </CNLink>
      ))}
    </Flex>
  );
}
