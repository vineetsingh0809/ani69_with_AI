import React from "react";
import { services } from "../../data";
import { Box, Heading, Image } from "@chakra-ui/react";

const ExampleServices = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"end"}
      justifyContent={"space-between"}
      color={"#D9D9D9"}
      paddingTop={"50px"}
      paddingBottom={"100px"}
    >
      {services.map((item) => (
        <Box
          key={item.id}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          paddingX={item.padding}
        >
          <Image src={item.src} width={"40px"} />
          <Heading
            fontSize={"md"}
            fontWeight={"400"}
            fontFamily={"body"}
            paddingTop={"10px"}
          >
            {item.text}
          </Heading>
        </Box>
      ))}
    </Box>
  );
};

export default ExampleServices;
