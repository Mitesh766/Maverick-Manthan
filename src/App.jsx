/* eslint-disable no-unused-vars */


import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import { ToastContainer, toast } from 'react-toastify';

import { useContext } from "react"
import { ShopContext } from "./context/ShopContext"
import Clothing from "./pages/Clothing"
import ProductInfo from "./pages/ProductInfo";
import Footer from './components/Footer'
import Handicraft from "./pages/Handicraft";
import Blog from "./pages/Blog";
import RajasthaniElegance from "./pages/RajasthaniElegance";
import MaharashtrianElegance from "./pages/MaharashtrianElegance";
import AndhraPradeshElegance from "./pages/AndhraPradeshElegance";
import PunjabCrafts from "./pages/PunjabiElegance";

const App = () => {
  const {productData}= useContext(ShopContext)
  return (
    <div className="">
      <ToastContainer/>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        
        <Route path="/clothing" element={< Clothing/>}></Route>
        <Route path="/clothing/:clothId" element={<ProductInfo />}></Route>
        <Route path="/handicraft" element={< Handicraft/>}></Route>
        <Route path="/knowyourculture" element={<Blog />}></Route>
        <Route path="/knowyourculture/rajasthan" element={<RajasthaniElegance />}></Route>
        <Route path="/knowyourculture/maharashtra" element={<MaharashtrianElegance />}></Route>
        <Route path="/knowyourculture/andhra-pradesh" element={<AndhraPradeshElegance />}></Route>
        <Route path="/knowyourculture/punjab" element={<PunjabCrafts />}></Route>

      </Routes>
      <Footer />
    </div>
  )
}


export default App