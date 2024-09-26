import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Grid } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Error from "./pages/Error";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
function App() {
  return (
    <Grid templateRows="1fr auto">
      <NavBar />
      <Grid templateRows="1fr" p={4}>
        <Grid templateRows="1fr" minH={"80vh"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}

export default App;
