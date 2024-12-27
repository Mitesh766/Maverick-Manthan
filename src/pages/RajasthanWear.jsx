import React from 'react';

const RajasthanTraditionalWear = () => {
  const redirect = () => {
    window.location.href = "each-item-next-page.html";
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="text-center mb-6">
        <span className="text-3xl text-[#b46e1f]">Explore Traditional Rajasthan Wear</span>
      </div>
      <hr className="mx-auto w-[90%] border-t-2 border-[#b46e1f] mb-6" />
      
      <div className="flex flex-wrap justify-between mb-6">
        <div className="w-full lg:w-3/5 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-serif text-[#b46e1f] mb-4">Rajasthan</h2>
          <p className="text-base text-[#6a4f28] mb-6">
            Bathed in grandeur and old-world charm, the state of Rajasthan, along with its people, is known to be extremely hospitable and is famous for its unbeatable codes of chivalry. Every Indian state identifies with a distinct culture and deep-rooted traditions, among which Rajasthan has a reputation for having the most vibrant & rich legacy. Formerly known as Rajputana, which means the country of the Rajputs, its majestic forts stand tall to date and never fail to amaze people around the world. Traditional clothes of Rajasthan and Gujarat are a result of its craft practices which majorly comprise various block printing techniques and patterns, tie & dye or Bandhej, and traditional embroideries. The radiant nature of the state is brought to the forefront through heavily embroidered and colourful, traditional dress of women and men.
          </p>
          <button
            onClick={redirect}
            className="bg-[#b46e1f] text-white py-2 px-4 rounded-lg text-sm hover:bg-[#a35c0f] transition duration-300"
          >
            Read More
          </button>
        </div>

        <div className="w-full lg:w-2/5 p-4 flex justify-center">
          <img
            src="../public/images/rajasthan.jpg"
            alt="Rajasthan Traditional Wear"
            className="w-full max-w-[450px] rounded-lg shadow-md transition-transform transform hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default RajasthanTraditionalWear;
