import {
  Box,
  Grid,
  GridItem,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Flex,
} from "@chakra-ui/react";
import { Highlight } from "@chakra-ui/react";
import { useState } from "react";
import CustomCursor from "../components/CustomCursor";
// import Container from 'postcss/lib/container'
function Home() {
  const tooltipContent = "That's true, I am! ☁️ 🤟";
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  return (
    <Box
      height="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor={`url(${CustomCursor})`}//right now not working later will be fixed
    >
      <Grid>
        <GridItem>
          <Text
            fontSize={{ base: "2rem", md: "3rem", lg: "5rem" }}
            lineHeight={{ base: "2", md: "1.7", lg: "2" }}
            color="gray"
            size={"large"}
            px={2}
          >
            Hello world ! I'm Arpit, a tech enthusiast on an exploration of the{" "}
            <Popover
              isOpen={isPopoverOpen}
              onClose={() => setPopoverOpen(false)}
            >
              <PopoverTrigger>
                <Box
                  as="span"
                  _hover={{ cursor: "pointer" }}
                  onMouseEnter={() => setPopoverOpen(true)}
                  onMouseLeave={() => setPopoverOpen(false)}
                >
                  <Highlight
                    query={["clouds", "emphasize", "Accentuate"]}
                    styles={{
                      px: "5",
                      py: "1",
                      rounded: "full",
                      bg: "teal.100",
                      display: "inline-block",
                    }}
                  >
                    clouds.
                  </Highlight>
                </Box>
              </PopoverTrigger>
              <PopoverContent border={0} >
                <PopoverArrow bg='teal.100' />
                {/* <PopoverCloseButton /> */}
                <PopoverBody >
                  <Flex
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text
                      fontSize={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
                      lineHeight={{ base: "2", md: "1.7", lg: "2" }}
                    >
                      {tooltipContent}
                    </Text>
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Home;
