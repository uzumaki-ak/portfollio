"use client";

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
  Badge,
  Box,
  Button,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { FaGithubAlt, FaYoutube } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { useState, useEffect, useCallback } from "react";
import {
  SiMongodb,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiClerk,
  SiBootstrap,
  SiPython,
  SiFastapi,
  SiFirebase,
  SiOpenai,
  SiSupabase,
  SiExpo,
  SiGooglemaps,
  SiStreamlit,
  SiPostgresql,
  SiLeaflet,
  SiN8N,
  SiGooglecloud,
  SiDiscord,
  SiObsstudio,
  SiYoutube,
  SiLinkedin,
  SiKotlin,
  SiAndroid,
  SiJetpackcompose,
  SiGoogle,
  SiHiveBlockchain,
  SiSolidity,
  SiRemix,
} from "react-icons/si";
import { FaChrome } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";

export default function ProjectPage() {
  const [visibleProjects, setVisibleProjects] = useState(8);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectData.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  // Use useCallback to prevent unnecessary re-renders
  const loadMoreProjects = useCallback(() => {
    if (loading || visibleProjects >= filteredProjects.length) return;

    setLoading(true);
    setTimeout(() => {
      setVisibleProjects((prev) => Math.min(prev + 8, filteredProjects.length));
      setLoading(false);
    }, 300);
  }, [loading, visibleProjects, filteredProjects.length]);

  // Handle scroll with debounce
  useEffect(() => {
    if (visibleProjects >= filteredProjects.length) return;

    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const bottomPosition = document.documentElement.offsetHeight - 100;

      if (scrollPosition >= bottomPosition && !loading) {
        loadMoreProjects();
      }
    };

    // Add debounce to scroll handler
    let timeoutId: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debouncedScroll);
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, [loading, visibleProjects, loadMoreProjects, filteredProjects.length]);

  // Reset visible projects when category changes
  useEffect(() => {
    setVisibleProjects(8);
  }, [activeCategory]);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  return (
    <Stack gap={8}>
      <Metahead
        title="Projects | College Portfolio"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={["Portfolio", "Resume", "ChakraFramer"]}
        url={navItems.projects}
      />

      <Heading as="h1" fontSize="3xl" mb={4} color={"antiquewhite"}>
        Build&apos;s ⇲
      </Heading>

      <Flex gap={2} flexWrap="wrap" mb={8}>
        {[
          "All",
          "Web App",
          "Mobile App",
          "AI & Automation",
          "Extensions",
          "Blockchain",
        ].map((category) => (
          <Button
            key={category}
            size="sm"
            variant={activeCategory === category ? "solid" : "outline"}
            colorScheme={activeCategory === category ? "pink" : "gray"}
            onClick={() => setActiveCategory(category)}
            borderRadius="full"
            _hover={{
              bg: activeCategory === category ? "pink.600" : "gray.700",
            }}
          >
            {category}
          </Button>
        ))}
      </Flex>

      {displayedProjects.map((i) => (
        <Project key={i.title} {...i} />
      ))}

      {/* Loading spinner */}
      {loading && (
        <Center py={8}>
          <Spinner size="lg" color="pink.300" />
        </Center>
      )}

      {/* Load More Button */}
      {visibleProjects < filteredProjects.length && !loading && (
        <Center py={8}>
          <Button
            colorScheme="pink"
            variant="outline"
            onClick={loadMoreProjects}
            _hover={{ bg: "pink.500", color: "white" }}
          >
            Load More Projects ({filteredProjects.length - visibleProjects}{" "}
            remaining)
          </Button>
        </Center>
      )}

      {/* Completion message */}
      {visibleProjects >= filteredProjects.length && filteredProjects.length > 0 && (
        <Center py={8}>
          <Text color="gray.400" fontSize="sm">
            You've seen all {filteredProjects.length} projects! 🎉
          </Text>
        </Center>
      )}
    </Stack>
  );
}

type Project = {
  title: string;
  description: string;
  previewUrl?: string;
  gitUrl?: string;
  stack?: string[];
  label?: string;
  demoUrl?: string;
  category?: string;
};

