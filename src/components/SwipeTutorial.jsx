import React, { useState, useEffect } from 'react';
import { Box, Text, Flex, IconButton, VStack } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, CloseIcon } from '@chakra-ui/icons';

const SwipeTutorial = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('hasSeenSwipeTutorial');
    if (!hasSeenTutorial) {
      setIsVisible(true);
    }
  }, []);

  const closeTutorial = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenSwipeTutorial', 'true');
  };

  const nextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      closeTutorial();
    }
  };

  const tutorialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  const handMotion = {
    rest: { x: 0 },
    swipe: (direction) => ({
      x: direction * 100,
      transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' }
    }),
  };

  const steps = [
    { title: "Welcome!", content: "Let's learn how to navigate this site." },
    { title: "Swipe Right", content: "Swipe right to go back to the previous page." },
    { title: "Swipe Left", content: "Swipe left to go to the next page." },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={tutorialVariants}
          transition={{ duration: 0.5 }}
          style={{
            position: 'fixed',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
          }}
        >
          <Box
            bg="rgba(0, 0, 0, 0.8)"
            color="white"
            p={6}
            borderRadius="lg"
            boxShadow="dark-lg"
            maxWidth="350px"
          >
            <Flex justifyContent="space-between" alignItems="center" mb={4}>
              <Text fontSize="xl" fontWeight="bold">
                {steps[step].title}
              </Text>
              <IconButton
                aria-label="Close tutorial"
                icon={<CloseIcon />}
                size="sm"
                variant="ghost"
                onClick={closeTutorial}
              />
            </Flex>
            <VStack spacing={4} align="stretch">
              <Text>{steps[step].content}</Text>
              <Flex justifyContent="center" alignItems="center" h="60px">
                <ArrowLeftIcon mr={4} boxSize={6} />
                <motion.div
                  variants={handMotion}
                  initial="rest"
                  animate="swipe"
                  custom={step === 1 ? 1 : -1}
                  style={{ fontSize: '40px' }}
                >
                  👆
                </motion.div>
                <ArrowRightIcon ml={4} boxSize={6} />
              </Flex>
              <Flex justifyContent="space-between" alignItems="center">
                <Text fontSize="sm">{step + 1} of 3</Text>
                <IconButton
                  aria-label="Next step"
                  icon={step < 2 ? <ArrowRightIcon /> : <CloseIcon />}
                  size="sm"
                  colorScheme="teal"
                  onClick={nextStep}
                />
              </Flex>
            </VStack>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SwipeTutorial;