/* eslint-disable no-unused-vars */


import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import { ToastContainer, toast } from 'react-toastify';
import ImageCarousel from "./components/ImageCarousel"

const App = () => {
  return (
    <div className="">
      <ToastContainer/>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}


export default App