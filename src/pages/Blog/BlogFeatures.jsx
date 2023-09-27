import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";

const BlogFeatures = ({img, title}) => {
  return (
    <Box width={"245px"}>
      <Image src={img} />
      <Box
        backgroundColor={"#FFFFFF"}
        fontSize={"20px"}
        fontFamily={"body"}
        lineHeight={"24px"}
        fontWeight={"600"}
        paddingTop={"30px"}
        paddingBottom={"50px"}
        paddingX={"20px"}
      >
        {title}
      </Box>
      <Box marginTop={"40px"}>
        <Button width={"100%"} backgroundColor={"#F3F25B"} paddingY={"25px"}>
          View More
        </Button>
      </Box>
    </Box>
  );
};

export default BlogFeatures;
