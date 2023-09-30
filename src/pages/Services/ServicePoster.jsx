import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { new_services } from "../../data";
import SingleService from "../../components/ServicesComponent/SingleService";

const ServicePoster = () => {
  return (
    <Box
      width={"95%"}
      margin={"auto"}
      display={"flex"}
      flexWrap={"wrap"}
      alignItems={"center"}
      justifyContent={"space-between"}
      paddingTop={"100px"}
      paddingBottom={"50px"}
    >
      {new_services.map((item) => (
        <Box
          key={item.id}
          width={"33%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          paddingBottom={"100px"}
        >
          <SingleService
            id={item.id}
            img={item.img}
            title={item.title}
            subTitle={item.subTitle}
          />
          <Button
            marginTop={"40px"}
            width={"242px"}
            backgroundColor={"#F3F25B"}
            paddingY={"25px"}
          >
            View More
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default ServicePoster;
