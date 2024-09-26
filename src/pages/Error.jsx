import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import { Tooltip } from "@chakra-ui/react";
import animationData from "../assets/Animation - 1702833762634.json";

function Error() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
  };

  return (
    <Flex
      w="full"
      height="80vh"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        p={4}
        borderWidth="1px"
        borderRadius="md"
        height={{ base: "30vh", md: "50vh", lg: "60vh" }}
        width={{ base: "30vh", md: "50vh", lg: "60vh" }}
      >
        <GridItem>
        <Tooltip label="Working ! da 😎🕧  " aria-label='A tooltip'>
          <Text
            fontSize={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
            lineHeight={{ base: "2", md: "1.7", lg: "2" }}
            color="gray"
            size={"large"}
            px={2}
          >

            Working on it...{" "}
          </Text>
</Tooltip>
        </GridItem>
        <GridItem paddingTop={14} >
       
          <Lottie
            animationData={animationData}
            options={defaultOptions}
            width="100%"
            height="100%"
          />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default Error;
