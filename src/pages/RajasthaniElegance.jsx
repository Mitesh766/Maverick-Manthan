

const RajasthaniElegance = () => {
  return (
    <div className="bg-amber-50 text-brown-800 font-poppins p-6">
      {/* Section Title */}
      <h1 className="text-center bg-amber-100 text-amber-700 border border-amber-700 rounded-md py-3 px-4 text-xl font-bold mb-8">
        Delve Into the Crafts of Rajasthan
      </h1>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            title: "LEHERIYA",
            img: "https://img.perniaspopupshop.com/store-locator-v2/uploads/Leheriya_DP_Main_6be2f970b1.jpg",
            description: "Among the many heritage crafts that define Rajasthan...",
          },
          {
            title: "AJRAKH",
            img: "https://img.perniaspopupshop.com/store-locator-v2/uploads/Main_Image_Ajrakh_DP_4a5abae384.jpg",
            description: "Found in various regions around India...",
          },
          {
            title: "TIE & DYE",
            img: "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Tie_Main_Banner_7f4e4aa51c.jpg",
            description: "The heartland of Rajasthani Textiles...",
          },
          {
            title: "HAND BLOCK PRINTING",
            img: "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Main_Hand_Block_dbd29c7513.jpg",
            description: "Since time immemorial, hand block printing...",
          },
          {
            title: "BAGRU",
            img: "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Main_Bagru_cde9173814.jpg",
            description: "It is no secret that Indians were...",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-amber-100 shadow-md rounded-lg overflow-hidden w-64"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h5 className="text-lg font-medium text-brown-700 mb-2">
                {card.title}
              </h5>
              <p className="text-sm text-brown-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="my-8 border-dashed border-amber-700" />

      {/* Traditional Wear Section */}
      <div className="flex flex-wrap justify-around gap-6">
        <div className="max-w-xs">
          <h3 className="text-lg font-bold text-amber-700 mb-2">
            Traditional Rajasthani Wear
          </h3>
        </div>
        <div className="max-w-xs">
          <h4 className="font-medium text-brown-700 mb-1">Women</h4>
          <p className="text-sm text-brown-600">
            The traditional Rajasthani attire of women includes
            <span className="text-amber-700 font-bold"> chaniya choli</span> adorned
            with vibrant colors and intricate mirror work. The
            <span className="text-amber-700 font-bold"> dupatta</span>, or
            <span className="text-amber-700 font-bold"> odhni</span>, symbolizes
            modesty and serves as protection from the sun.
          </p>
        </div>
        <div className="max-w-xs">
          <h4 className="font-medium text-brown-700 mb-1">Men</h4>
          <p className="text-sm text-brown-600">
            Men's traditional wear features the
            <span className="text-amber-700 font-bold"> dhoti</span> and
            <span className="text-amber-700 font-bold"> angrakha</span>, often paired
            with a majestic
            <span className="text-yellow-700 italic"> turban</span>. Comfort meets
            elegance with these airy and regal garments.
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-dashed border-amber-700" />

      {/* Jewellery Section */}
      <div className="flex flex-wrap justify-around gap-6">
        <div className="max-w-xs">
          <h3 className="text-lg font-bold text-amber-700 mb-2">
            Staple Jewellery & Accessories
          </h3>
        </div>
        <div className="max-w-xs">
          <p className="text-sm text-brown-600">
            Women adorn themselves with
            <span className="text-amber-700 font-bold"> Jadau sets</span>,
            <span className="text-amber-700 font-bold"> chokers</span>, and
            <span className="text-amber-700 font-bold"> Rani Haars</span>, while men
            wear the iconic
            <span className="text-yellow-700 italic"> pagri</span>, a symbol of honor
            and pride.
          </p>
        </div>
        <div className="max-w-xs">
          <p className="text-sm text-brown-600">
            Special designs, such as the festive
            <span className="text-amber-700 font-bold"> safa</span>, add a touch of
            grandeur to Rajasthan's ethnic wear traditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RajasthaniElegance;
