import { Box } from "@chakra-ui/react";
import React from "react";
import ServiceComponent from "./ServiceComponent";

const Services = () => {
  return (
    <Box
      width={"100%"}
      backgroundColor={"#060622"}
      paddingTop={"200px"}
      paddingBottom={"100px"}
    >
      <Box width={"85%"} margin={"auto"}>
        <ServiceComponent />
      </Box>
    </Box>
  );
};

export default Services;
