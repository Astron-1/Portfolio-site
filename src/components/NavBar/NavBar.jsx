import React from "react";
import { chakra } from "@chakra-ui/system";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import { VisuallyHidden } from "@chakra-ui/visually-hidden";
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/system";
import { useDisclosure } from "@chakra-ui/react-use-disclosure";
import { VStack } from "@chakra-ui/layout";
import { CloseButton } from "@chakra-ui/close-button";
import { IconButton } from "@chakra-ui/button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const fileUrl="https://storage.googleapis.com/portfolio-b18a4.appspot.com/Arpit_Shukla_Resume-.pdf?GoogleAccessId=firebase-adminsdk-z7kkc%40portfolio-b18a4.iam.gserviceaccount.com&Expires=16730303400&Signature=e9vQRJP4O1xe9Vt6FjqASpn7XNpeRwMr3Nf%2F88fyQ0SaUjBiT3W73ctmnYQz%2Bsnk75NpOsqFMrd%2FC9iIpVu76iCXCNaCCadJGGSh3Pjcxd%2B7hJOsM6ADBufrTAlpf%2FcqP4Sa%2BPUih9uVFhZa%2BzbfVZz83zevK9CF6sTboo25PrZPRwu8IyRXp18yU1%2B5T29%2F7cXGy2XydnWhn8%2FIqiMuO80WHz5Cvn8yoK5Nqgfg5zq2hBEzcqWnvXFGrbwlYjrU4UUvTWlBEKLIqSwDJL44IxuU%2FNccH4C7pZT1Ta7UvEGIH6UOYN0innCopBDIY%2F7gKQ4eUxkWcDEe5hkE4ieNNA%3D%3D";

function NavBar() {
  

    const handleDownload = () => {
      // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
      const pdfPath = fileUrl;
      
  
      const link = document.createElement('a');
      link.href = pdfPath;
      
      link.download = 'Resume.pdf';
  
      document.body.appendChild(link);
  
      link.click();
  
      document.body.removeChild(link);
    }
  const navigate = useNavigate();
  {
    const bg = useColorModeValue("white", "gray");
    const mobileNav = useDisclosure();
    return (
      <React.Fragment>
        <chakra.header
          bg={bg}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
          shadow="md"
          _dark={{
            bg: "gray.800",
          }}
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Home Page"
                display="flex"
                alignItems="center"
              >
                <VisuallyHidden>AS</VisuallyHidden>
              </chakra.a>
              <chakra.h1
                fontSize="xl"
                fontWeight="medium"
                ml="2"
                cursor={"pointer"}
                onClick={() => {
                  navigate("/");
                }}
              >
                AS
              </chakra.h1>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                <Button variant="ghost" onClick={() => navigate("/projects")}>
                  Projects
                </Button>
                <Button variant="ghost" onClick={() => navigate("/experience")}>
                  Experience
                </Button>
                <Button variant="ghost" onClick={() => navigate("/contact")}>
                  Contact
                </Button>
              </HStack>
              <Button colorScheme="brand" size="sm" background={"teal"} onClick={handleDownload}
               _dark={{
                bg: "teal.200",
              }}
              >
                Don't Click
              </Button>
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="black"
                  icon={<HamburgerIcon />}
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />

                  <Button
                    w="full"
                    variant="ghost"
                    onClick={() => navigate("/projects")}
                  >
                    Projects
                  </Button>
                  <Button
                    w="full"
                    variant="ghost"
                    onClick={() => navigate("/experience")}
                  >
                    Experience
                  </Button>
                  <Button
                    w="full"
                    variant="ghost"
                    onClick={() => navigate("/contact")}
                  >
                    Contact
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    );
  }
}

export default NavBar;
