

const PunjabCrafts = () => {
  return (
    <div className="bg-[#f9f5ef] text-[#4a2b12] p-4 font-[Poppins, sans-serif]">
      <h1 className="text-center text-[#a0522d] text-2xl border border-[#a0522d] rounded-md bg-[#fffaf0] py-2 px-4 my-6 font-[Great Vibes, cursive]">
        Delve Into the Crafts of Punjab
      </h1>

      <div className="flex flex-wrap justify-center">
        {[
          {
            img: "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Main_Image_Phulkari_eaab16febf.jpg",
            title: "PHULKARI",
            desc: "The mention of phulkaris can be ...",
          },
          {
            img: "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Main_Image_Jutti_ff57b78793.jpg",
            title: "JUTTIS",
            desc: "Punjabi Women Are worn by women",
          },
          {
            img: "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Main_Image_Ghagra_Choli_fbdc13bbbb.jpg",
            title: "GHAGRA CHOLI",
            desc: "The costumes of Punjab reflect the ...",
          },
          {
            img: "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Main_Image_Salwar_073e0e36be.jpg",
            title: "SALWAAR KAMEEZ",
            desc: "Salwaar kameez is a classic ensemble..",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#fffaf0] rounded-lg shadow-md overflow-hidden m-4 w-64"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-40 w-full object-cover"
            />
            <div className="text-center p-2">
              <h5 className="text-[#5a3e2b] font-medium text-lg">
                {item.title}
              </h5>
            </div>
            <div className="bg-[#f7ecd5] text-sm text-[#5a3e2b] p-2">
              {item.desc}
            </div>
          </div>
        ))}
      </div>

      <hr className="border-dashed border-[#a0522d] my-8" />

      <div className="flex flex-wrap justify-around items-start">
        <div className="max-w-xs m-4">
          <h3 className="text-[#a0522d] text-xl font-bold">Traditional Punjabi Clothing</h3>
        </div>

        <div className="max-w-xs m-4">
          <h4 className="text-[#5a3e2b] font-medium text-lg">Women</h4>
          <p className="text-sm leading-6">
            A significant part of the oldest heritage of India, the dresses of
            Punjab have stayed true to their roots while evolving with fashion.
            From ghagra to salwar suit and Patiala salwar, the traditional garb
            of Punjabi women is very popular all over India. Traditionally, men
            have been wearing the Punjabi kurta or Tehmat in Muktsari style.
            They have now updated the classic wear with kurta and pyjama.
          </p>
        </div>

        <div className="max-w-xs m-4">
          <h4 className="text-[#5a3e2b] font-medium text-lg">Men</h4>
          <p className="text-sm leading-6">
            The ancient garb of men of Punjab was panelled and flared Jama kurta
            during the Mughal era. The opulent outfit was accentuated with a
            turban which is the signature headgear of a Punjabi community to
            date. In modern times, the ethnic signature outfit of the Sikh men
            is the kurta and sherwani that is often paired with a churidar or
            dhoti or straight pants. Pleated and cowl draped pants known as
            Patiala salwar are the staple bottom wear of both men and women.
          </p>
        </div>
      </div>

      <hr className="border-dashed border-[#a0522d] my-8" />

      <div className="flex flex-wrap justify-around items-start">
        <div className="max-w-xs m-4">
          <h3 className="text-[#a0522d] text-xl font-bold">
            Staple Jewellery & Accessories
          </h3>
        </div>

        <div className="max-w-xs m-4">
          <p className="text-sm leading-6">
            Kaleeras are the traditional and native jewellery of Punjab adorned
            by brides. The pair of bangles are accentuated with opulent
            danglers. The unique design of Kaleeras signifies the blessing of
            prosperity and wealth that the family wishes for their bride-to-be
            daughter.
          </p>
        </div>

        <div className="max-w-xs m-4">
          <p className="text-sm leading-6">
            The cultural accessory of women includes the parandi—decorative
            extensions for long braids that enhance the length of their hair
            and pops of colour. It is traditionally gifted to brides by their
            grooms. Another statement style of both Punjab men and women are
            mojris and juttis. The handcrafted pair of flats are a part of
            festive as well as staple wear. The fashion landscape of Punjab
            reflects a captivating blend of its indigenous styles and influences
            from Rajasthan, infusing vibrant fabrics, intricate embroideries,
            and regal motifs into their creations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PunjabCrafts;
