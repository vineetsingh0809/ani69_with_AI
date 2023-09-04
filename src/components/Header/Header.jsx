import { Box } from "@chakra-ui/react";
import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderUser from "./HeaderUser";

const Header = () => {
  return (
    <Box boxShadow={"lg"}>
      <Box
        width={"85%"}
        margin={"auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingTop={"20px"}
        paddingBottom={"20px"}
      >
        <HeaderMenu />
        <HeaderUser />
      </Box>
    </Box>
  );
};

export default Header;
