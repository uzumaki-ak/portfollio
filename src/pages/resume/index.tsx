import { CNLink } from "@/components/chakra-next";
import Metahead from "@/components/metahead";
import { navItems } from "@/lib/config/nav-confg";
import { Flex, Heading, Separator, Stack, Text, Button, Box } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";

export default function ResumePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Metahead
        title="Resume | College Portfolio"
        description="Portfolio resume showcasing experience, projects, awards, and certifications."
        keywords={["Portfolio", "Resume", "Full Stack Developer"]}
        url={navItems.resume}
      />

      <Stack gap={12}>
        {/* Header */}
        <Flex justifyContent={"space-between"}>
          <Heading as="h1" fontSize="3xl" color={"HighlightText"}>
            My CV ⩸
          </Heading>

          <Box position="relative">
            <Button
              variant="outline"
              border={"1px solid"}
              borderColor={"gray.500"}
              borderRadius={"sm"}
              px={4}
              py={0}
              h={8}
              fontSize={"sm"}
              fontWeight={"normal"}
              color={"cornsilk"}
              _active={{ bg: "whiteAlpha.100" }}
              _hover={{ bg: "whiteAlpha.100" }}
              onClick={() => setIsOpen(!isOpen)}
            >
              Download Resume <IoChevronDown />
            </Button>

            {isOpen && (
              <Box
                position="absolute"
                top="100%"
                right={0}
                mt={2}
                bg="black"
                border="1px solid"
                borderColor="gray.700"
                borderRadius="sm"
                zIndex={1500}
                minW="180px"
                py={2}
                boxShadow="lg"
              >
                <Stack gap={0}>
                  <CNLink
                    href={navItems.appResumePdf}
                    target="_blank"
                    px={4}
                    py={2}
                    _hover={{ bg: "whiteAlpha.200", textDecoration: "none" }}
                    display="block"
                    fontSize="sm"
                    color="gray.300"
                    onClick={() => setIsOpen(false)}
                  >
                    App Dev Resume
                  </CNLink>
                  <CNLink
                    href={navItems.webResumePdf}
                    target="_blank"
                    px={4}
                    py={2}
                    _hover={{ bg: "whiteAlpha.200", textDecoration: "none" }}
                    display="block"
                    fontSize="sm"
                    color="gray.300"
                    onClick={() => setIsOpen(false)}
                  >
                    Web Dev Resume
                  </CNLink>
                </Stack>
              </Box>
            )}
          </Box>
        </Flex>

        {/* Experience */}
        <Stack id="Experience" gap={8}>
          <Heading as="h2" fontSize="2xl" color={"cornsilk"}>
            Expertise & Role&apos;s ↴
          </Heading>
          {experienceData.map((item) => (
            <Experience key={item.company} {...item} />
          ))}
        </Stack>

        {/* Education */}
        <Stack id="Education" gap={8}>
          <Heading as="h2" fontSize="2xl" color={"cornsilk"}>
            Academic Background ⇙
          </Heading>
          {educationData.map((item) => (
            <Education key={item.degree} {...item} />
          ))}
        </Stack>

        {/* Awards */}
        <Stack id="Award" gap={8}>
          <Heading as="h2" fontSize="2xl" color={"cornsilk"}>
            Awards, Certifications & Mentorship
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

/* ===================== EXPERIENCE ===================== */

type Experience = {
  company: string;
  title: string;
  fromDate: string;
  toDate: string;
  deliverables: string[];
  link?: {
    label: string;
    url: string;
  };
};