const Project = ({
  title,
  description,
  previewUrl,
  gitUrl,
  stack,
  label,
  demoUrl,
}: Project) => {
  return (
    <Box mb={10}>
      <Stack gap={4}>
        <Flex flexWrap={"wrap"} gapX={4} gapY={2} alignItems="center">
          <Text textStyle={"cardHeading"} color={"pink.100"}>
            {title}
          </Text>
          {label && (
            <Badge
              bg="gray.700"
              color="gray.300"
              fontSize="0.7em"
              px={2}
              py={1}
            >
              {label}
            </Badge>
          )}
          <HStack gap={4} ml="auto">
            {previewUrl && (
              <CNLink href={previewUrl} color={"blue.200"}>
                <FiExternalLink size={"1.2rem"} />
              </CNLink>
            )}
            {gitUrl && (
              <CNLink href={gitUrl} color={"snow"}>
                <FaGithubAlt size={"1.2rem"} />
              </CNLink>
            )}
            {demoUrl && (
              <CNLink href={demoUrl} color={"snow"}>
                <FaYoutube size={"1.2rem"} />
              </CNLink>
            )}
          </HStack>
        </Flex>

        {stack && (
          <HStack gap={2} flexWrap="wrap">
            {stack.map((tech) => {
              const iconProps = {
                size: "0.8em",
                style: { marginRight: "4px" },
              };
              if (tech === "Next.js")
                return (
                  <Badge key={tech} colorScheme="blackAlpha">
                    <SiNextdotjs {...iconProps} /> Next.js
                  </Badge>
                );
              if (tech === "React")
                return (
                  <Badge key={tech} colorScheme="blue">
                    <SiReact {...iconProps} /> React
                  </Badge>
                );
              if (tech === "JavaScript")
                return (
                  <Badge key={tech} colorScheme="yellow">
                    <SiJavascript {...iconProps} /> JavaScript
                  </Badge>
                );
              if (tech === "Blockchain")
                return (
                  <Badge key={tech} colorScheme="yellow">
                    <SiHiveBlockchain {...iconProps} /> Blockchain
                  </Badge>
                );
              if (tech === "Solidity")
                return (
                  <Badge key={tech} colorScheme="yellow">
                    <SiSolidity {...iconProps} /> Solidity
                  </Badge>
                );
              if (tech === "Remix")
                return (
                  <Badge key={tech} colorScheme="yellow">
                    <SiRemix {...iconProps} /> Remix
                  </Badge>
                );
              if (tech === "TypeScript")
                return (
                  <Badge key={tech} colorScheme="blue">
                    <SiJavascript {...iconProps} /> TypeScript
                  </Badge>
                );
              if (tech === "Tailwind CSS")
                return (
                  <Badge key={tech} colorScheme="cyan">
                    <SiTailwindcss {...iconProps} /> Tailwind CSS
                  </Badge>
                );
              if (tech === "MongoDB")
                return (
                  <Badge key={tech} colorScheme="green">
                    <SiMongodb {...iconProps} /> MongoDB
                  </Badge>
                );
              if (tech === "Node.js")
                return (
                  <Badge key={tech} colorScheme="green">
                    <SiNodedotjs {...iconProps} /> Node.js
                  </Badge>
                );
              if (tech === "Express")
                return (
                  <Badge key={tech} colorScheme="gray">
                    <SiExpress {...iconProps} /> Express
                  </Badge>
                );
              if (tech === "Prisma")
                return (
                  <Badge key={tech} colorScheme="blue">
                    <SiPrisma {...iconProps} /> Prisma
                  </Badge>
                );
              if (tech === "Clerk")
                return (
                  <Badge key={tech} colorScheme="purple">
                    <SiClerk {...iconProps} /> Clerk
                  </Badge>
                );
              if (tech === "Bootstrap")
                return (
                  <Badge key={tech} colorScheme="purple">
                    <SiBootstrap {...iconProps} /> Bootstrap
                  </Badge>
                );
              if (tech === "Python")
                return (
                  <Badge key={tech} colorScheme="yellow">
                    <SiPython {...iconProps} /> Python
                  </Badge>
                );
              if (tech === "FastAPI")
                return (
                  <Badge key={tech} colorScheme="green">
                    <SiFastapi {...iconProps} /> FastAPI
                  </Badge>
                );
              if (tech === "Firebase")
                return (
                  <Badge key={tech} colorScheme="orange">
                    <SiFirebase {...iconProps} /> Firebase
                  </Badge>
                );
              if (tech === "OpenAI")
                return (
                  <Badge key={tech} colorScheme="green">
                    <SiOpenai {...iconProps} /> OpenAI
                  </Badge>
                );
              if (tech === "Supabase")
                return (
                  <Badge key={tech} colorScheme="green">
                    <SiSupabase {...iconProps} /> Supabase
                  </Badge>
                );
              if (tech === "Kotlin")
                return (
                  <Badge key={tech} colorScheme="green">
                    <SiKotlin {...iconProps} /> Kotlin
                  </Badge>
                );
              if (tech === "Android")
                return (
                  <Badge key={tech} colorScheme="orange">
                    <SiAndroid {...iconProps} /> Android
                  </Badge>
                );
              if (tech === "Jetpack Compose")
                return (
                  <Badge key={tech} colorScheme="green">
                    <SiJetpackcompose {...iconProps} /> Jetpack Compose
                  </Badge>
                );
              if (tech === "Java")
                return (
                  <Badge key={tech} colorScheme="green">
                    <RiJavaLine {...iconProps} /> Java
                  </Badge>
                );
              if (tech === "Expo")
                return (
                  <Badge key={tech} colorScheme="gray">
                    <SiExpo {...iconProps} /> Expo
                  </Badge>
                );
              if (tech === "Google Maps")
                return (
                  <Badge key={tech} colorScheme="red">
                    <SiGooglemaps {...iconProps} /> Google Maps
                  </Badge>
                );
              if (tech === "Streamlit")
                return (
                  <Badge key={tech} colorScheme="red">
                    <SiStreamlit {...iconProps} /> Streamlit
                  </Badge>
                );
              if (tech === "PostgreSQL")
                return (
                  <Badge key={tech} colorScheme="blue">
                    <SiPostgresql {...iconProps} /> PostgreSQL
                  </Badge>
                );
              if (tech === "Leaflet")
                return (
                  <Badge key={tech} colorScheme="green">
                    <SiLeaflet {...iconProps} /> Leaflet
                  </Badge>
                );
              if (tech === "n8n")
                return (
                  <Badge key={tech} colorScheme="purple">
                    <SiN8N {...iconProps} /> n8n
                  </Badge>
                );
              if (tech === "Gemini")
                return (
                  <Badge key={tech} colorScheme="blue">
                    <SiGooglecloud {...iconProps} /> Gemini
                  </Badge>
                );
              if (tech === "Discord")
                return (
                  <Badge key={tech} colorScheme="purple">
                    <SiDiscord {...iconProps} /> Discord
                  </Badge>
                );
              if (tech === "OBS Studio")
                return (
                  <Badge key={tech} colorScheme="purple">
                    <SiObsstudio {...iconProps} /> OBS Studio
                  </Badge>
                );
              if (tech === "Google")
                return (
                  <Badge key={tech} colorScheme="purple">
                    <SiGoogle {...iconProps} /> Google
                  </Badge>
                );
              if (tech === "YouTube API")
                return (
                  <Badge key={tech} colorScheme="red">
                    <SiYoutube {...iconProps} /> YouTube API
                  </Badge>
                );
              if (tech === "Chrome Extension")
                return (
                  <Badge key={tech} colorScheme="blue">
                    <FaChrome {...iconProps} /> Chrome Extension
                  </Badge>
                );
              if (tech === "LinkedIn API")
                return (
                  <Badge key={tech} colorScheme="blue">
                    <SiLinkedin {...iconProps} /> LinkedIn API
                  </Badge>
                );
              return (
                <Badge key={tech} colorScheme="gray">
                  {tech}
                </Badge>
              );
            })}
          </HStack>
        )}

        <Separator opacity={0.2} />
        <Text color="wheat" lineHeight="tall">
          {description}
        </Text>
      </Stack>
    </Box>
  );
};

