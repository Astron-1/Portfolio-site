import React from "react";
import { Box, Flex, Text, Icon, VStack, HStack, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionIcon = motion(Icon);

const iconVariants = {
  hover: { scale: 1.2, rotate: 15 },
  tap: { scale: 0.8 },
};

const textVariants = {
  hover: { y: -2 },
};

const waveVariants = {
  animate: {
    x: [0, -2400],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 20,
      ease: "linear",
    },
  },
};

export default function Footer() {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const hoverColor = useColorModeValue("teal.500", "teal.300");
  const waveColor = useColorModeValue("teal.100", "teal.700");

  return (
    <MotionBox
      as="footer"
      bg={bgColor}
      py={8}
      position="relative"
      overflow="hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MotionBox
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        height="100%"
        width="6000px"
        variants={waveVariants}
        animate="animate"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 6000 320"
          height="100%"
          width="100%"
          preserveAspectRatio="none"
        >
          <path
            fill={waveColor}
            fillOpacity="0.2"
            d="M0,192L60,197.3C120,203,240,213,360,229.3C480,245,600,267,720,250.7C840,235,960,181,1080,181.3C1200,181,1320,235,1440,234.7C1560,235,1680,181,1800,154.7C1920,128,2040,128,2160,144C2280,160,2400,192,2520,197.3C2640,203,2760,181,2880,170.7C3000,160,3120,160,3240,170.7C3360,181,3480,203,3600,213.3C3720,224,3840,224,3960,208C4080,192,4200,160,4320,138.7C4440,117,4560,107,4680,122.7C4800,139,4920,181,5040,208C5160,235,5280,245,5400,240C5520,235,5640,213,5760,202.7C5880,192,6000,192,6120,170.7C6240,149,6360,107,6480,101.3C6600,96,6720,128,6840,149.3C6960,171,7080,181,7200,165.3C7320,149,7440,107,7560,101.3C7680,96,7800,128,7920,133.3C8040,139,8160,117,8280,112C8400,107,8520,117,8580,122.7L8640,128L8640,320L8580,320C8520,320,8400,320,8280,320C8160,320,8040,320,7920,320C7800,320,7680,320,7560,320C7440,320,7320,320,7200,320C7080,320,6960,320,6840,320C6720,320,6600,320,6480,320C6360,320,6240,320,6120,320C6000,320,5880,320,5760,320C5640,320,5520,320,5400,320C5280,320,5160,320,5040,320C4920,320,4800,320,4680,320C4560,320,4440,320,4320,320C4200,320,4080,320,3960,320C3840,320,3720,320,3600,320C3480,320,3360,320,3240,320C3120,320,3000,320,2880,320C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1440,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </MotionBox>

      <Flex
        direction={{ base: "column", md: "row" }}
        maxW="container.lg"
        mx="auto"
        px={4}
        align="center"
        justify="space-between"
        position="relative"
        zIndex={1}
      >
        <VStack align="center" mb={{ base: 4, md: 0 }} spacing={2}>
          <MotionText
            fontSize="3xl"
            fontWeight="bold"
            color={hoverColor}
            whileHover="hover"
            variants={textVariants}
          >
            AS
          </MotionText>
          <MotionText
            color={textColor}
            fontSize="sm"
            whileHover="hover"
            variants={textVariants}
          >
            Crafted with <Icon as={FaHeart} color="red.500" mx={1} /> by Arpit 
          </MotionText>
          <MotionText
            color={textColor}
            fontSize="xs"
            fontStyle="italic"
            whileHover="hover"
            variants={textVariants}
          >
            No rights reserved. Feel free to copy!
          </MotionText>
        </VStack>

        <HStack spacing={6}>
          <MotionBox
            as="a"
            href="https://www.linkedin.com/in/arpit-shukla001"
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
            whileTap="tap"
          >
            <MotionIcon
              as={FaLinkedin}
              boxSize={8}
              color={textColor}
              _hover={{ color: hoverColor }}
              variants={iconVariants}
            />
          </MotionBox>
          <MotionBox
            as="a"
            href="https://github.com/Astron-1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
            whileTap="tap"
          >
            <MotionIcon
              as={FaGithub}
              boxSize={8}
              color={textColor}
              _hover={{ color: hoverColor }}
              variants={iconVariants}
            />
          </MotionBox>
        </HStack>
      </Flex>
    </MotionBox>
  );
}