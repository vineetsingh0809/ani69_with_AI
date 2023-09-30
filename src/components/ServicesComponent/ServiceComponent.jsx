import React from "react";
import { real_services } from "../../data";
import { Box } from "@chakra-ui/react";
import SingleService from "./SingleService";

const ServiceComponent = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      {real_services.map((item) => (
        <Box key={item.id}>
          <SingleService
            id={item.id}
            img={item.img}
            title={item.title}
            subTitle={item.subTitle}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ServiceComponent;
