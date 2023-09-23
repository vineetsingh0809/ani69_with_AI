import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";

const AboutBanner = () => {
  return (
    <Box
      width={"100%"}
      height={"720px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        width={"650px"}
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Heading
          fontSize={"96px"}
          fontWeight={"700"}
          lineHeight={"120px"}
          color={"#D9D9D9"}
        >
          About Us
        </Heading>
        <Heading
          marginTop={"10px"}
          fontSize={"24px"}
          fontWeight={"600"}
          lineHeight={"28px"}
          color={"#D9D9D9"}
        >
          Welcome to ANI69, where motivation meets imagination, and transforms
          into captivating animated stories with genuine human emotion.
        </Heading>
        <Button
          backgroundColor={"#F3F25B"}
          paddingX={"20px"}
          color={"#A6000099"}
          marginTop={"30px"}
        >
          See More
        </Button>
      </Box>
    </Box>
  );
};

export default AboutBanner;
