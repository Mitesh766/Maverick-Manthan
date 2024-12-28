import { Link } from "react-router"
import Hero from "../components/Hero"
import Hover from "../components/Hover"
import LatestHandicraftProducts from "../components/LatestHandicrafts"
import LatestProducts from "../components/LatestProducts"
import OurPolicy from "../components/OurPolicy"


const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <Hover />
      <LatestProducts />
      <LatestHandicraftProducts />
      <Link to="/knowyourculture#blg">
        <button className="px-6 mb-10 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl focus:outline-none">
          Review Your Culture
        </button>
      </Link>
      <OurPolicy />
    </div>
  )
}

export default Home