import { Box } from "@chakra-ui/react";
import React from "react";
import BlogBanner from "./BlogBanner";
import BlogFeatures from "./BlogFeatures";
import Footer from "../../components/Footer/Footer";
import { blog_data } from "../../data";

const BlogPage = () => {
  return (
    <>
      <Box paddingTop={"82px"} backgroundColor={"#060622"}>
        <BlogBanner />
        <Box
          width={"80%"}
          margin={"auto"}
          paddingTop={"200px"}
          paddingBottom={"100px"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexWrap={"wrap"}
          >
            {blog_data.map((item) => (
              <Box
                key={item.id}
                width={"25%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                paddingY={"60px"}
              >
                <BlogFeatures img={item.imgSrc} title={item.title} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default BlogPage;
