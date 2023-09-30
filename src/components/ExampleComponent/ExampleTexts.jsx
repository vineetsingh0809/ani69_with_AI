import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import ExampleServices from "./ExampleServices";
import { Link } from "react-router-dom";

const ExampleTexts = ({ btnclick, display, paddingBottom }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      paddingTop={"50px"}
    >
      <Heading
        textAlign={"center"}
        maxWidth={"480px"}
        color={"#D9D9D9"}
        fontSize={"5xl"}
        fontWeight={"700"}
        lineHeight={"60px"}
      >
        Convert your <br /> <span style={{ color: "#32BED2" }}>Text</span> to{" "}
        <span style={{ color: "#EB41B1" }}>Animation</span> <br /> in just 3
        steps{" "}
      </Heading>
      <ExampleServices paddingBottom={paddingBottom} />
      <Link to="/try-youself">
        <Button
          borderRadius={"3xl"}
          paddingX={"40px"}
          backgroundColor={"cyan.500"}
          onClick={btnclick}
          display={display}
        >
          Try Now
        </Button>
      </Link>
    </Box>
  );
};

export default ExampleTexts;
