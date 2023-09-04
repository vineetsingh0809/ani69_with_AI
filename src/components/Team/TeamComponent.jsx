import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const TeamComponent = ({ imgSrc, name, designation }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Image
        src={imgSrc}
        width={"150px"}
        height={"150px"}
        objectFit={"cover"}
        borderRadius={"50%"}
        border={"4px solid #060622"}
      />
      <Heading
        fontSize={"xl"}
        fontWeight={"400"}
        lineHeight={"24px"}
        fontFamily={"body"}
        paddingTop={"25px"}
        paddingBottom={"25px"}
      >
        {name}
      </Heading>
      <Heading
        fontSize={"md"}
        fontWeight={"400"}
        lineHeight={"20px"}
        fontFamily={"body"}
      >
        {designation}
      </Heading>
    </Box>
  );
};

export default TeamComponent;
