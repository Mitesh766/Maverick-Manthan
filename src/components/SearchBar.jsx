/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import { assets } from "../assets/assets"
import { useLocation } from "react-router"

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    const [visible,setVisible]= useState(false)
    const location = useLocation()
useEffect(()=>{
if(location.pathname.includes('collection')){
    setVisible(true)
}
else{
    setVisible(false)
}
},[location])

    return showSearch && visible ? (
        <div className="border-t border-b text-center bg-gray-50">
            <div className="inline-flex justify-center items-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2" >
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" className="flex-1 outline-none bg-inherit text-sm" />
                <img src={assets.search_icon} className="w-4" />
            </div>
            <img onClick={()=>setShowSearch(false)} className="inline w-3 cursor-pointer" src={assets.cross_icon}/>
        </div>
    ) : null
}

export default SearchBar