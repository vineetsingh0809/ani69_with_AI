import { Box } from "@chakra-ui/react";
import React from "react";
import ButtonTexts from "./BannerTexts";
import BannerGIF from "./BannerGIF";

const Banner = () => {
  return (
    <Box width={"100%"} backgroundColor={"#060622"}>
      <Box
        width={"85%"}
        margin={"auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingY={"120px"}
      >
        <ButtonTexts />
        <BannerGIF />
      </Box>
    </Box>
  );
};

export default Banner;
