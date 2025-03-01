import { Button, Center } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { LuMailbox } from "react-icons/lu";
import { RiTwitterFill } from "react-icons/ri";
import { TfiInstagram } from "react-icons/tfi";
import { CNLink } from "./chakra-next";

export default function Footer() {
  // *def socila med icon
  const items: {
    Icon: IconType;
    href: string;
    title: string;
  }[] = [
    {
      Icon: LuMailbox,
      href: "mailto:anikeshuzumaki@gmail.com",
      title: "Email",
    },
    {
      Icon: FiLinkedin,
      href: " https://www.linkedin.com/in/anikesh-kumar-1b87b42a5",
      title: "Linkedin",
    },
    {
      Icon: FiGithub,
      href: " https://github.com/uzumaki-ak",
      title: "Github",
    },
    {
      Icon: TfiInstagram,
      href: "https://www.instagram.com/anikesshh",
      title: "Insta",
    },
    {
      Icon: RiTwitterFill,
      href: "https://x.com/UzumakiAk77285",
      title: "X",
    },
  ];

  return (
    <Center
      display={"flex"}
      gap={5}
      py={{
        base: 8,
        lg: 12,
      }}
    >
      {items.map((item) => {
        return (
          <Button
            as="div"
            key={item.title}
            variant={"surface"}
            p={2}
            _hover={{ bg: "#38ED18" }}
          >
            <CNLink href={item.href}>
              <item.Icon />
            </CNLink>
          </Button>
        );
      })}
    </Center>
  );
}
