import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { menu_data } from '../../data'

const HeaderMenu = () => {
  return (
    <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image src="./logo.png" />
          <Box
            ml={"50px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {menu_data.map((item) => (
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
            ))}
          </Box>
        </Box>
  )
}

export default HeaderMenu