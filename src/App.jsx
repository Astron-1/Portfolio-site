import { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { Grid } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SwipeableRoutes from "./components/SwipeableRoutes";
import SwipeTutorial from "./components/SwipeTutorial";

const Home = lazy(() => import("./pages/Home"));
const Experience = lazy(() => import("./pages/Experience"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Skills = lazy(() => import("./pages/Skills"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  return (
    <Grid templateRows="1fr auto">
      <NavBar />
      <Grid templateRows="1fr" p={4}>
        <Grid templateRows="1fr" minH={"80vh"}>
          <SwipeableRoutes>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </Suspense>
          </SwipeableRoutes>
        </Grid>
      </Grid>
      <Footer />
      <SwipeTutorial />
    </Grid>
  );
}

export default App;
