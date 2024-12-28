/* eslint-disable no-unused-vars */


import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import { ToastContainer, toast } from 'react-toastify';
import RajasthanElegance from "./pages/Rajasthan"
import RajasthanTraditionalWear from "./pages/RajasthanWear"
import { useContext } from "react"
import { ShopContext } from "./context/ShopContext"
import Clothing from "./pages/Clothing"
import ProductInfo from "./pages/ProductInfo";

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
        <Route path="/clothing" element={< Clothing/>}></Route>
        <Route path="/clothing/:clothId" element={<ProductInfo />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}


export default App