import React from "react";
import { Box, Button, Heading, Image, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      backgroundColor={"#D9D9D9"}
      pt={"100px"}
    >
      <Box width={"340px"} margin={"auto"} marginTop={"40px"}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link to={"/"}>
            <Image src={"/logo.png"} alt="logo" />
          </Link>
          <Heading
            fontSize={"30px"}
            fontWeight={"400"}
            lineHeight={"36px"}
            color={"#3C3C3C"}
            marginY={"35px"}
            className="text-3xl font-normal leading-9 text-[#3C3C3C] my-8"
          >
            Sign in to your account
          </Heading>
          <Box
            textAlign={"center"}
            marginBottom={"20px"}
            className="space-y-5 text-center mb-5"
          >
            <Input
              border={"2px solid gray"}
              marginBottom={"7px"}
              _hover={{ border: "2px solid black" }}
              type="text"
              placeholder="Email or Phone Number"
            />
            <Input
              border={"2px solid gray"}
              marginTop={"7px"}
              _hover={{ border: "2px solid black" }}
              type="password"
              placeholder="Password"
            />
          </Box>
          <Box marginBottom={"20px"} className="mb-6">
            <Button
              borderRadius={"10px"}
              paddingX={"135px"}
              paddingY={"24px"}
              backgroundColor={"#4DADAD"}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <a
          style={{ textDecoration: "underline" }}
          className="underline"
          href="https://www.google.com/"
        >
          Forgot password?
        </a>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          marginY={"40px"}
        >
          <Box height={"2px"} backgroundColor={"#3D3D3D"} width={"45%"}></Box>
          <h3>or</h3>
          <Box height={"2px"} backgroundColor={"#3D3D3D"} width={"45%"}></Box>
        </Box>
        <Box
          width={"100%"}
          backgroundColor={"white"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginBottom={"20px"}
          paddingY={"10px"}
          borderRadius={"10px"}
          cursor={"pointer"}
          _hover={{ boxShadow: "xl" }}
        >
          <Image
            src={"/google.png"}
            alt="google logo"
            width={"16px"}
            height={"15px"}
            paddingRight={"3px"}
          />
          <h1 style={{ paddingLeft: "3px" }}>Sign in with Google</h1>
        </Box>
        <Box
          width={"100%"}
          backgroundColor={"white"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginBottom={"20px"}
          paddingY={"10px"}
          borderRadius={"10px"}
          cursor={"pointer"}
          _hover={{ boxShadow: "xl" }}
        >
          <Image
            src={"/LinkedIn.png"}
            alt="google logo"
            width={"20px"}
            height={"18px"}
            paddingRight={"3px"}
          />
          <h1 style={{ paddingLeft: "3px" }}>Sign in with Google</h1>
        </Box>
      </Box>
    </Box>
  );
};

export default login;
