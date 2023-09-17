import { Box, Heading, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import TeamComponent from "./TeamComponent";
import { team_member } from "../../data";

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const mouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const mouseLeave = () => {
    setHoveredIndex(null);
  };

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
          {team_member.map((item, index) => (
            <Box
              key={item.id}
              className="hello"
              cursor={"pointer"}
              onMouseEnter={() => mouseEnter(index)}
              onMouseLeave={mouseLeave}
            >
              <TeamComponent
                imgSrc={item.imgSrc}
                name={item.Name}
                designation={item.designation}
              />
              <Box
                width={"75%"}
                margin={"auto"}
                height={"30px"}
                marginTop={"25px"}
              >
                {hoveredIndex === index && (
                  <Box
                    className="icons"
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    {item.icons.map((data) => (
                      <a href={data.link}>
                        <Image key={data.image} src={data.image} />
                      </a>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
