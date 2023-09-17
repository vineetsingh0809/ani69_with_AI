import {
  Box,
  Button,
  Checkbox,
  Heading,
  Image,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer/Footer";

const ContactPage = () => {
  return (
    <Box width={"100%"} paddingTop={"82px"} backgroundColor={"#060622"}>
      <Box width={"85%"} margin={"auto"} paddingY={"100px"}>
        <Box display={"flex"} alignItems={"center"}>
          <Heading color={"#D9D9D9"} marginRight={"10px"}>
            Grab a
          </Heading>
          <Image
            width={"50px"}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Coffee_cup_icon.svg/1200px-Coffee_cup_icon.svg.png"
          />
        </Box>
        <Heading color={"#D9D9D9"}>
          While We Work For Your{" "}
          <span
            style={{
              color: "#EB41B1",
              backgroundColor: "#D9D9D9",
              padding: "2px",
              borderRadius: "6px",
            }}
          >
            {" "}
            Animation!
          </span>
        </Heading>
      </Box>
      <Box
        width={"85%"}
        backgroundColor={"#D9D9D9"}
        margin={"auto"}
        display={"flex"}
        // alignItems={"center"}
        justifyContent={"space-between"}
        paddingX={"50px"}
        paddingY={"40px"}
        borderRadius={"10px"}
      >
        <Box width={"20px"} height={"inherit"} backgroundColor={"#060622"}></Box>
        <Box
          width={"50%"}
          display={"flex"}
          flexDirection={"column"}
          paddingY={"50px"}
          maxHeight={"500px"}
        >
          <form style={{ display: "flex", flexDirection: "column" }}>
            <Input
              placeholder="Name"
              width={"50%"}
              _placeholder={{ color: "black" }}
              marginBottom={"20px"}
              border={"1px solid black"}
              backgroundColor={"#fff"}
              marginLeft={"50px"}
              required
            />
            <Input
              placeholder="Email"
              width={"50%"}
              _placeholder={{ color: "black" }}
              marginBottom={"20px"}
              border={"1px solid black"}
              marginLeft={"50px"}
              backgroundColor={"#fff"}
              required
            />
            <Input
              placeholder="Phone"
              width={"50%"}
              _placeholder={{ color: "black" }}
              marginBottom={"20px"}
              border={"1px solid black"}
              marginLeft={"50px"}
              backgroundColor={"#fff"}
            />
            <Textarea
              placeholder="Message"
              _placeholder={{ color: "black" }}
              width={"80%"}
              border={"1px solid black"}
              marginLeft={"50px"}
              marginBottom={"20px"}
              backgroundColor={"#fff"}
              maxHeight={"150px"}
              required
            />
            <Checkbox
              style={{ border: "black" }}
              marginLeft={"50px"}
              marginBottom={"20px"}
            >
              Want to receive updates from us?
            </Checkbox>
            <Button
              width={"35%"}
              marginLeft={"50px"}
              backgroundColor={"#060622"}
              color={"#fff"}
            >
              Contact
            </Button>
          </form>
        </Box>
        <Image src="./contact.png" />
      </Box>
      <Box marginTop={"100px"}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ContactPage;