const Experience = ({
  company,
  deliverables,
  fromDate,
  title,
  toDate,
  link,
}: Experience) => {
  return (
    <Stack gap={4}>
      <Flex justifyContent={"space-between"} flexWrap={"wrap"} gap={2}>
        <Flex alignItems="center" gap={2} flexWrap="wrap">
          <Text textStyle={"cardHeading"} color={"white"}>
            {company} | {title}
          </Text>

          {link && (
            <CNLink
              href={link.url}
              target="_blank"
              fontSize="xs"
              border="1px solid"
              borderColor="gray.500"
              px={2}
              py={0.5}
              borderRadius="sm"
              _hover={{ textDecoration: "none", opacity: 0.85 }}
            >
              {link.label}
            </CNLink>
          )}
        </Flex>

        <Text fontSize={"sm"}>
          {fromDate} - {toDate}
        </Text>
      </Flex>

      <Separator opacity={0.2} />

      <Stack as={"ul"} listStyleType={"disc"} ml={5}>
        {deliverables.map((item) => (
          <Text as="li" key={item}>
            {item}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};

const experienceData: Experience[] = [
  {
    company: "BizByte",
    title: "Front-End Developer (Freelance)",
    fromDate: "2025-02-20",
    toDate: "2025-04-20",
    link: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/bizbyte2024/",
    },
    deliverables: [
      "Built and maintained a dynamic betting platform using Next.js and TypeScript.",
      "Improved UI performance and reduced load times through optimization.",
      "Collaborated with QA and backend teams for stable deployments.",
      "Authored API documentation to improve developer onboarding.",
    ],
  },
  {
    company: "Atoms",
    title: "Full-Stack Developer",
    fromDate: "2025-01-01",
    toDate: "Present",
    link: {
      label: "Live Site",
      url: "https://atoms-digital.vercel.app/",
    },
    deliverables: [
      "Built full-stack applications using Next.js, React, and TypeScript.",
      "Developed scalable backends using Node.js, Express, PostgreSQL, and Supabase.",
      "Implemented secure authentication using JWT and NextAuth.",
    ],
  },
  {
    company: "Hack4Brahma Community",
    title: "Full-Stack Developer Intern",
    fromDate: "2025-07-01",
    toDate: "2025-09-30",
    link: {
      label: "GitHub",
      url: "https://github.com/uzumaki-ak/H4B-main-ak",
    },
    deliverables: [
      "Engineered a digital badge generator serving 500+ users with camera integration, file uploads, and real-time preview, reducing processing time by ~80%.",
      "Implemented high-resolution image downloads using html2canvas with a 99% success rate and integrated social sharing features, increasing user engagement by ~45%.",
      "Built responsive UI components using Tailwind CSS, Framer Motion animations, and Lucide icons, optimizing cross-device compatibility and overall UX.",
    ],
  },

  {
    company: "CodeWithDhruv",
    title: "Full-Stack Developer Intern",
    fromDate: "2025-08-06",
    toDate: "2025-09-11",
    link: {
      label: "Certificate",
      url: "https://www.linkedin.com/posts/anikesh-kumar-1b87b42a5_fullstackdeveloper-nextjs-typescript-activity-7390107780990550017-gmSl",
    },
    deliverables: [
      "Worked on production-level applications using Next.js, TypeScript, and Supabase.",
      "Followed real-world architectural patterns and deployment workflows.",
      "Participated in daily stand-ups and rigorous code reviews.",
      "Worked under mentorship of Dhananjay (Dhruv) Arne.",
    ],
  },
];

/* ===================== EDUCATION ===================== */

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
      <Flex justifyContent={"space-between"} flexWrap={"wrap"} gap={2}>
        <Text textStyle={"cardHeading"} color={"white"}>
          {degree}
        </Text>
        <Text fontSize={"sm"}>
          {fromDate} - {toDate}
        </Text>
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
    location: "New Delhi, India",
  },
  {
    degree: "Higher Secondary Certificate",
    cgpa: "71%",
    fromDate: "April 2022",
    toDate: "April 2023",
    location: "New Delhi, India",
  },
];

/* ===================== AWARDS ===================== */

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
        {date} |{" "}
        <CNLink href={url} target="_blank">
          View Proof
        </CNLink>
      </Text>
    </Stack>
  );
};

export const awardData: Award[] = [
  {
    title: "NSUT Delhi Hackathon 2025 (Avinya) – 2nd Place | Team Astra X",
    date: "2025",
    url: "https://www.linkedin.com/posts/anikesh-kumar-1b87b42a5_finallywon-hackathonvictory-nsut-activity-7315274423937167363-AS26",
  },
  {
    title: "NexHack 2025 – Hackathon Mentor (Geeta University)",
    date: "2025",
    url: "https://www.linkedin.com/posts/anikesh-kumar-1b87b42a5_nexhack2025-mentorship-hackathon-activity-7393685417512030208-oAAz",
  },
  {
    title: "T-Rex Hackathon – 5th Rank",
    date: "2024",
    url: "#",
  },
  {
    title: "Code Cubicles Hackathon – Top 10",
    date: "2024",
    url: "#",
  },
  {
    title: "Clash of Codes Hackathon – 6th Rank",
    date: "2020",
    url: "#",
  },
];
