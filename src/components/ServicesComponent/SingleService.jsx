import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const SingleService = ({id, img, title, subTitle}) => {
  return (
    <Box
          backgroundColor={"#4DADAD"}
          width={"290px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          color={"#1E1E1E"}
          borderRadius={"20px"}
          key={id}
        >
          <Image src={img} paddingTop={"20px"} />
          <Box width={"88%"} paddingBottom={"60px"}>
            <Heading
              fontSize={"xl"}
              fontWeight={"600"}
              fontFamily={"body"}
              lineHeight={"24px"}
              paddingY={"25px"}
            >
              {title}
            </Heading>
            <Heading
              fontSize={"sm"}
              fontWeight={"500"}
              fontFamily={"body"}
              lineHeight={"16px"}
            >
              {subTitle}
            </Heading>
          </Box>
        </Box>
  )
}

export default SingleService