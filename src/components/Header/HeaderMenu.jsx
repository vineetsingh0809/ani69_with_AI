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
          <Link to={item.redirect_to} key={item.id}>
            <Heading
              as={"h4"}
              marginRight={"20px"}
              paddingY={"5px"}
              paddingX={"15px"}
              fontSize={"16px"}
              fontWeight={"400"}
              lineHeight={"20px"}
              cursor={"pointer"}
              _hover={{
                color: "white",
                transition: "all 1s ease",
                backgroundColor: "#060622",
                borderRadius:"5px"
              }}
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
