import  { useState, useEffect } from "react";
import { chakra, Box, Flex, HStack, Button, IconButton, VStack, useColorModeValue, useDisclosure, useColorMode, useToast, useBreakpointValue } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CustomToast from '../CustomToast/CustomToast';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const fileUrl = "https://storage.googleapis.com/portfolio-b18a4.appspot.com/Arpit_Shukla_Resume-.pdf?GoogleAccessId=firebase-adminsdk-z7kkc%40portfolio-b18a4.iam.gserviceaccount.com&Expires=16730303400&Signature=e9vQRJP4O1xe9Vt6FjqASpn7XNpeRwMr3Nf%2F88fyQ0SaUjBiT3W73ctmnYQz%2Bsnk75NpOsqFMrd%2FC9iIpVu76iCXCNaCCadJGGSh3Pjcxd%2B7hJOsM6ADBufrTAlpf%2FcqP4Sa%2BPUih9uVFhZa%2BzbfVZz83zevK9CF6sTboo25PrZPRwu8IyRXp18yU1%2B5T29%2F7cXGy2XydnWhn8%2FIqiMuO80WHz5Cvn8yoK5Nqgfg5zq2hBEzcqWnvXFGrbwlYjrU4UUvTWlBEKLIqSwDJL44IxuU%2FNccH4C7pZT1Ta7UvEGIH6UOYN0innCopBDIY%2F7gKQ4eUxkWcDEe5hkE4ieNNA%3D%3D";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, onToggle } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);
  const toastPosition = useBreakpointValue({ base: "top", md: "top-right" });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  const navItems = [
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
    { name: "Skills", path: "/skills" },
  ];

  const handleThemeChange = () => {
    const newMode = colorMode === "light" ? "dark" : "light";
    toggleColorMode();
    
    const messages = {
      light: [
        "Welcome to the bright side!",
        "Light attracts bugs, but our code is bug-free!",
        "Illuminating your experience, one pixel at a time.",
      ],
      dark: [
        "Welcome to the dark side, we have cookies!",
        "Embrace the darkness, it's easier on your eyes.",
        "Night mode activated. Stealth coding engaged!",
      ]
    };

    const randomMessage = messages[newMode][Math.floor(Math.random() * messages[newMode].length)];

    toast({
      position: toastPosition,
      render: ({ onClose }) => (
        <CustomToast
          title={`Switched to ${newMode} mode`}
          description={randomMessage}
          onClose={onClose}
          colorMode={newMode}
        />
      ),
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={bg}
      color={color}
      boxShadow={scrolled ? "md" : "none"}
      transition="all 0.3s"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto" px={4} py={3}>
        <MotionFlex
          alignItems="center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <chakra.h1
            fontSize="2xl"
            fontWeight="bold"
            cursor="pointer"
            onClick={() => navigate("/")}
            mr={4}
          >
            AS
          </chakra.h1>
          <IconButton
            aria-label="Toggle theme"
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={handleThemeChange}
            size="sm"
          />
        </MotionFlex>

        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          {navItems.map((item, index) => (
            <MotionBox
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Button
                variant="ghost"
                onClick={() => navigate(item.path)}
                color={location.pathname === item.path ? "teal.500" : "inherit"}
                fontWeight={location.pathname === item.path ? "bold" : "normal"}
                _hover={{ bg: "teal.50", color: "teal.500" }}
              >
                {item.name}
              </Button>
            </MotionBox>
          ))}
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              colorScheme="teal"
              onClick={handleDownload}
              _hover={{ bg: "teal.600" }}
            >
              Don&apos;t Click
            </Button>
          </MotionBox>
        </HStack>

        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>

      <AnimatePresence>
        {isOpen && (
          <MotionBox
            display={{ base: "block", md: "none" }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <VStack spacing={4} p={4} bg={bg} boxShadow="md">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  w="full"
                  variant="ghost"
                  onClick={() => {
                    navigate(item.path);
                    onToggle();
                  }}
                  color={location.pathname === item.path ? "teal.500" : "inherit"}
                  fontWeight={location.pathname === item.path ? "bold" : "normal"}
                  _hover={{ bg: "teal.50", color: "teal.500" }}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                w="full"
                colorScheme="teal"
                onClick={handleDownload}
                _hover={{ bg: "teal.600" }}
              >
                Don&apos;t Click
              </Button>
            </VStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </MotionBox>
  );
}

export default NavBar;