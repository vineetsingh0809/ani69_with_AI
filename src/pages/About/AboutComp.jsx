import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";

const AboutComp = ({ direction, bgColor, title, subTitle, imgSrc, titleColor, subTitleColor }) => {
  return (
    <Box width={"100%"} backgroundColor={bgColor}>
      <Box
        width={"85%"}
        margin={"auto"}
        display={"flex"}
        flexDirection={direction}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingY={"50px"}
      >
        <Box
          width={"45%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"end"}
          justifyContent={"center"}
        >
          <Heading
            fontFamily={"sourceSerif"}
            fontSize={"36px"}
            fontWeight={"600"}
            lineHeight={"45px"}
            color={titleColor}
            textAlign={"end"}
            marginBottom={"25px"}
          >
            {title}
          </Heading>
          <Heading
            fontFamily={"lato"}
            fontSize={"20px"}
            fontWeight={"400"}
            lineHeight={"24px"}
            color={subTitleColor}
            marginBottom={"25px"}
            textAlign={"end"}
          >
            {subTitle}
          </Heading>
          <Button
            marginBottom={"25px"}
            paddingX={"60px"}
            paddingY={"25px"}
            backgroundColor={"#F3F25B"}
          >
            View More
          </Button>
        </Box>
        <Box
          width={"45%"}
          display={"flex"}
          alignItems={"end"}
          justifyContent={"center"}
        >
          <Image src={imgSrc} />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutComp;
