import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  VStack,
  Flex,
  useColorModeValue,
  Button,
  Container,
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

const greetingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: 20,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    }
  }
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

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) {
        setGreeting("Good morning,");
      } else if (hour >= 12 && hour < 18) {
        setGreeting("Good afternoon,");
      } else {
        setGreeting("Good evening,");
      }
    };

    updateGreeting();
    const intervalId = setInterval(updateGreeting, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

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
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      bg={bgColor}
      overflow="hidden"
      position="relative"
      py={{ base: 16, md: 0 }}
    >
      <Container maxW="container.xl">
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ scale }}
        >
          <VStack spacing={{ base: 6, md: 8 }} align="center" textAlign="center">
            <Box height={{ base: "80px", md: "100px" }} position="relative" width="100%">
              <MotionText
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="bold"
                fontFamily="'Poppins', sans-serif"
                textAlign="center"
                lineHeight={1.2}
              >
                <AnimatePresence mode="wait">
                  <MotionText
                    key={greeting}
                    as="span"
                    variants={greetingVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    color={highlightColor}
                    display="inline-block"
                  >
                    {greeting}
                  </MotionText>
                </AnimatePresence>
                <Text as="span" color={textColor}> I&apos;m Arpit</Text>
              </MotionText>
            </Box>
            <MotionText
              variants={itemVariants}
              fontSize={{ base: "lg", sm: "xl", md: "2xl", lg: "3xl" }}
              color={textColor}
              fontFamily="'Poppins', sans-serif"
            >
              A passionate tech explorer navigating the {" "}
              <Text as="span" color={highlightColor}>
                digital cosmos
              </Text>
            </MotionText>
            <MotionFlex
              variants={itemVariants}
              justifyContent="center"
              alignItems="center"
              mt={4}
              flexWrap="wrap"
            >
              {[FaCloud, FaCode, FaLaptopCode, FaRocket].map((Icon, index) => (
                <MotionBox
                  key={index}
                  variants={iconVariants}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8 }}
                  mx={2}
                  my={2}
                >
                  <Icon size={32} color={highlightColor} />
                </MotionBox>
              ))}
            </MotionFlex>
            <MotionText
              variants={itemVariants}
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              maxWidth="700px"
              color={textColor}
              px={4}
              textAlign="justify"
              lineHeight="1.6"
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
                size={{ base: "md", md: "lg" }}
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
      </Container>

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