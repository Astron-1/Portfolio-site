import React from 'react';
import { Box, Flex, Text, CloseButton, useColorModeValue, Icon, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);

const CustomToast = ({ title, description, onClose, colorMode }) => {
  const bg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("teal.500", "teal.200");
  const textColor = useColorModeValue("gray.800", "white");
  const iconColor = useColorModeValue("yellow.500", "yellow.200");

  const toastWidth = useBreakpointValue({ base: "90vw", sm: "300px", md: "350px" });
  const fontSize = useBreakpointValue({ base: "sm", md: "md" });
  const iconSize = useBreakpointValue({ base: 5, md: 6 });

  return (
    <MotionBox
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Box
        bg={bg}
        borderWidth="2px"
        borderColor={borderColor}
        borderRadius="lg"
        boxShadow="2xl"
        p={3}
        width={toastWidth}
        maxWidth="100%"
        position="relative"
        overflow="hidden"
      >
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <Icon
              as={colorMode === "light" ? SunIcon : MoonIcon}
              w={iconSize}
              h={iconSize}
              color={iconColor}
              mr={2}
            />
            <Text fontWeight="bold" fontSize={fontSize} color={textColor}>
              {title}
            </Text>
          </Flex>
          <CloseButton size="sm" onClick={onClose} color={textColor} />
        </Flex>
        <Text mt={2} fontSize={fontSize} color={textColor}>
          {description}
        </Text>
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          height="3px"
          bg={borderColor}
          as={motion.div}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 3 }}
        />
      </Box>
    </MotionBox>
  );
};

export default CustomToast;