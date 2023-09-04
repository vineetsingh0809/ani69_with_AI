import { Box, Image } from "@chakra-ui/react";
import React from "react";
import PromotionTexts from "./PromotionTexts";

const Promotion = () => {
  return (
    <Box
      position={"relative"}
      height={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Image
        src="./Rectangle 155.png"
        position={"absolute"}
        top={"0"}
        left={"0"}
      />
      <Image
        src="./Rectangle 154.png"
        position={"absolute"}
        bottom={"0"}
        right={"0"}
      />
      <Image
        src="./Rectangle 162.png"
        position={"absolute"}
        bottom={"0"}
        left={"0"}
      />
      <Box
        width={"85%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        zIndex={"999"}
      >
        <Image src="./71.png" />
        <PromotionTexts />
      </Box>
    </Box>
  );
};

export default Promotion;
