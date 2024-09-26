
import PropTypes from 'prop-types';
import { Box, Text, Flex, VStack, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import experiences from "../data/experience.json";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

const treeVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.3,
    }
  }
};

const branchVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10,
      mass: 0.75
    }
  }
};

const ExperienceBranch = ({ experience, isLast }) => {
  const branchColor = useColorModeValue("gray.300", "gray.600");
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <MotionFlex variants={branchVariants}>
      <Flex direction="column" alignItems="center" mr={8}>
        <Box w="2px" h="20px" bg={branchColor} />
        <Box w="20px" h="20px" borderRadius="full" bg="teal.500" />
        {!isLast && <Box w="2px" h="full" bg={branchColor} />}
      </Flex>
      <MotionBox
        bg={cardBg}
        p={6}
        borderRadius="md"
        boxShadow="lg"
        mb={isLast ? 0 : 8}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2 }}
      >
        <MotionText fontSize="xl" fontWeight="bold" mb={2}>
          {experience.company}
        </MotionText>
        <MotionText fontSize="lg" fontWeight="semibold" mb={2}>
          {experience.role}
        </MotionText>
        <MotionText fontSize="md" color="gray.500" mb={4}>
          {experience.duration}
        </MotionText>
        <MotionText mb={4}>{experience.description}</MotionText>
        <VStack align="start" spacing={2}>
          {experience.achievements.map((achievement, index) => (
            <MotionText
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              • {achievement}
            </MotionText>
          ))}
        </VStack>
      </MotionBox>
    </MotionFlex>
  );
};

ExperienceBranch.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    achievements: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  isLast: PropTypes.bool.isRequired,
};

function Experience() {
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
        My Experience
      </MotionText>
      <MotionFlex
        direction="column"
        variants={treeVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {experiences.map((exp, index) => (
            <ExperienceBranch
              key={index}
              experience={exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </AnimatePresence>
      </MotionFlex>
    </Box>
  );
}

export default Experience;