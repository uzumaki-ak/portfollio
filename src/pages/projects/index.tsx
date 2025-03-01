import { CNLink } from "@/components/chakra-next";
import Metahead from "@/components/metahead";
import { navItems } from "@/lib/config/nav-confg";
import {
  Flex,
  Heading,
  HStack,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithubAlt } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectPage() {
  return (
    <Stack gap={8}>
      <Heading as="h1" fontSize="3xl" mb={4} color={"antiquewhite"}>
        Build&apos;s ⇲
      </Heading>

      {projectData.map((i) => (
        <Project key={i.title} {...i} />
      ))}
    </Stack>
  );
}

type Project = {
  title: string;
  description: string;
  previewUrl?: string;
  gitUrl?: string;
};

const Project = ({ title, description, previewUrl, gitUrl }: Project) => {
  return (
    <>
      <Metahead
        title="Projects | College Portfolio"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={["Portfolio", "Resume", "ChakraFramer"]}
        url={navItems.projects}
      />
      <Stack gap={4}>
        <Flex flexWrap={"wrap"} gapX={4} gapY={2}>
          <Text textStyle={"cardHeading"} color={"pink.100"}>
            {title}
          </Text>
          <HStack gap={4}>
            <CNLink hidden={!previewUrl} href={previewUrl!} color={"blue.200"}>
              <FiExternalLink size={"1.2rem"} />
            </CNLink>
            <CNLink hidden={!gitUrl} href={gitUrl!} color={"snow"}>
              <FaGithubAlt size={"1.2rem"} />
            </CNLink>
          </HStack>
        </Flex>
        <Separator opacity={0.2} />
        <Text>{description}</Text>
      </Stack>
    </>
  );
};

const projectData: Project[] = [
  {
    title: "Think-Tank",
    description:
      "A blogging platform crafted to empower writers and readers with seamless content creation, discovery, and engagement.",
    previewUrl: "#",
    gitUrl: "https://github.com/uzumaki-ak/blogss",
  },
  {
    title: "Fin Genie",
    description:
      "A smart financial management platform that helps users track expenses, manage budgets, and optimize savings. It features AI-driven insights, automated transaction categorization, and real-time financial analytics to empower better financial decisions.",
    previewUrl: "#",
    gitUrl: "https://github.com/uzumaki-ak/FinGenie",
  },
  {
    title: "AdSpectra",
    description:
      "A marketing agency dedicated to helping businesses enhance their brand presence, attract the right audience, and drive measurable growth through strategic campaigns.",
    previewUrl: "#",
    gitUrl: "https://github.com/uzumaki-ak/market-agency",
  },
  {
    title: "Flash-Chat",
    description:
      "A quick and hassle-free tool that lets users start a WhatsApp chat instantly by entering a phone number—no need to save contacts, just scan the QR code or get redirected in one click.",
    previewUrl: "#",
    gitUrl: "https://github.com/uzumaki-ak/flash-chat",
  },
  {
    title: "First-Frame",
    description:
      "A personal portfolio created during my early days as a developer, showcasing my beginner projects, skills, and growth in web development.",
    previewUrl: "#",
    gitUrl: "https://github.com/uzumaki-ak/old-portfolio",
  },
];
