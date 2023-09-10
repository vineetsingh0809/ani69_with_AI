import { Box, Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BannerTexts = (props) => {
  return (
    <Box color={"#FEFEFE"}>
      <Heading
        fontSize={"5xl"}
        fontWeight={"700"}
        lineHeight={"58px"}
        fontFamily={"body"}
      >
        Ani69
      </Heading>
      <Heading
        maxWidth={"580px"}
        fontSize={"2xl"}
        fontWeight={"400"}
        lineHeight={"29px"}
        fontFamily={"body"}
        paddingTop={"43px"}
      >
        We present to you an innovative tool that combines the artificial
        intelligence with human emotions.
      </Heading>
      <Link to="/try-youself">
        <Button
          borderRadius={"3xl"}
          paddingX={"40px"}
          backgroundColor={"cyan.500"}
          marginTop={"115px"}
          onClick={props.btnClick}
        >
          Try Now
        </Button>
      </Link>
    </Box>
  );
};

export default BannerTexts;
