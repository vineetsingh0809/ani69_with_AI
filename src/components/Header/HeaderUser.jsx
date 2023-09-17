import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HeaderUser = () => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      <Box>
        <select
          name="features"
          id="features"
          style={{
            backgroundColor: "transparent",
            outline: "none",
            cursor: "pointer",
          }}
        >
          <option value="disable">Features</option>
          <option value="Text to Animation">Text to Animation</option>
          <option value="Text to Image">Text to Image</option>
          <option value="Text to Speech">Text to Speech</option>
          <option value="Text to Speech">Text to Video</option>
        </select>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingLeft={"25px"}
        width={"190px"}
      >
        <Box
          width={"30px"}
          height={"30px"}
          border={"1px solid black"}
          borderRadius={"50%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          cursor={"pointer"}
        >
          <Image src="./user.png" width={"30px"} />
        </Box>
        <Link to="/login">
          <Button
            height={"28px"}
            backgroundColor={"transparent"}
            border={"1px solid black"}
            fontSize={"14px"}
            fontWeight={"normal"}
            paddingY={"15px"}
            _hover={{
              color: "white",
              backgroundColor: "#060622",
              transition: "all 1s ease",
            }}
          >
            Login/Sign Up
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HeaderUser;
