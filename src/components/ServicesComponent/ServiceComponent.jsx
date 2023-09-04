import React from "react";
import { real_services } from "../../data";
import { Box, Heading, Image } from "@chakra-ui/react";

const ServiceComponent = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      {real_services.map((item) => (
        <Box
          backgroundColor={"#4DADAD"}
          width={"290px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          color={"#1E1E1E"}
          borderRadius={"20px"}
          key={item.id}
        >
          <Image src={item.img} paddingTop={"20px"} />
          <Box width={"88%"} paddingBottom={"60px"}>
            <Heading
              fontSize={"xl"}
              fontWeight={"600"}
              fontFamily={"body"}
              lineHeight={"24px"}
              paddingY={"25px"}
            >
              {item.title}
            </Heading>
            <Heading
              fontSize={"sm"}
              fontWeight={"500"}
              fontFamily={"body"}
              lineHeight={"16px"}
            >
              {item.subTitle}
            </Heading>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ServiceComponent;
