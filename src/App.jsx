/* eslint-disable no-unused-vars */


import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import { ToastContainer, toast } from 'react-toastify';
import ImageCarousel from "./components/ImageCarousel"
import RajasthanElegance from "./pages/Rajasthan"
import RajasthanTraditionalWear from "./pages/RajasthanWear"
import Products from "./pages/Products"
import { useContext } from "react"
import { ShopContext } from "./context/ShopContext"

const App = () => {
  const {productData}= useContext(ShopContext)
  return (
    <div className="">
      <ToastContainer/>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/rajasthan" element={<RajasthanElegance />}></Route>
        <Route path="/rajasthanwear" element={<RajasthanTraditionalWear />}></Route>
        <Route path="/products/:id" element={< Products/>}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}


export default App