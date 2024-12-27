/* eslint-disable no-unused-vars */
import { useState } from "react";
import { assets } from "../assets/assets";

const Hover = () => {
  const [activeDiv, setActiveDiv] = useState("Timeless"); // Default active div
  const [image, setImage] = useState(assets.soulful); // Default background image

  const divs = [
    {
      id: "Timeless",
      title: "Timeless",
      description:
        "We create timeless pieces that honor India’s heritage, blending traditional craftsmanship with enduring style for every generation.",
      image: assets.craft,
    },
    {
      id: "Soulful",
      title: "Soulful",
      description:
        "Our products are crafted with soul, reflecting the passion of artisans and the rich stories of India's cultural heritage.",
      image: assets.soulful,
    },
    {
      id: "Festival",
      title: "Festival Specific",
      description:
        "We specialize in festival-specific collections that capture the essence of each celebration through culturally inspired designs and traditional craftsmanship.",
      image: assets.festival,
    },
    {
      id: "Authentic",
      title: "Artisan crafted",
      description:
        "Our collections are carefully crafted by skilled artisans, showcasing the beauty of India’s traditions.",
      image: assets.Timeless,
    },
  ];

  return (
    <div className="flex items-center justify-center ">
      <div
        className="bg-cover bg-center flex flex-col  items-center justify-center rounded-lg"
        style={{
          backgroundImage: `url(${image})`,
          height: "80vh", 
          width: "100vw", 
          position: "relative",
        }}
      >
        <div className="flex flex-wrap justify-center gap-4">
          {divs.map((div) => (
            <div
              key={div.id}
              className={`flex flex-col  items-center justify-center text-white bg-black/50 p-4 rounded-md cursor-pointer transition-all duration-300 transform hover:scale-100 ${
                activeDiv === div.id ? "opacity-100" : "opacity-0"
              }`}
              onMouseEnter={() => {
                setActiveDiv(div.id);
                setImage(div.image);
              }}
              style={{
                width: "auto", // Each div takes its own width
                height: "auto", // Each div takes its own height
              }}
            >
              <h2 className="text-2xl font-semibold">{div.title}</h2>
              <p className="text-center mt-2">{div.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hover;
