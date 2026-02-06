"use client";

import { Box, Button, Flex, HStack, Text, Portal, Icon } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { IoColorPalette, IoMoon, IoSunny, IoHeart, IoStar, IoTriangle, IoSquare, IoWater } from "react-icons/io5";
import { BsHexagonFill } from "react-icons/bs";

const colors = [
    { name: "Orange", value: "#ED8936", shape: "square", icon: IoSquare },
    { name: "Pink", value: "#ED64A6", shape: "heart", icon: IoHeart },
    { name: "Cyan", value: "#0BC5EA", shape: "hexagon", icon: BsHexagonFill },
    { name: "Green", value: "#48BB78", shape: "droplet", icon: IoWater },
    { name: "Purple", value: "#9F7AEA", shape: "star", icon: IoStar },
    { name: "Red", value: "#F56565", shape: "triangle", icon: IoTriangle },
];

export default function ThemePicker() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [accentColor, setAccentColor] = useState("#ED8936");

    const triggerRef = useRef<HTMLButtonElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
        // Load saved color
        const savedColor = localStorage.getItem("accent-color") || "#ED8936";
        setAccentColor(savedColor);
        document.documentElement.style.setProperty("--accent-color", savedColor);
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            // Check if click is outside both trigger and content
            if (
                isOpen &&
                triggerRef.current &&
                !triggerRef.current.contains(event.target as Node) &&
                contentRef.current &&
                !contentRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleColorChange = (color: string) => {
        setAccentColor(color);
        localStorage.setItem("accent-color", color);
        document.documentElement.style.setProperty("--accent-color", color);
    };

    if (!mounted) return null;

    return (
        <Box position="relative">
            <Button
                ref={triggerRef}
                variant="ghost"
                color="var(--accent-color)"
                onClick={() => setIsOpen(!isOpen)}
                _hover={{ bg: "whiteAlpha.100" }}
                px={2}
            >
                <IoColorPalette size={20} />
            </Button>

            {isOpen && (
                <Portal>
                    <Box
                        ref={contentRef}
                        position="fixed"
                        top={{ base: "auto", md: "80px" }}
                        bottom={{ base: "80px", md: "auto" }}
                        right={{ base: "20px", md: "40px" }}
                        bg="black"
                        border="1px solid"
                        borderColor="gray.800"
                        p={4}
                        borderRadius="lg"
                        zIndex={2000}
                        boxShadow="xl"
                        maxW="300px"
                    >
                        <Flex justifyContent="space-between" mb={4} alignItems="center">
                            <Text fontSize="sm" fontWeight="bold">
                                Theme Color
                            </Text>
                            <Button
                                size="xs"
                                variant="ghost"
                                onClick={() => setIsOpen(false)}
                                color="gray.400"
                            >
                                ✕
                            </Button>
                        </Flex>

                        {/* Color Swatches */}
                        <Flex gap={3} flexWrap="wrap" mb={4} justifyContent="center">
                            {colors.map((c) => (
                                <Button
                                    key={c.name}
                                    w="36px"
                                    h="36px"
                                    minW="36px"
                                    variant="ghost"
                                    p={0}
                                    aria-label={c.name}
                                    onClick={() => handleColorChange(c.value)}
                                    _hover={{ transform: "scale(1.2)" }}
                                >
                                    <Icon
                                        as={c.icon}
                                        w="full"
                                        h="full"
                                        color={c.value}
                                        style={{
                                            filter: accentColor === c.value ? "drop-shadow(0 0 4px white)" : "none",
                                            transition: "all 0.2s"
                                        }}
                                    />
                                </Button>
                            ))}
                            <Box position="relative" w="36px" h="36px" display="flex" alignItems="center" justifyContent="center">
                                <input
                                    type="color"
                                    value={accentColor}
                                    onChange={(e) => handleColorChange(e.target.value)}
                                    style={{
                                        width: '28px',
                                        height: '28px',
                                        padding: 0,
                                        border: 'none',
                                        background: 'none',
                                        cursor: 'pointer',
                                        borderRadius: '4px'
                                    }}
                                    title="Custom Color"
                                />
                            </Box>
                        </Flex>
                    </Box>
                </Portal>
            )}
        </Box>
    );
}
