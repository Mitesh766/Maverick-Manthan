import React from 'react';

const MaharashtrianElegance = () => {
  return (
    <div className="bg-[#f9f5ef] text-[#4a2b12] p-6 font-poppins">
      <h1 className="text-center text-2xl font-great-vibes text-[#a0522d] mb-8 py-2 border border-[#a0522d] rounded-lg bg-[#fffaf0]">
        Delve Into the Crafts of Maharashtra
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            title: 'WARLI',
            img: 'https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_SI_Maharashtra_14c1300746.jpg',
            description: 'White figurines...',
          },
          {
            title: 'PAITHANI SAREE',
            img: 'https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_MI_Paithani_a760b2bb27.jpg',
            description: 'Healing from th...',
          },
          {
            title: 'MASHRU AND HIMROO',
            img: 'https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_MI_Mashru_b681cc52ed.jpg',
            description: 'The costumes of Punjab reflect the...',
          },
          {
            title: 'KOLHAPURI CHAPPALS',
            img: 'https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Main_Image_Kolhapuri_4ac802aba8.jpg',
            description: 'The ancient city...',
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-[#fffaf0] rounded-lg shadow-md overflow-hidden max-w-xs"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-36 object-cover"
            />
            <div className="text-center py-4">
              <h5 className="text-lg font-medium text-[#5a3e2b]">{card.title}</h5>
            </div>
            <div className="bg-[#f7ecd5] p-3 text-sm text-[#6c757d]">
              {card.description}
            </div>
          </div>
        ))}
      </div>

      <hr className="border-dashed border-[#a0522d] my-8" />

      <div className="flex flex-wrap gap-8">
        <div className="max-w-md">
          <h3 className="text-lg font-great-vibes text-[#a0522d]">
            Traditional Maharashtra Clothing
          </h3>
        </div>
        <div className="max-w-md">
          <h4 className="text-md font-semibold">Women</h4>
          <p className="text-sm leading-relaxed">
            The women wear a 9-yard long saree called 'lugade' or 'nauvari saadi'
            with a 'choli' or blouse on the top. 'Nauvari' or the 9-yard long saree
            are lengths of vibrant cloth representing years of Maharashtrian glory
            and ethnicity...
          </p>
        </div>
        <div className="max-w-md">
          <h4 className="text-md font-semibold">Men</h4>
          <p className="text-sm leading-relaxed">
            Maharashtrian men traditionally wear a 'dhoti', wrapped around the waist
            and legs. They still prefer clothing that makes it easier for them to
            move around and optimise performance on the field.
          </p>
        </div>
      </div>

      <hr className="border-dashed border-[#a0522d] my-8" />

      <div className="flex flex-wrap gap-8">
        <div className="max-w-md">
          <h3 className="text-lg font-great-vibes text-[#a0522d]">
            Staple Jewellery & Accessories
          </h3>
        </div>
        <div className="max-w-md">
          <p className="text-sm leading-relaxed">
            Kaleeras are the traditional and native jewellery of Punjab adorned by
            brides. The pair of bangles are accentuated with opulent danglers. The
            unique design of Kaleeras signifies the blessing of prosperity...
          </p>
        </div>
        <div className="max-w-md">
          <p className="text-sm leading-relaxed">
            The cultural accessory of women includes the parandi—decorative
            extensions for long braids that enhance the length of their hair and pops
            of colour. It is traditionally gifted to brides by their grooms...
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaharashtrianElegance;
