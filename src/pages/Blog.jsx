

const Blog = () => {
  const locations = [
    {
      name: "Rajasthan",
      description:
        "Bathed in grandeur and old-world charm, the state of Rajasthan, along with its people, is known to be extremely hospitable and is famous for its unbeatable codes of chivalry. Every Indian state identifies with a distinct culture and deep-rooted traditions, among which Rajasthan has a reputation for having the most vibrant & rich legacy.",
      imgSrc:
        "https://img.perniaspopupshop.com/store-locator-v2/uploads/Rajasthan_main_image_Desktop_7bd5322074.jpg",
      redirectTo: "/knowyourculture/rajasthan",
    },
    {
      name: "Punjab",
      description:
        "Steeped in vitality and age-old traditions, the state of Punjab stands as a beacon of warmth and exuberance, renowned for its vibrant culture and unmatched spirit of hospitality.",
      imgSrc:
        "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Punjabi_State_0619dc904c.jpg",
      redirectTo: "/knowyourculture/punjab",
    },
    {
      name: "Maharashtra",
      description:
        "Known for its rich cultural heritage, Maharashtra has seen generations of rulers, colonies, and various communities. The arts and craft, music, food, and clothing make Maharashtra a grand state in its size and culture.",
      imgSrc:
        "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Maharashtraaa_State_835bebe5b0.jpg",
      redirectTo: "/knowyourculture/maharashtra",
    },
    {
      name: "Andhra Pradesh",
      description:
        "Andhra Pradesh holds stories of rich heritage and traditions. Thanks to the various dynasties that ruled over this region, Andhra is now blessed with a great conglomeration of cultures.",
      imgSrc:
        "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Andhrapradesh_State_6915355119.jpg",
      redirectTo: "/knowyourculture/andhra-pradesh",
    },
    {
      name: "Gujarat",
      description:
        "Located in the western lands of India, bordered by Pakistan, stands the glorious state of Gujarat. Also known as the land of the Gurjans, Gujarat is a burst of colours, prints, embroideries and craftsmanship.",
      imgSrc:
        "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Gujjarat_State_e33957f909.jpg",
      redirectTo: "/knowyourculture/gujarat",
    },
  ];

  return (
    <div className="bg-gray-100 font-serif">
      <div className="text-center py-6">
        <h1 className="text-4xl font-bold text-orange-700">Explore Indian Tradition</h1>
      </div>
      <div className="container mx-auto">
        {locations.map((location, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center mb-10 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="p-6 max-w-lg text-justify">
              <h2 className="text-3xl font-semibold text-orange-600 mb-4">
                {location.name}
              </h2>
              <p className="text-gray-700 text-sm mb-4">{location.description}</p>
              <button
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md"
                onClick={() => (window.location.href = location.redirectTo)}
              >
                Read More
              </button>
            </div>
            <div className="p-6">
              <img
                className="rounded-md shadow-md hover:scale-105 transition-transform duration-300"
                src={location.imgSrc}
                alt={`${location.name} Traditional Wear`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
