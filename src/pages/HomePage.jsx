import React from "react";
import { Box } from "@chakra-ui/react";
import Banner from "../components/Banner/Banner";
import Promotion from "../components/Promotions/Promotion";
import Example from "../components/ExampleComponent/Example";
import Services from "../components/ServicesComponent/Services";
import Team from "../components/Team/Team";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <Box>
      <Banner />
      <Promotion />
      <Example />
      <Services />
      <Team />
      <Footer />
    </Box>
  );
};

export default HomePage;
