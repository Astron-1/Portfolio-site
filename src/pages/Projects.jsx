import { useState } from "react";
import PropTypes from 'prop-types';
import { Box, Grid, Text, VStack, Button, Badge, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Image, Flex, Icon, Tooltip } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaJava, FaAndroid, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFirebase, SiRedux, SiExpo, SiMysql, SiJenkins, SiGithubactions, SiTerraform, SiMicrosoftazure } from "react-icons/si";
import projectsData from "../data/projects.json";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);

const techIcons = {
  React: FaReact,
  "Node.js": FaNodeJs,
  MongoDB: SiMongodb,
  Express: SiExpress,
  Firebase: SiFirebase,
  Redux: SiRedux,
  Expo: SiExpo,
  Java: FaJava,
  Android: FaAndroid,
  Azure: SiMicrosoftazure,
  Python: FaPython,
  MySQL: SiMysql,
  Jenkins: SiJenkins,
  Docker: FaDocker,
  "GitHub Actions": SiGithubactions,
  AWS: FaAws,
  Terraform: SiTerraform,
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { 
    y: -10, 
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.3 }
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.3 } },
  hover: { scale: 1.2, transition: { duration: 0.2 } },
};

function ProjectCard({ project, onClick }) {
  return (
    <MotionBox
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
    >
      <Image src={project.image} alt={project.name} objectFit="cover" h="200px" w="100%" />
      <Box p={5}>
        <MotionText
          fontSize="xl"
          fontWeight="semibold"
          mb={2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {project.name}
        </MotionText>
        <MotionText
          fontSize="sm"
          color="gray.500"
          mb={4}
          noOfLines={2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {project.description}
        </MotionText>
        <MotionFlex wrap="wrap" mb={4}>
          {project.technologies.map((tech, techIndex) => (
            <Tooltip key={techIndex} label={tech} aria-label={tech}>
              <MotionBox
                mr={2}
                mb={2}
                variants={iconVariants}
                whileHover="hover"
              >
                <Icon as={techIcons[tech] || FaDatabase} boxSize={6} />
              </MotionBox>
            </Tooltip>
          ))}
        </MotionFlex>
        <Flex justifyContent="space-between" alignItems="center">
          <Button size="sm" onClick={onClick} colorScheme="teal">
            Learn More
          </Button>
          <Flex>
            {project.githubLink && (
              <MotionBox
                variants={iconVariants}
                whileHover="hover"
              >
                <Icon as={FaGithub} boxSize={5} mr={2} cursor="pointer" onClick={() => window.open(project.githubLink, '_blank')} />
              </MotionBox>
            )}
            {project.demoLink && (
              <MotionBox
                variants={iconVariants}
                whileHover="hover"
              >
                <Icon as={FaExternalLinkAlt} boxSize={5} cursor="pointer" onClick={() => window.open(project.demoLink, '_blank')} />
              </MotionBox>
            )}
          </Flex>
        </Flex>
      </Box>
    </MotionBox>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    githubLink: PropTypes.string,
    demoLink: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  const currentProjects = projectsData.filter(project => !project.upcoming);
  const upcomingProjects = projectsData.filter(project => project.upcoming);

  return (
    <Box p={4}>
      <MotionText
        fontSize="3xl"
        fontWeight="bold"
        mb={6}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Current Projects
      </MotionText>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6} mb={12}>
        <AnimatePresence>
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => handleProjectClick(project)} />
          ))}
        </AnimatePresence>
      </Grid>

      <MotionText
        fontSize="3xl"
        fontWeight="bold"
        mb={6}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Upcoming Projects
      </MotionText>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
        <AnimatePresence>
          {upcomingProjects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => handleProjectClick(project)} />
          ))}
        </AnimatePresence>
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedProject?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={selectedProject?.image} alt={selectedProject?.name} objectFit="cover" w="100%" mb={4} borderRadius="md" />
            <Text mb={4}>{selectedProject?.description}</Text>
            <Text fontWeight="bold" mb={2}>Technologies:</Text>
            <Flex wrap="wrap" mb={4}>
              {selectedProject?.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} mr={2} mb={2} colorScheme="teal">
                  {tech}
                </Badge>
              ))}
            </Flex>
            <Text fontWeight="bold" mb={2}>Features:</Text>
            <VStack align="start" spacing={2} pl={4} mb={4}>
              {selectedProject?.features.map((feature, featureIndex) => (
                <Text key={featureIndex}>• {feature}</Text>
              ))}
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {selectedProject?.demoLink && (
              <Button as="a" href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" leftIcon={<FaExternalLinkAlt />}>
                View Demo
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Projects;