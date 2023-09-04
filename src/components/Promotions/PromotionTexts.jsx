import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const PromotionTexts = () => {
  return (
    <Box>
      <Heading
        fontSize={"5xl"}
        fontWeight={"bold"}
        lineHeight={"66px"}
        fontFamily={"body"}
        maxWidth={"386px"}
      >
        Convert your <span style={{ color: "#32BED2" }}>Text</span> to{" "}
        <span style={{ color: "#D9343B" }}>image</span> using Ai
      </Heading>
      <Heading
        fontSize={"md"}
        fontWeight={"400"}
        lineHeight={"24px"}
        maxWidth={"470px"}
        color={"#141414"}
        paddingTop={"15px"}
      >
        COMPANY NAME text to image converter is an useful tool to convert any
        text into quality images using Artificial intelligence
      </Heading>
    </Box>
  );
};

export default PromotionTexts;
