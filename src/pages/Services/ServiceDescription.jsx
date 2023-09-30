import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const ServiceDescription = () => {
  return (
    <Box
      width={"75%"}
      margin={"auto"}
      paddingTop={"60px"}
      paddingBottom={"100px"}
    >
      <Heading
        color={"#ffffff"}
        fontSize={"60px"}
        lineHeight={"90px"}
        fontFamily={"body"}
        fontWeight={"800"}
        paddingBottom={"40px"}
      >
        Services
      </Heading>
      <Heading
        color={"#ffffff"}
        fontSize={"20px"}
        lineHeight={"24px"}
        fontFamily={"body"}
        fontWeight={"600"}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book.Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Heading>
    </Box>
  );
};

export default ServiceDescription;
