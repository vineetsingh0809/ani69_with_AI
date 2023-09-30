import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ExampleTexts from "../../components/ExampleComponent/ExampleTexts";

const ServiceExample = () => {
  return (
    <Box
      width={"75%"}
      margin={"auto"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <ExampleTexts display={"none"} paddingBottom={"10px"} />
      <Image src="./Computer.png" />
    </Box>
  );
};

export default ServiceExample;
