import { Box } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import TryNow from "./pages/TryNow";

const App = () => {
  return (
    <Router>
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
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/try-youself" element={<TryNow />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
