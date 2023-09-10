import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { menu_data } from "../../data";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Link to="/">
        <Image src="./logo.png" cursor={"pointer"} />
      </Link>
      <Box
        ml={"50px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        {menu_data.map((item) => (
          <Link to={item.redirect_to}>
            <Heading
              as={"h4"}
              key={item.id}
              paddingRight={"30px"}
              fontSize={"16px"}
              fontWeight={"400"}
              lineHeight={"20px"}
              cursor={"pointer"}
            >
              {item.value}
            </Heading>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default HeaderMenu;
