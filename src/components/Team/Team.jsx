import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import TeamComponent from "./TeamComponent";
import { team_member } from "../../data";

const Team = () => {
  return (
    <Box
      width={"100%"}
      backgroundColor={"#D9D9D9"}
      paddingY={"170px"}
      position={"relative"}
    >
      <Heading position={"absolute"} top={"50px"} left={"110"}>
        Team Members
      </Heading>
      <Box width={"75%"} margin={"auto"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {team_member.map((item) => (
            <Box key={item.id}>
              <TeamComponent
                imgSrc={item.imgSrc}
                name={item.Name}
                designation={item.designation}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
