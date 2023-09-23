import { Box } from "@chakra-ui/react";
import React from "react";
import AboutBanner from "./AboutBanner";
import AboutComp from "./AboutComp";
import Footer from "../../components/Footer/Footer";

const AboutPage = () => {
  const backgroundImage = {
    backgroundImage: 'url("./about.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <Box paddingTop={"82px"} style={backgroundImage}>
        <AboutBanner />
      </Box>
      <Box>
        <AboutComp
          direction={"row"}
          bgColor={"#060622"}
          titleColor={"#ffffff"}
          subTitleColor={"#848383"}
          title={"OUR VISION"}
          subTitle={
            "At ANI69, we're on a mission to revolutionize the animation industry. We believe that everyone should have the power to create animations that touch the heart and soul, and we've harnessed the magic of AI to make that vision a reality"
          }
          imgSrc={"./Image.png"}
        />
        <AboutComp
          direction={"row-reverse"}
          bgColor={"#D9D9D9"}
          titleColor={"#090909  "}
          subTitleColor={"#000000"}
          title={"WHY CHOOSE US?"}
          subTitle={
            "At ANI69, we provide emotion in every frame. We bring innovation and limitless possibilities in field of animation. We wnt to revolutionize the animation industry with easy collaboration with our partners"
          }
          imgSrc={"./Image.png"}
        />
        <AboutComp
          direction={"row"}
          bgColor={"#060622"}
          titleColor={"#ffffff"}
          subTitleColor={"#848383"}
          title={"OUR PROMISE "}
          subTitle={
            "Every line of code, every pixel, and every algorithm we've crafted is dedicated to one goal: making animation creation accessible, enjoyable, and emotionally resonant for everyone."
          }
          imgSrc={"./Image.png"}
        />
        <AboutComp
          direction={"row-reverse"}
          bgColor={"#D9D9D9"}
          titleColor={"#090909  "}
          subTitleColor={"#000000"}
          title={"OUR MISSION"}
          subTitle={
            "At ANI69, our mission is to empower individuals and organizations with cutting-edge AI-driven animation tools and technologies that enable them to unleash their creativity, produce captivating animations, and tell stories that resonate deeply with audiences worldwide. We are committed to democratizing the animation industry, making it accessible to all, and fostering a community of passionate animators and storytellers who can bring their visions to life with ease and excellence."
          }
          imgSrc={"./Image.png"}
        />
      </Box>
      <Footer />
    </>
  );
};

export default AboutPage;
