/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets"

  
const Product = () => {
  const { productId } = useParams()
  const {prodctData}= useContext(ShopContext)
  return(
    <div className="">

    </div>
  )
 
}

export default Product