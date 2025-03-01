import { CNLink } from "@/components/chakra-next";
import { Box, Heading, Separator, Stack, Text } from "@chakra-ui/react";
import { CiMail } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";

export default function Home() {
  return (
    <Stack gap={8} separator={<Separator opacity={0.2} />}>
      <Stack>
        <Heading as="h1">Yo there, I'm Anikesh Kumar</Heading>
        <Text>
          I'm a full-stack developer from Delhi, India, i Like building dynamic,
          user-friendly web experiences with a touch of design refinement.
        </Text>
      </Stack>
      {chunks.map((item) => (
        <Stack key={item.title}>
          <Heading as="h2">{item.title}</Heading>
          <Box>{item.content}</Box>
        </Stack>
      ))}
    </Stack>
  );
}

export const chunks = [
  {
    title: "Professional Work",
    content: (
      <Stack gap={2}>
        <Text>
          I specialize in building scalable, user-focused solutions. As a
          freelance developer, I collaborate with clients on web and mobile
          projects, optimizing platform performance.
        </Text>
        <Text>
          One of my standout projects was developing a B2B platform that
          optimized workflows for a mid-sized company. Explore more of my work
          on the Projects page.
        </Text>
      </Stack>
    ),
  },
  {
    title: "Leadership & Community",
    content: (
      <Text>
        I have experience guiding teams in dynamic environments, ensuring
        meaningful outcomes. I've also led workshops to enhance technical and
        organizational skills and contributed to community events that foster
        collaboration.
      </Text>
    ),
  },
  {
    title: "Personal Interests",
    content: (
      <Text>
        Outside of work, I love delving into technology, personal growth, and
        creative pursuits like music and writing. I'm always eager to learn new
        skills and broaden my horizons.
      </Text>
    ),
  },
  {
    title: "Writing",
    content: (
      <Stack gap={3}>
        <Text>
          I’ve begun sharing my expertise through blogs and articles, aiming to
          help others enhance their skills and stay ahead of industry trends.
          Stay tuned for more insights!
        </Text>
        <CNLink
          width={"fit-content"}
          _focus={{ outline: "none", boxShadow: "none" }}
          display={"flex"}
          href="https://x.com/UzumakiAk77285"
          target="_blank"
        >
          <GoArrowUpRight />
          Follow me
        </CNLink>
        <CNLink
          width={"fit-content"}
          _focus={{ outline: "none", boxShadow: "none" }}
          display={"flex"}
          href="mailto:placeholder@example.com"
          target="_blank"
        >
          <CiMail />
          placeholder@example.com
        </CNLink>
      </Stack>
    ),
  },
];
