
import Home from './pages/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Grid } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Error from './pages/Error'
function App() {
  return (
    // <Grid  
    //  height="100vh" // Adjust the height based on your needs
    // templateRows="1fr"
    // templateColumns="1fr" // Adjust the column layout based on your needs
    // gap={4} // Adjust the gap between rows and columns
    // p={4}
    // >
    //     <Routes>
    //       <Route path='/' element={<NavBar />} />
    //       <Route path='/' element={<Footer/>} />

    //       {/* <Route path='/projects' element={<Projects />} /> */}
    //     </Routes>
    // </Grid>
    <Grid templateRows="1fr auto"  >
        <NavBar />
    <Grid templateRows="1fr" p={4}>
      <Grid templateRows="1fr" minH={"80vh"}>
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error />} />
            </Routes>
      </Grid>
    </Grid>
    <Footer />
  </Grid>
  )
}

export default App
