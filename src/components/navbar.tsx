import { navItems } from "@/lib/config/nav-confg";
import { Flex, Kbd } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import { CNLink } from "./chakra-next";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import ThemePicker from "./theme-picker";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const items = useMemo(() => [
    {
      title: "landing",
      href: navItems.home,
      hotkey: "A",
    },
    {
      title: "resume",
      href: navItems.resume,
      hotkey: "T",
    },
    {
      title: "projects",
      href: navItems.projects,
      hotkey: "S",
    },
    // {
    //   title: "blog",
    //   href: navItems.blog,
    // },
    {
      title: "contact",
      href: navItems.contact,
      hotkey: "X",
    },
  ], []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      const key = e.key.toUpperCase();
      const item = items.find((i) => i.hotkey === key);
      if (item) {
        router.push(item.href);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items, router]);

  return (
    <Flex
      gap={5}
      flexWrap={"wrap"}
      alignItems="center"
      justifyContent="space-between"
      py={{
        base: 8,
        lg: 12,
      }}
    >
      <Flex gap={5} flexWrap="wrap">
        {items.map((item) => (
          <CNLink
            key={item.title}
            href={item.href}
            color={pathname === item.href ? "var(--accent-color)" : "gray.500"}
            _hover={{
              color: "var(--accent-color)",
              textDecoration: "none",
            }}
            display="flex"
            alignItems="center"
            gap={1}
          >
            {item.title}
            {item.hotkey && (
              <Kbd
                fontSize="xs"
                bg="transparent"
                color={pathname === item.href ? "var(--accent-color)" : "gray.400"}
                borderColor={pathname === item.href ? "var(--accent-color)" : "gray.600"}
              >
                {item.hotkey}
              </Kbd>
            )}
          </CNLink>
        ))}
      </Flex>

      <ThemePicker />
    </Flex>
  );
}
