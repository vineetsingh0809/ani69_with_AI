import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";

const BlogBanner = () => {
  return (
    <Box>
      {" "}
      <Box
        color={"#FFFCFC"}
        width={"75%"}
        margin={"auto"}
        fontSize={"42px"}
        fontWeight={"500"}
        lineHeight={"63px"}
        paddingY={"50px"}
      >
        Blog
      </Box>
      <Box
        width={"80%"}
        margin={"auto"}
        backgroundColor={"#F4F4F4"}
        borderRadius={"24px"}
      >
        <Box
          height={"380px"}
          width={"92%"}
          margin={"auto"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box width={"50%"}>
            <Heading
              fontSize={"36px"}
              fontWeight={"600"}
              fontFamily={"body"}
              lineHeight={"43px"}
              color={"#1E1E1E"}
            >
              This is a featured article- most important piece of content
            </Heading>
            <Heading
              fontSize={"16px"}
              fontWeight={"400"}
              fontFamily={"body"}
              lineHeight={"19px"}
              color={"#1E1E1E"}
              marginY={"50px"}
            >
              Very short description of what’s being discussed in this article,
              just to provide preview
            </Heading>
            <Button
              backgroundColor={"#000000"}
              color={"#FFFFFF"}
              paddingX={"40px"}
              paddingY={"25px"}
            >
              Read More
            </Button>
          </Box>
          <Box
            width={"50%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src="./blog.png" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogBanner;
