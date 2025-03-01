import { CNLink } from "@/components/chakra-next";
import Metahead from "@/components/metahead";

import { navItems } from "@/lib/config/nav-confg";
import { Heading, Separator, Stack } from "@chakra-ui/react";
import { FaRegCalendarDays } from "react-icons/fa6";

import { RiMailSendFill } from "react-icons/ri";

export default function ContactPage() {
  return (
    <>
      <Metahead
        title="Contact | College Portfolio"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={["Portfolio", "Resume", "ChakraFramer"]}
        url={navItems.contact}
      />
      <Stack gap={8}>
        <Heading as="h1" fontSize="3xl" color={"pink.muted"}>
          Touchpoint ⇲
        </Heading>
        <Stack gap={2}>
          <Heading as={"h2"} fontSize="2xl" color={"pink.50"}>
            You can reach me anytime via email 📨
          </Heading>
          <CNLink
            width={"fit-content"}
            _focus={{ outline: "none", boxShadow: "none" }}
            display={"flex"}
            href={navItems.mailTo}
            target="_blank"
            color={"wheat"}
          >
            <RiMailSendFill />
            anikeshuzumaki@gmail.com
          </CNLink>
        </Stack>
        <Separator opacity={0.2} />
        <Stack gap={2}>
          <Heading as={"h2"} fontSize="2xl" color={"pink.50"}>
            Book a meeting 📅
          </Heading>
          <CNLink
            width={"fit-content"}
            _focus={{ outline: "none", boxShadow: "none" }}
            display={"flex"}
            href={navItems.bookCalender}
            target="_blank"
            color={"peachpuff"}
          >
            <FaRegCalendarDays />
            Schedule a meet{" "}
          </CNLink>
        </Stack>
      </Stack>
    </>
  );
}
