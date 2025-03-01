import { CNLink } from "@/components/chakra-next";
import Metahead from "@/components/metahead";
import { navItems } from "@/lib/config/nav-confg";
import { Flex, Heading, Separator, Stack, Text } from "@chakra-ui/react";

export default function ResumePage() {
  return (
    <>
      <Metahead
        title="Resume | College Portfolio"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={["Portfolio", "Resume", "ChakraFramer"]}
        url={navItems.resume}
      />
      <Stack gap={12}>
        <Flex justifyContent={"space-between"}>
          <Heading as="h1" fontSize="3xl" color={"HighlightText"}>
            My CV ⩸
          </Heading>
          <CNLink
            href={navItems.resumePdf}
            border={"1px solid"}
            borderColor={"gray.500"}
            borderRadius={"sm"}
            target={"_blank"}
            px={4}
            py={0}
            fontSize={"sm"}
            _hover={{ textDecoration: "none" }}
            color={"cornsilk"}
          >
            Download Resume
          </CNLink>
        </Flex>
        <Stack id="Experience" gap={8}>
          <Heading as="h2" fontSize="2xl" color={"cornsilk"}>
            Expertise & Role&apos;s ↴
          </Heading>
          {experienceData.map((item) => (
            <Experience key={item.company} {...item} />
          ))}
        </Stack>
        <Stack id="Education" gap={8}>
          <Heading as="h2" fontSize="2xl" color={"cornsilk"}>
            Academic Background ⇙
          </Heading>
          {educationData.map((item) => (
            <Education key={item.degree} {...item} />
          ))}
        </Stack>
        <Stack id="Award" gap={8}>
          <Heading as="h2" fontSize="2xl" color={"cornsilk"}>
            Awards & Certifications
          </Heading>
          <Stack separator={<Separator opacity={0.2} />}>
            {awardData.map((item) => (
              <Award key={item.title} {...item} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

type Experience = {
  company: string;
  title: string;
  fromDate: string;
  toDate: string;
  deliverables: string[];
};

const Experience = ({
  company,
  deliverables,
  fromDate,
  title,
  toDate,
}: Experience) => {
  return (
    <Stack gap={4}>
      <Flex justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"} gap={2}>
        <Text textStyle={"cardHeading"} color={"white"}>
          {company} | {title}
        </Text>
        <Text fontSize={"sm"}>
          {fromDate} - {toDate}
        </Text>
      </Flex>
      <Separator opacity={0.2} />
      <Stack as={"ul"} listStyleType={"disc"} ml={5}>
        {deliverables.map((item) => (
          <Text as="li" key={item}>{item}</Text>
        ))}
      </Stack>
    </Stack>
  );
};

const experienceData: Experience[] = [
  {
    company: "BizByte",
    title: "Front-End Dev",
    fromDate: "2025-02-20",
    toDate: "developing",
    deliverables: [
      "Built and maintained a dynamic betting platform using Next.js, TypeScript, and ShadCN for a seamless user experience.",
      "Enhanced UI performance, reducing load times by 25% through optimization techniques and efficient rendering strategies.",
      "Worked closely with QA and backend teams to ensure smooth deployments and bug-free releases.",
      "Authored detailed API documentation, improving developer onboarding and integration efficiency.",
    ],
  },
  {
    company: "Atoms",
    title: "FullStack Dev",
    fromDate: "2025-01-01",
    toDate: "developing",
    deliverables: [
      "Built and optimized full-stack applications using Next.js, React, TypeScript, ShadCN, Chakra UI, and Tailwind CSS.",
      "Developed robust backends with Node.js, Express, and PostgreSQL/MongoDB, leveraging Neon and Supabase for efficient database management.",
      "Implemented authentication and security measures using JWT, Firebase, and NextAuth, ensuring compliance with industry standards.",
      "Worked on multiple projects, including FinGenie (a financial management platform built with Next.js) and ThinkTank (a blog site developed using the MERN stack).",
    ],
  },
];

type Education = {
  degree: string;
  cgpa: string;
  fromDate: string;
  toDate: string;
  location: string;
};

const Education = ({ cgpa, degree, fromDate, location, toDate }: Education) => {
  return (
    <Stack gap={4}>
      <Flex justifyContent={"space-between"} alignItems={"center"} flexWrap={"wrap"} gap={2}>
        <Text textStyle={"cardHeading"} color={"white"}>{degree}</Text>
        <Text fontSize={"sm"}>{fromDate} - {toDate}</Text>
      </Flex>
      <Separator opacity={0.2} />
      <Stack as={"ul"} listStyleType={"disc"} ml={5}>
        <Text as="li">{cgpa}</Text>
        <Text as="li">{location}</Text>
      </Stack>
    </Stack>
  );
};

export const educationData: Education[] = [
  {
    degree: "B-Tech (CSE)",
    cgpa: "Studying",
    fromDate: "Aug 2023",
    toDate: "Sept 2027",
    location: "N.Delhi, DL, IN",
  },
  {
    degree: "Higher Secondary Certificate",
    cgpa: "71%",
    fromDate: "April 2022",
    toDate: "April 2023",
    location: "N.Delhi, DL, IN",
  },
];

type Award = {
  title: string;
  date: string;
  url: string;
};

const Award = ({ title, date, url }: Award) => {
  return (
    <Stack>
      <Text textStyle={"cardHeading"}>{title}</Text>
      <Text fontSize={"sm"}>
        {date} | <CNLink href={url} target="_blank">View Certificate</CNLink>
      </Text>
    </Stack>
  );
};

export const awardData: Award[] = [
  {
    title: "T-Rex Hackathon: 5th Rank",
    date: "2024",
    url: "#",
  },
  {
    title: "Code Cubicles-Hackathon: Top-10",
    date: "2024",
    url: "#",
  },
  {
    title: "Clash of Codes-Hackathon: 6th Rank",
    date: "2020",
    url: "#",
  },
];
