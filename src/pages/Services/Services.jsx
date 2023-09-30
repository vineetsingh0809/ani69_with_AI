import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "../../components/Footer/Footer";
import ServiceDescription from "./ServiceDescription";
import ServiceExample from "./ServiceExample";
import ServicePoster from "./ServicePoster";

const Services = () => {
  return (
    <>
      <Box paddingTop={"82px"} backgroundColor={"#060622"}>
        <ServiceDescription />
        <ServiceExample />
        <ServicePoster />
      </Box>
      <Footer />
    </>
  );
};

export default Services;
