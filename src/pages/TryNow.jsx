import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const TryNow = () => {
  const [inputText, setInputText] = useState("");
  const preview = document.querySelector(".preview");

  const btnClickHandler = () => {
    preview.innerHTML = inputText;
    setInputText("");
  };
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      backgroundColor={"#060622"}
      paddingBottom={"200px"}
    >
      <Box width={"60%"} margin={"auto"} paddingTop={"200px"}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "55px",
            fontWeight: "700",
            lineHeight: "66px",
            color: "#D9D9D9",
          }}
        >
          Convert your <span style={{ color: "#1A95BF" }}>Text</span> to{" "}
          <span style={{ color: "#A42E33" }}>image</span>{" "}
          <span style={{ color: "#FFFFFF" }}>using Ai</span>
        </h1>
        <Box
          className="preview"
          width={"100%"}
          height={"300px"}
          border={"2px solid #D9D9D9"}
          marginTop={"50px"}
          backgroundColor={"#D9D9D9"}
          textAlign={"center"}
        ></Box>
        <Box
          marginTop={"50px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Input
            width={"400px"}
            border={"2px solid white"}
            placeholder="Type your script here"
            backgroundColor={"#D9D9D9"}
            _focus={{ border: "2px solid green" }}
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
          <Button
            borderRadius={"3xl"}
            paddingX={"40px"}
            backgroundColor={"cyan.500"}
            onClick={btnClickHandler}
          >
            Convert
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TryNow;
