import { Box, Text, VStack, Link, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionLink = motion(Link);

const contactMethods = [
  { icon: FaEnvelope, label: "Email", value: "arpitshukla746@gmail.com", href: "mailto:arpitshukla746@gmail.com" },
  { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/arpit-shukla001", href: "https://linkedin.com/in/arpit-shukla001" },
  { icon: FaGithub, label: "GitHub", value: "github.com/Astron-1", href: "https://github.com/Astron-1" },
  { icon: SiNotion, label: "Notion", value: "notion", href: "https://handsomely-caribou-b77.notion.site/Arpit-Shukla-10c6bbec9063808d9fa6fa93bb7db075" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

function Contact() {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const cardBgColor = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const iconColor = useColorModeValue("teal.500", "teal.300");

  return (
    <Box p={8} minHeight="100vh" display="flex" alignItems="center" justifyContent="center" bg={bgColor}>
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        maxWidth="800px"
        width="100%"
      >
        <MotionText
          fontSize="5xl"
          fontWeight="bold"
          mb={12}
          textAlign="center"
          variants={itemVariants}
          bgGradient="linear(to-r, teal.500, blue.500)"
          bgClip="text"
        >
          Let&apos;s Connect!
        </MotionText>
        <VStack spacing={8} align="stretch">
          {contactMethods.map((method, index) => (
            <MotionLink
              key={index}
              href={method.href}
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <MotionBox
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "2xl" }}
                whileTap={{ scale: 0.98 }}
                bg={cardBgColor}
                p={6}
                borderRadius="xl"
                boxShadow="lg"
                display="flex"
                alignItems="center"
                transition="all 0.3s"
              >
                <Box as={method.icon} size="40px" color={iconColor} mr={6} />
                <VStack align="start" spacing={1}>
                  <Text fontWeight="bold" fontSize="xl" color={textColor}>
                    {method.label}
                  </Text>
                  <Text color={textColor} fontSize="md">
                    {method.value}
                  </Text>
                </VStack>
              </MotionBox>
            </MotionLink>
          ))}
        </VStack>
      </MotionBox>
    </Box>
  );
}

export default Contact;