const projectData = [
  {
    title: "Think-Tank",
    description:
      "A full-stack blog platform built with MERN stack supporting 300+ registered users with user authentication, post creation, and 3-level nested commenting system. Implemented role-based admin controls with 5-tier permissions managing 500+ posts reducing content moderation time by 60%. Added content recommendation engine with personalized suggestions.",
    previewUrl: "https://raghavblogs.onrender.com/",
    gitUrl: "https://github.com/uzumaki-ak/blogss",
    stack: ["MongoDB", "React", "Node.js", "Express", "JavaScript"],
    label: "Content Management System",
    category: "Web App",
  },
  {
    title: "Fin Genie",
    description:
      "An AI-powered financial management platform featuring automated transaction categorization, real-time analytics, and smart budgeting tools. The system helps users track expenses, optimize savings, and provides investment recommendations with multi-account management, tax optimization, and personalized financial coaching.",
    previewUrl: "https://fin-genies-kdzp.vercel.app/",
    gitUrl: "https://github.com/uzumaki-ak/FinGenie",
    stack: ["Next.js", "React", "Tailwind CSS", "Prisma", "Clerk"],
    label: "AI Financial Platform",
    category: "Web App",
  },
  {
    title: "AdSpectra",
    description:
      "A comprehensive digital marketing agency website offering web design, SEO, content creation, social media marketing, and PPC advertising services. Features client showcases, detailed service breakdowns, creative process workflows, client testimonials, and service guarantees with contact integration for business growth.",
    previewUrl: "https://ak-agency.vercel.app/",
    gitUrl: "https://github.com/uzumaki-ak/market-agency",
    stack: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    label: "Digital Marketing Agency",
    category: "Web App",
  },
  {
    title: "Flash-Chat",
    description:
      "A WhatsApp messaging tool enabling users to chat with any 10-digit number without saving contacts. Features QR code generation for easy chat initiation, rapid messaging experience, and seamless WhatsApp API integration with a clean UI that eliminates contact saving requirements.",
    previewUrl: "https://whatsapp-flash-chat.vercel.app/",
    gitUrl: "https://github.com/uzumaki-ak/flash-chat",
    stack: ["React", "JavaScript", "Bootstrap"],
    label: "WhatsApp Utility Tool",
    category: "Web App",
  },
  {
    title: "Project Drishti",
    description:
      "An AI-powered real-time video anomaly detection system for security monitoring using computer vision. Processes IP webcam streams, detects fire, smoke, crowd panic, and suspicious activities with Gemini Vision API, and provides real-time alerts with interactive map visualization and email notifications.",
    previewUrl: "https://github.com/uzumaki-ak/agentic-ai",
    gitUrl: "https://github.com/uzumaki-ak/agentic-ai",
    stack: ["Python", "FastAPI", "React", "Firebase", "Gemini"],
    label: "AI Video Surveillance System",
    category: "AI & Automation",
  },
  {
    title: "Kaamly",
    description:
      "A task automation application that processes natural language instructions to book services, find providers, make automated phone calls, and schedule appointments. Uses AI for intent understanding, location search, and automated communication with calendar integration and email confirmations.",
    previewUrl: "https://github.com/uzumaki-ak/kaamly",
    gitUrl: "https://github.com/uzumaki-ak/kaamly",
    demoUrl: "https://youtu.be/OMLiYpTUiuY",

    stack: ["Next.js", "React", "TypeScript", "Supabase", "Gemini"],
    label: "Task Automation Platform",
    category: "AI & Automation",
  },
  {
    title: "SchedulAI",
    description:
      "An intelligent meeting scheduling platform using multi-agent AI negotiation to coordinate meeting times between participants. Features real-time conflict resolution, calendar management, automated email invitations, and priority-based scheduling with cross-timezone support.",
    previewUrl: "https://schedual-ai.vercel.app/",
    gitUrl: "https://github.com/uzumaki-ak/schedual-ai",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI"],
    label: "AI Meeting Scheduler",
    category: "AI & Automation",
  },
  {
    title: "Reframe",
    description:
      "A web application for documenting and sharing philosophical evolution over time. Users track belief changes, engage with community thoughts through voting and comments, with features including category systems, rich text support, search functionality, and theme customization.",
    previewUrl: "https://github.com/uzumaki-ak/-Reframe",
    gitUrl: "https://github.com/uzumaki-ak/-Reframe",
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma"],
    label: "Philosophy Tracking Platform",
    category: "Web App",
  },
  {
    title: "Semantic Movie Search",
    description:
      "A semantic search web application powered by Upstash Search that enables natural language movie queries. Users can search using contextual phrases with semantic understanding, featuring dark/light mode, keyboard shortcuts, and detailed movie information with vintage-inspired UI.",
    previewUrl: "https://sementic-search-cu57.vercel.app/",
    gitUrl: "https://github.com/uzumaki-ak/sementic-search",
    demoUrl: "https://youtu.be/OMLiYpTUiuY",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Upstash"],
    label: "Semantic Search Engine",
    category: "Web App",
  },
  {
    title: "RAG Document Assistant",
    description:
      "A Retrieval-Augmented Generation system for document processing and question answering. Features automatic text chunking, FAISS vector similarity search, Gemini API-powered responses, and Streamlit-based interactive UI with persistent storage for efficient document analysis.",
    previewUrl: "https://anikesh.streamlit.app/",
    gitUrl: "https://github.com/uzumaki-ak/rag-q-a",
    stack: ["Python", "Streamlit", "FAISS", "Gemini", "NumPy"],
    label: "Document Analysis System",
    category: "AI & Automation",
  },
  {
    title: "AI Assist Mobile",
    description:
      "A cross-platform mobile application for creating custom AI agents and managing chat interactions. Built with Expo Router and React Native, featuring Clerk authentication, Firebase integration, custom agent creation with personalized prompts, and chat history management.",
    previewUrl: "https://github.com/uzumaki-ak/ai-assis-rn",
    gitUrl: "https://github.com/uzumaki-ak/ai-assis-rn",
    demoUrl: "https://youtu.be/gthwb3HnEqI",
    stack: ["React Native", "Expo", "Firebase", "Clerk", "TypeScript"],
    label: "Mobile AI Assistant",
    category: "Mobile App",
  },
  {
    title: "n8n Lead Generator",
    description:
      "An automated lead generation and outreach workflow using n8n automation platform. Processes search queries, queries Google Maps via SerpAPI, scrapes business websites for contact information, enriches data, saves to Google Sheets, and generates cold emails using Gemini API with SMTP delivery.",
    previewUrl: "https://github.com/uzumaki-ak/n8n-lead-generator-email",
    gitUrl: "https://github.com/uzumaki-ak/n8n-lead-generator-email",
    stack: ["n8n", "Python", "Google Sheets", "Gemini", "SMTP"],
    label: "Automation Workflow System",
    category: "AI & Automation",
  },
  {
    title: "Rakshak Medicine Tracker",
    description:
      "A comprehensive medicine management mobile application with expiry tracking, barcode/OCR scanning, and AI-powered health assistance. Features include inventory management, reminder systems, report analysis, symptom checking, and family sharing capabilities for medication safety.",
    previewUrl: "https://github.com/uzumaki-ak/Rakshak",
    gitUrl: "https://github.com/uzumaki-ak/Rakshak",
    stack: ["React Native", "Expo", "Supabase", "OCR", "AI"],
    label: "Healthcare Management App",
    category: "Mobile App",
  },
  {
    title: "Audio Pattern Detector",
    description:
      "An end-to-end system for detecting audio patterns using advanced signal processing and visualization. Features multi-method detection including cross-correlation, chroma features, and spectral contrast with confidence scoring, waveform visualization, and interactive web interface for audio analysis.",
    previewUrl: "https://audio-pattern-detector-sa1h.vercel.app/",
    gitUrl: "https://github.com/uzumaki-ak/audio-pattern-detector",
    demoUrl: "https://youtu.be/6W6wjV44Yfw",
    stack: ["Python", "FastAPI", "React", "Next.js", "Librosa"],
    label: "Audio Analysis System",
    category: "AI & Automation",
  },
  {
    title: "CSV Analyzer",
    description:
      "An AI-powered data analysis tool for CSV, JSON, and TSV files with interactive visualizations and insights. Features multi-format support, AI-powered analysis using multiple providers, interactive chart generation, chat with data functionality, and export capabilities for comprehensive data exploration.",
    previewUrl: "https://csv-json-vizualizer.vercel.app/",
    gitUrl: "https://github.com/uzumaki-ak/ai-csv-json-tsv-etc.-analyzer",
    demoUrl: "https://youtu.be/2FNDIbP9suM",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI"],
    label: "Data Visualization Tool",
    category: "AI & Automation",
  },
  {
    title: "LinkedIn Automation Post",
    description:
      "An automated content generation workflow using n8n that creates, formats, and publishes content to LinkedIn and Discord using AI and Google APIs. Streamlines content creation pipelines with automated image generation, document formatting, and multi-platform publishing.",
    previewUrl: "https://github.com/uzumaki-ak/linkedin-automation-post",
    demoUrl: "https://youtu.be/IexrkruCKoc",
    gitUrl: "https://github.com/uzumaki-ak/linkedin-automation-post",
    stack: ["n8n", "Google APIs", "Gemini", "Discord API", "LinkedIn API"],
    label: "Content Automation Workflow",
    category: "AI & Automation",
  },
  {
    title: "Family Vault",
    description:
      "A secure digital vault for families to preserve and share memories with features like media uploads, shared access, and AI-powered organization. Supports photos, videos, audio recordings with voting-based deletion, media verification, and legacy notes for multi-generational preservation.",
    previewUrl: "https://family-vaults.vercel.app/",
    gitUrl: "https://github.com/uzumaki-ak/family-vaults",
    stack: ["Next.js", "TypeScript", "Supabase", "Prisma", "Tailwind CSS"],
    label: "Family Memory Platform",
    category: "Web App",
  },
  {
    title: "YouTube Shorts Auto Cutter",
    description:
      "An automation tool that captures live stream moments, transcribes audio with AI, and uploads clips to YouTube as Shorts with automated metadata. Integrates with OBS Studio, processes replay buffers, and generates titles/descriptions using AI models for efficient content creation.",
    previewUrl: "https://github.com/uzumaki-ak/utube-shorts-auto-cutter",
    gitUrl: "https://github.com/uzumaki-ak/utube-shorts-auto-cutter",
    stack: ["Node.js", "Python", "OBS Studio", "YouTube API", "Gemini"],
    label: "Video Automation Tool",
    category: "AI & Automation",
  },
  {
    title: "README Creator",
    description:
      "A web application to generate professional README files with AI assistance, featuring templates, customization, and real-time preview. Includes multiple AI model support, project structure visualization, and chat-based assistance for comprehensive documentation creation.",
    previewUrl: "https://readme-creator-mini-coderabbit-cel8.vercel.app/",
    gitUrl: "https://github.com/uzumaki-ak/readme-creator-mini-coderabbit",
    demoUrl: "https://youtu.be/mqxlrZfmMns",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "AI", "Supabase"],
    label: "Documentation Generator",
    category: "AI & Automation",
  },
  {
    title: "RSVPify",
    description:
      "An event management platform for creating events, sending invites, and tracking attendee responses with an admin dashboard for organizers. Features guest management, attendance tracking, event details management, and invitation link sharing for comprehensive event coordination.",
    previewUrl: "https://rsvpify.vercel.app/",
    demoUrl: "https://youtu.be/CQheZDy8PII",
    gitUrl: "https://github.com/uzumaki-ak/rsvp",
    stack: ["Next.js", "React", "JavaScript", "Node.js", "Express"],
    label: "Event Management System",
    category: "Web App",
  },
  {
    title: "WA Web Chat Summarizer",
    description:
      "A Chrome extension for WhatsApp Web that uses AI to summarize chat conversations, extracting key points and generating concise overviews. Features automatic message extraction, AI-powered summarization with Gemini, secure API key storage, and popup interface for configuration.",
    previewUrl: "https://github.com/uzumaki-ak/WA-web-chat-summarizer-ext",
    demoUrl: "https://youtu.be/co4GStCRRYw",
    gitUrl: "https://github.com/uzumaki-ak/WA-web-chat-summarizer-ext",
    stack: [
      "TypeScript",
      "Chrome Extension",
      "Gemini",
      "Tailwind CSS",
      "Webpack",
    ],
    label: "Browser Extension",
    category: "Extensions",
  },
  {
    title: "Team Management Auth",
    description:
      "A role-based authentication system for team management with user roles, team assignments, and secure access control using JWT and Prisma. Supports multiple roles, team membership management, user filtering, and secure authentication workflows for organizational access control.",
    gitUrl: "https://github.com/uzumaki-ak/team-mang-role-based-auth",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "JWT"],
    label: "Authentication System",
    category: "Web App",
  },
  {
    title: "VoiceRecorder-AI",
    description: "VoiceRecorder-App-AI is a professional Android voice recording application designed to provide users with high-quality audio recording, organization, and management features.",
    gitUrl: "https://github.com/uzumaki-ak/VoiceRecorder-App-AI",
    stack: ["Kotlin", "Jetpack Compose", "Android"],
    label: "Voice Recorder App",
    category: "Mobile App",
  },
  {
    title: "AskMyRepo",
    description: "AskMyRepo is a professional, full-stack web application designed to enable seamless interaction with your GitHub repositories. It combines AI capabilities with source code understanding, allowing users to ask questions about their codebase and receive accurate, context-aware answers. The platform integrates GPT-based AI models, embedding similarity search, and a user-friendly interface to facilitate efficient code exploration, documentation, and project management",
    gitUrl: "https://github.com/uzumaki-ak/ask-my-repo",
    previewUrl: "https://askmyrepo.onrender.com/",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini", "Supabase"],
    label: "AI Chat App",
    category: "Web App",
  },
  {
    title: "Instagram,Youtube,Facebook,Twitter video downloader",
    description: "MediaDLBackend is a highly reliable, multi-platform video and audio downloading backend API built with FastAPI. Designed for robustness and versatility, it supports multiple popular content platforms including YouTube, Instagram, Reddit, Twitter/X, TikTok, Facebook, and Vimeo. Its core strength lies in a 3-layer fallback system that ensures download success even when primary methods encounter issues—leveraging yt-dlp as the primary downloader, with secondary support from instagrapi for Instagram, and a tertiary fallback using requests and regex parsing.",
    gitUrl: "https://github.com/uzumaki-ak/MediaDLBackend",
    previewUrl: "https://mediadlbackend.onrender.com/",
    stack: ["FastAPI", "Python", "yt-dlp", "instagrapi", "requests", "regex"],
    label: "Video Downloader API",
    category: "Web App",
  },
  {
    title: "Instagram,Youtube,Facebook,Twitter video downloader",
    description: "MediaDlApp is a professional, full-stack mobile application designed to enable seamless downloading of videos and audio from multiple social media platforms. It combines AI capabilities with source code understanding, allowing users to ask questions about their codebase and receive accurate, context-aware answers. The platform integrates GPT-based AI models, embedding similarity search, and a user-friendly interface to facilitate efficient code exploration, documentation, and project management",
    gitUrl: "https://github.com/uzumaki-ak/MediaDlApp",
    stack: ["Kotlin", "Android", "Jetpack Compose"],
    label: "Video Downloader App",
    category: "Mobile App",
  },
  {
    title: "Lecture Docs",
    description: "Transform your handwritten lecture notes, PDFs, audio, and code into beautiful, kid-friendly documentation with AI-powered insights and per-project chatbots",
    gitUrl: "https://github.com/uzumaki-ak/lecture-docs",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini", "Supabase", "Python", "FastAPI", "LangChain", "ChromaDB", "Docker", "Redis"],
    label: "AI Chat App",
    demoUrl: "https://youtu.be/_Iyqe4NJIao",
    category: "Web App",
  },
  {
    title: "LumaFont",
    description: "LumaFront is a sophisticated Android application designed to provide real-time face tracking and overlay lighting effects system-wide. Built with modern Android architecture and leveraging on-device machine learning, it detects faces via Google ML Kit and displays a dynamic, studio-style glow overlay that follows the user's face. The app also monitors front camera usage across the device, intelligently activating overlays only when the front camera is in use, creating an immersive lighting experience akin to Apple's MacBook Edge Light.",
    gitUrl: "https://github.com/uzumaki-ak/LumaFront",
    demoUrl: "https://youtu.be/nrljg4TrCF0",
    stack: ["Kotlin", "Android", "Jetpack Compose", "ML Kit"],
    label: "Android App",
    category: "Mobile App",
  },
  {
    title: "ChargeLock",
    description: "Unplug Guard is an always-on Android security app that protects your phone from physical theft and tampering in public spaces. It instantly triggers a loud, unstoppable alarm when your device is unplugged from power or disconnected from trusted accessories — and can only be dismissed by the real device owner using biometric or system credentials.",
    gitUrl: "https://github.com/uzumaki-ak/ChargeLock",
    stack: ["Kotlin", "Android", "Jetpack Compose"],
    label: "Android App",
    category: "Mobile App",
  },
  {
    title: "Self Destruct Chat App",
    description: "Self Destruct Chat is a professional, full-stack web application designed to enable seamless, secure, and ephemeral messaging between users. It combines real-time chat capabilities with advanced self-destructing message functionality, allowing users to send messages that automatically disappear after a specified time interval. The platform integrates a user-friendly interface with robust backend architecture to facilitate secure, private, and temporary conversations.",
    gitUrl: "https://github.com/uzumaki-ak/self-destruct-chat-app",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Upstash", "Elysia.js"],
    label: "Chat App",
    category: "Web App",
  },
  {
    title: "MeetPing",
    description: "MeetPing is a sophisticated Android application designed to facilitate seamless, intelligent meeting management and note-taking. Leveraging advanced speech recognition, hierarchical summarization, and integrated large language models (LLMs), MeetPing captures live meeting transcripts, condenses discussions into meaningful summaries",
    gitUrl: "https://github.com/uzumaki-ak/MeetPing",
    demoUrl: "https://youtu.be/BGLMY-3C9lM",
    stack: ["Kotlin", "Android", "Jetpack Compose", "ML Kit"],
    label: "Android App",
    category: "Mobile App",
  },
  {
    title: "NotifIQ",
    description: "NotifIQ is a professional, full-stack Android application designed to enable seamless, intelligent notification management and analysis. Leveraging advanced notification tracking, hierarchical summarization, and integrated large language models (LLMs), NotifIQ captures live notification data, condenses discussions into meaningful summaries",
    gitUrl: "https://github.com/uzumaki-ak/NotifIQ",
    stack: ["Kotlin", "Android", "Jetpack Compose", "ML Kit"],
    label: "Android App",
    category: "Mobile App",
  },
  {
    title: "WAMR-APP-Clone",
    description: "WAMR-APP-Clone is a sophisticated Android-based messaging recovery application that allows users to browse, organize, and analyze recovered chat messages and media files from WhatsApp and similar messaging platforms. Built with a focus on privacy and data visualization, the app provides features such as chat management, media viewing, status downloads, and notification monitoring, all while maintaining a user-friendly interface.",
    gitUrl: "https://github.com/uzumaki-ak/WAMR-APP-Clone",
    stack: ["Kotlin", "Android", "Jetpack Compose"],
    label: "Android App",
    category: "Mobile App",
  },
  {
    title: "App Locker",
    description: "App Locker is a professional, full-stack Android application designed to enable seamless, intelligent app locking and security. Leveraging advanced app locking, hierarchical summarization, and integrated large language models (LLMs), App Locker captures live app usage data, condenses discussions into meaningful summaries",
    gitUrl: "https://github.com/uzumaki-ak/App-Locker-pin-patttern-biometric",
    demoUrl: "https://youtu.be/DiJNnu_a0s4",
    stack: ["Kotlin", "Android", "Jetpack Compose"],
    label: "Android App",
    category: "Mobile App",
  },
  {
    title: "Android-Floating-Volume-Buttons",
    description: "Android-Floating-Volume-Buttons is a professional-grade Android application designed to enhance user control over device volume and screen management through a persistent floating overlay. The app provides custom floating buttons that allow users to adjust volume, mute/unmute, and lock the device screen directly from an overlay window that appears above all other apps. The overlay is draggable, customizable, and runs as a foreground service to ensure stability and persistence even when the app is not actively in use.",
    gitUrl: "https://github.com/uzumaki-ak/Android-Floating-Volume-Buttons",
    demoUrl: "https://youtu.be/Phi531TxvgQ",
    stack: ["Kotlin", "Android", "Jetpack Compose"],
    label: "Android App",
    category: "Mobile App",
  },
  {
    title: "Blockchain Basics",
    description: "Completed core blockchain fundamentals covering decentralized ledger architecture, cryptographic linking, smart contracts (Ethereum vs Bitcoin), gas and transaction economics (including EIP-1559), consensus evolution from PoW to PoS, and hard-fork governance with real-world case studies like ETH vs ETC.",
    gitUrl: "https://github.com/uzumaki-ak/blockchain",
    stack: ["Solidity", "Hardhat", "Ethers.js", "Truffle", "Ganache", "Remix", "Blockchain"],
    label: "Blockchain",
    category: "Blockchain",
  },
  {
    title: "Solidity-Projects",
    description: "Solidity Basics",
    gitUrl: "https://github.com/uzumaki-ak/Solidity",
    stack: ["Solidity", "Remix", "Blockchain"],
    label: "Blockchain",
    category: "Blockchain",
  }
];
