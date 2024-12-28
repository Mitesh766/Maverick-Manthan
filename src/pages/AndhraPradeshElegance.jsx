
const AndhraPradeshElegance = () => {
  return (
    <div className="bg-[#f9f5ef] text-[#4a2b12] p-6 font-poppins">
      <h1 className="text-center text-2xl font-great-vibes text-[#a0522d] mb-8 py-2 border border-[#a0522d] rounded-lg bg-[#fffaf0]">
        Delve Into the Crafts of Andhra Pradesh
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {[
          {
            title: "BANJARA NEEDLE CRAFT",
            img: "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Main_Image_Banjara_bba3f6bd57.jpg",
            description: "Interviewed with skills...",
          },
          {
            title: "UPPADA PATTU",
            img: "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Main_Image_Uppada_7847ebcb4b.jpg",
            description: "Sounds of rustling silk...",
          },
          {
            title: "VENKATAGIRI SAREE",
            img: "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Main_Image_Venkatagiri_1a39043500.jpg",
            description: "A creation of woven wonders...",
          },
          {
            title: "Dharmavaram SAREE",
            img: "https://img.perniaspopupshop.com/store-locator-v2/uploads/DP_Main_Image_Mangal_db2a6bc23b.jpg",
            description: "Born in a small village...",
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
              <h5 className="text-lg font-medium text-[#5a3e2b]">
                {card.title}
              </h5>
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
            Traditional Andhra Clothing
          </h3>
        </div>
        <div className="max-w-md">
          <h4 className="text-md font-semibold">Women</h4>
          <p className="text-sm leading-relaxed">
            Women adorn themselves in sarees and half-half sarees. They also wear
            the ever timeless skirt, blouse, and dupatta, which in Andhra is
            known as the Langa Voni. During festivities and weddings, women are
            found wearing Dharmavaram sarees. The brides usually wear red with
            the borders royally gold plated with intricate work. Sarees vary
            from Uppada Silks to Mangalagiri and so many more.
          </p>
        </div>
        <div className="max-w-md">
          <h4 className="text-md font-semibold">Men</h4>
          <p className="text-sm leading-relaxed">
            The men wear a dhoti and kurta or a shirt and lungi. Mostly made up
            of cotton, men in the state still wear the lungis and dhotis daily.
            During festivities and marriages, the men usually deck up fancier
            fabrics such as silk, adorned with golden borders, but remain loyal
            to the silhouettes of a dhoti-kurta and lungi.
          </p>
        </div>
      </div>

      <hr className="border-dashed border-[#a0522d] my-8" />

      <div className="flex flex-wrap gap-8">
        <div className="max-w-md">
          <h3 className="text-lg font-great-vibes text-[#a0522d]">
            Textiles Of Andhra Pradesh
          </h3>
        </div>
        <div className="max-w-md">
          <p className="text-sm leading-relaxed">
            Andhra Pradesh clothing is an amalgamation of various types of woven
            sarees and dyeing techniques. Each saree gets its name from the
            region it is made in. Handlooms play an integral role in the making
            of each textile.
          </p>
          <p className="text-sm leading-relaxed mt-4">
            When thinking of Andhra, one's first thought goes to Kalamkari. A
            combination of hand-painted and block-printed, Kalamkari is divided
            into types as per where it is practised. Indian culture is famous
            for illustrating stories through intricate art and keeping the story
            alive for years to come. Such is the art of Kalamkari as well.
            Snippets from the epics of Mahabharata and Ramayana and other
            folklore are elaborated by hand on fabric.
          </p>
        </div>
        <div className="max-w-md">
          <p className="text-sm leading-relaxed">
            Handloom textiles also define the fabric story of Andhra Pradesh
            dresses. From daily loomed Venkatagiri to yards of royal Uppada.
            Mangalagiri and Ponduru Khadi are also popularized among other
            textiles.
          </p>
          <p className="text-sm leading-relaxed mt-4">
            Andhra Pradesh clothing is also home to distinctive styles of
            embroidery. The Banjara women are known for their craft of using
            shells, coins, etc., to embroider illustrious designs on fabric.
            Kamai Kadal is embroidery from native Andhra Pradesh. Woven Trellis
            stitch is made use of to create flowers and leaves, and other
            stitches are done on fabric to complete the embroidery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AndhraPradeshElegance;
