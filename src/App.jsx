import { Box } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Box className="App">
      <Box position={"relative"}>
        <Box
          position={"fixed"}
          width={"100%"}
          backgroundColor={"white"}
          zIndex={"99999"}
          boxShadow={"xl"}
        >
          <Header />
        </Box>
      </Box>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </Box>
  );
};

export default App;
