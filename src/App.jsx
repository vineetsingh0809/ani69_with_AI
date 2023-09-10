import { Box } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import TryNow from "./pages/TryNow";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Services from "./pages/Services";
import BlogPage from "./pages/BlogPage";
import { useState } from "react";

const App = () => {
  const [showVideo, setShowVideo] = useState(false);

  const btnClick = () => {
    console.log("Video Started!");
    setShowVideo(true);
  };

  const onVideoOver = () => {
    console.log("Video Over!");
    setShowVideo(false);
  };

  return (
    <Router>
      <Box className="App">
        <Box position={"relative"}>
          {!showVideo ? (
            <Box
              position={"fixed"}
              width={"100%"}
              backgroundColor={"white"}
              zIndex={"99999"}
              boxShadow={"xl"}
            >
              <Header />
            </Box>
          ) : (
            ""
          )}
        </Box>
        <Routes>
          <Route exact path="/" element={<HomePage btnClick={btnClick} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/try-youself"
            element={<TryNow showVideo={showVideo} onVideoOver={onVideoOver} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
