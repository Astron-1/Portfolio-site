import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  VStack,
  Flex,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { motion, useViewportScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaCloud, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import PropTypes from 'prop-types';


const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const floatingAnimation = {
  y: ["0%", "-5%", "0%"],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};


const Rocket = ({ color }) => {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.5c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 7 12 7s2.5 1.1 2.5 2.5S13.4 12 12 12z" />
    </svg>
  );
};

Rocket.propTypes = {
  color: PropTypes.string.isRequired,
};


function Home() {
  const navigate = useNavigate();
  const [isLaunching, setIsLaunching] = useState(false);
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const highlightColor = useColorModeValue("teal.500", "teal.300");

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const handleLaunch = () => {
    setIsLaunching(true);
    setTimeout(() => {
      navigate("/contact");
    }, 2000); // Redirect after 2 seconds
  };

  const rocketVariants = {
    initial: { y: 0, x: "-50%", scale: 1, opacity: 1 },
    launch: {
      y: [0, -20, -1000],
      x: ["-50%", "-49%", "-50%"],
      scale: [1, 1.2, 0.5],
      opacity: [1, 1, 0],
      transition: {
        duration: 2,
        times: [0, 0.1, 1],
        ease: "easeOut",
      },
    },
  };

  const particleVariants = {
    initial: { opacity: 0, y: 0 },
    animate: { 
      opacity: [0, 1, 0],
      y: [0, 100],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
      }
    },
  };

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg={bgColor}
      overflow="hidden"
      position="relative"
    >
      <MotionBox
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ scale }}
      >
        <VStack spacing={8} align="center" textAlign="center">
          <MotionText
            variants={itemVariants}
            fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
            fontWeight="bold"
            color={textColor}
            animate={floatingAnimation}
          >
            Hello, I&apos;m Arpit
          </MotionText>
          <MotionText
            variants={itemVariants}
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            color={textColor}
          >
            A passionate tech explorer navigating the digital cosmos
          </MotionText>
          <MotionFlex
            variants={itemVariants}
            justifyContent="center"
            alignItems="center"
            mt={4}
          >
            {[FaCloud, FaCode, FaLaptopCode, FaRocket].map((Icon, index) => (
              <MotionBox
                key={index}
                variants={iconVariants}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.8 }}
                mx={4}
              >
                <Icon size={40} color={highlightColor} />
              </MotionBox>
            ))}
          </MotionFlex>
          <MotionText
            variants={itemVariants}
            fontSize={{ base: "md", md: "lg" }}
            maxWidth="700px"
            color={textColor}
          >
            Embarking on an exhilarating journey through the vast expanse of technology,
            I&apos;m constantly pushing boundaries, crafting innovative solutions, and
            transforming visionary ideas into tangible realities. From cloud architecture
            to cutting-edge development, I&apos;m your co-pilot in navigating the ever-evolving
            digital landscape.
          </MotionText>
          <MotionBox
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              colorScheme="teal"
              rightIcon={<FaRocket />}
              _hover={{ bg: highlightColor }}
              onClick={handleLaunch}
              disabled={isLaunching}
            >
              Let&apos;s Launch Something Extraordinary!
            </Button>
          </MotionBox>
        </VStack>
      </MotionBox>

      <AnimatePresence>
        {isLaunching && (
          <>
            <MotionBox
              initial="initial"
              animate="launch"
              variants={rocketVariants}
              style={{
                position: "fixed",
                bottom: "20px",
                left: "50%",
                zIndex: 10,
              }}
            >
              <Rocket color={highlightColor} />
            </MotionBox>
            {[...Array(20)].map((_, i) => (
              <MotionBox
                key={i}
                initial="initial"
                animate="animate"
                variants={particleVariants}
                style={{
                  position: "fixed",
                  bottom: "20px",
                  left: `calc(50% + ${Math.random() * 40 - 20}px)`,
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  borderRadius: "50%",
                  backgroundColor: highlightColor,
                  zIndex: 9,
                }}
              />
            ))}
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 2 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "white",
                zIndex: 8,
              }}
            />
          </>
        )}
      </AnimatePresence>
    </Flex>
  );
}

export default Home;