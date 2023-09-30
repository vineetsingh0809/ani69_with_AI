import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ExampleTexts from "./ExampleTexts";

const Example = ({btnclick}) => {
  return (
    <Box
      width={"100%"}
      bgGradient="conic-gradient(from 180deg at 50% 50%, #060622 0deg, #060622 42.37deg, rgba(166, 0, 0, 0.79) 360deg)"
    >
      <Box
        width={"90%"}
        margin={"auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingY={"50px"}
      >
        <ExampleTexts btnclick={btnclick} display={"block"} paddingBottom={"100px"} />
        <Box>
          <Image src="./Computer.png" />
        </Box>
      </Box>
    </Box>
  );
};

export default Example;
