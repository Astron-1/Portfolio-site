import { useState } from "react";
import { Box, Text, VStack, Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue, Flex, Link, Icon, SimpleGrid, Badge, useBreakpointValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaJsSquare, FaPython, FaJava, FaAws, FaGitAlt, FaReact, FaNodeJs, FaSalesforce, FaDatabase } from "react-icons/fa";
import { SiGooglecloud, SiMicrosoftazure } from "react-icons/si";
import skillsData from "../data/skills.json";
import PropTypes from 'prop-types';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    },
  },
};

const techIcons = {
  FaJsSquare, FaPython, FaJava, FaAws, FaGitAlt, FaReact, FaNodeJs, FaSalesforce, FaDatabase,
  SiGooglecloud, SiMicrosoftazure
};

function SkillCard({ skill }) {
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const iconSize = useBreakpointValue({ base: 12, md: 16 });

  return (
    <MotionBox
      variants={itemVariants}
      bg={cardBg}
      p={{ base: 4, md: 6 }}
      borderRadius="xl"
      boxShadow="md"
      whileHover={{ scale: 1.05, boxShadow: "lg" }}
      textAlign="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Icon as={techIcons[skill.icon]} boxSize={iconSize} color={skill.color} mb={3} />
      <Text fontSize={{ base: "md", md: "lg" }} fontWeight="semibold" color={textColor}>
        {skill.name}
      </Text>
    </MotionBox>
  );
}

SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

function CertificationCard({ cert }) {
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const iconSize = useBreakpointValue({ base: 12, md: 16 });

  return (
    <MotionBox
      variants={itemVariants}
      bg={cardBg}
      p={{ base: 4, md: 6 }}
      borderRadius="lg"
      boxShadow="lg"
      whileHover={{ scale: 1.05, boxShadow: "xl" }}
    >
      <Link href={cert.url} isExternal>
        <Flex align="center" direction="column">
          <Icon as={techIcons[cert.icon]} boxSize={iconSize} color={cert.color} mb={3} />
          <VStack align="center" spacing={2}>
            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color={textColor} textAlign="center">
              {cert.name}
            </Text>
            <Badge colorScheme="teal" fontSize={{ base: "xs", md: "sm" }} px={2} py={1}>
              View Certificate
            </Badge>
          </VStack>
        </Flex>
      </Link>
    </MotionBox>
  );
}

function SkillBadgeCard({ badge }) {
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const iconSize = useBreakpointValue({ base: 12, md: 16 });

  return (
    <MotionBox
      variants={itemVariants}
      bg={cardBg}
      p={{ base: 4, md: 6 }}
      borderRadius="lg"
      boxShadow="md"
      whileHover={{ scale: 1.05, boxShadow: "lg" }}
    >
      <Link href={badge.url} isExternal>
        <Flex direction="column" align="center">
          <Icon as={techIcons[badge.icon]} boxSize={iconSize} color={badge.color} mb={3} />
          <Text fontSize={{ base: "md", md: "lg" }} fontWeight="semibold" color={textColor} textAlign="center" mb={2}>
            {badge.name}
          </Text>
          <Badge colorScheme="purple" fontSize={{ base: "xs", md: "sm" }} px={2} py={1}>
            View Badges
          </Badge>
        </Flex>
      </Link>
    </MotionBox>
  );
}

SkillBadgeCard.propTypes = {
  badge: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

function Skills() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const tabFontSize = useBreakpointValue({ base: "md", md: "lg", lg: "xl" });

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.3 }
    }
  };

  return (
    <Box p={{ base: 4, md: 8 }} bg={bgColor} minHeight="100vh">
      <MotionText
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        fontWeight="bold"
        mb={{ base: 6, md: 12 }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        textAlign="center"
      >
        Skills & Achievements
      </MotionText>
      <Tabs index={tabIndex} onChange={handleTabsChange} variant="soft-rounded" colorScheme="teal">
        <TabList mb={{ base: 6, md: 12 }} justifyContent="center" flexWrap="wrap">
          <Tab fontSize={tabFontSize} fontWeight="medium" px={{ base: 3, md: 6 }} py={{ base: 2, md: 3 }} mb={{ base: 2, md: 0 }}>Languages & Tools</Tab>
          <Tab fontSize={tabFontSize} fontWeight="medium" px={{ base: 3, md: 6 }} py={{ base: 2, md: 3 }} mb={{ base: 2, md: 0 }}>Certifications</Tab>
          <Tab fontSize={tabFontSize} fontWeight="medium" px={{ base: 3, md: 6 }} py={{ base: 2, md: 3 }} mb={{ base: 2, md: 0 }}>Skill Badges</Tab>
        </TabList>
        <AnimatePresence mode="wait">
          <MotionBox
            key={tabIndex}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={tabVariants}
          >
            <TabPanels>
              <TabPanel>
                <MotionFlex variants={containerVariants}>
                  <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing={{ base: 4, md: 8 }} width="100%">
                    {skillsData.languagesAndSkills.map((skill, index) => (
                      <SkillCard key={index} skill={skill} />
                    ))}
                  </SimpleGrid>
                </MotionFlex>
              </TabPanel>
              <TabPanel>
                <MotionFlex variants={containerVariants}>
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 4, md: 8 }} width="100%">
                    {skillsData.certifications.map((cert, index) => (
                      <CertificationCard key={index} cert={cert} />
                    ))}
                  </SimpleGrid>
                </MotionFlex>
              </TabPanel>
              <TabPanel>
                <MotionFlex variants={containerVariants}>
                  <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={{ base: 4, md: 6 }} width="100%">
                    {skillsData.skillBadges.map((badge, index) => (
                      <SkillBadgeCard key={index} badge={badge} />
                    ))}
                  </SimpleGrid>
                </MotionFlex>
              </TabPanel>
            </TabPanels>
          </MotionBox>
        </AnimatePresence>
      </Tabs>
    </Box>
  );
}

export default Skills;