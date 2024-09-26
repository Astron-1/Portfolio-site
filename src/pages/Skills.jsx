import { useState } from "react";
import { Box, Text, VStack, Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue, Flex, Link, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaJsSquare, FaPython, FaJava, FaAws, FaGitAlt, FaReact, FaNodeJs, FaSalesforce, FaDatabase } from "react-icons/fa";
import { SiGooglecloud, SiMicrosoftazure  } from "react-icons/si";
// import { SiMicrosoftazure } from "react-icons/bs";
import skillsData from "../data/skills.json";


const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionVStack = motion(VStack);

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
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    },
  },
};

const techIcons = {
  FaJsSquare: FaJsSquare,
  FaPython: FaPython,
  FaJava: FaJava,
  FaAws: FaAws,
  FaGitAlt: FaGitAlt,
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  FaAzure: SiMicrosoftazure,
  FaSalesforce: FaSalesforce,
  FaDatabase: FaDatabase,
  SiGooglecloud: SiGooglecloud,
};

function Skills() {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  const bgColor = useColorModeValue("#FFFFFF", "#4A5568"); // white, gray.700
  const cardHoverBg = useColorModeValue("#F7FAFC", "#1A202C"); // gray.100, gray.800
  const textColor = useColorModeValue("#2D3748", "#FFFFFF");

  return (
    <Box p={8}>
      <MotionText
        fontSize="4xl"
        fontWeight="bold"
        mb={12}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </MotionText>
      <Tabs index={tabIndex} onChange={handleTabsChange} variant="soft-rounded" colorScheme="teal">
        <TabList mb={4}>
          <Tab>Languages and Skills</Tab>
          <Tab>Certifications</Tab>
          <Tab>Skill Badges</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <MotionVStack
              spacing={4}
              align="start"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skillsData.languagesAndSkills.map((skill, index) => (
                <MotionBox key={index} variants={itemVariants} bg={`linear-gradient(135deg, ${skill.color}44, ${bgColor})`} p={4} borderRadius="lg" boxShadow="xl" w="full"
                  whileHover={{ scale: 1.05, boxShadow: "2xl", backgroundColor: cardHoverBg }}
                >
                  <Flex align="center">
                    <Icon as={techIcons[skill.icon]} boxSize={8} mr={4} color={skill.color} />
                    <MotionText fontSize="xl" fontWeight="semibold" color={textColor}>
                      {skill.name}
                    </MotionText>
                  </Flex>
                </MotionBox>
              ))}
            </MotionVStack>
          </TabPanel>
          <TabPanel>
            <MotionVStack
              spacing={4}
              align="start"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skillsData.certifications.map((cert, index) => (
                <MotionBox key={index} variants={itemVariants} bg={`linear-gradient(135deg, ${cert.color}44, ${bgColor})`} p={4} borderRadius="lg" boxShadow="xl" w="full"
                  whileHover={{ scale: 1.05, boxShadow: "2xl", backgroundColor: cardHoverBg }}
                >
                  <Link href={cert.url} isExternal>
                    <Flex align="center">
                      <Icon as={techIcons[cert.icon]} boxSize={8} mr={4} color={cert.color} />
                      <MotionText fontSize="xl" fontWeight="semibold" color={textColor}>
                        {cert.name}
                      </MotionText>
                    </Flex>
                  </Link>
                </MotionBox>
              ))}
            </MotionVStack>
          </TabPanel>
          <TabPanel>
            <MotionVStack
              spacing={4}
              align="start"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skillsData.skillBadges.map((badge, index) => (
                <MotionBox key={index} variants={itemVariants} bg={`linear-gradient(135deg, ${badge.color}44, ${bgColor})`} p={4} borderRadius="lg" boxShadow="xl" w="full"
                  whileHover={{ scale: 1.05, boxShadow: "2xl", backgroundColor: cardHoverBg }}
                >
                  <Link href={badge.url} isExternal>
                    <Flex align="center">
                      <Icon as={techIcons[badge.icon]} boxSize={8} mr={4} color={badge.color} />
                      <MotionText fontSize="xl" fontWeight="semibold" color={textColor}>
                        {badge.name}
                      </MotionText>
                    </Flex>
                  </Link>
                </MotionBox>
              ))}
            </MotionVStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Skills;