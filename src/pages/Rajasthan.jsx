

const RajasthanElegance = () => {
    return (
        <div className="font-poppins bg-[#f9f5ef] text-[#4a2b12] p-4">
            <h1 className="text-center text-[#a0522d] font-great-vibes text-2xl mb-4 border border-[#a0522d] p-2 rounded bg-[#fffaf0]">
                Delve Into the Crafts of Rajasthan
            </h1>

            {/* Craft Cards Section */}
            <div className="flex flex-wrap justify-center gap-4">
                <div className="card w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-[#fffaf0] rounded-lg shadow-md">
                    <img
                        src="../public/images/raj1.jpg"
                        alt="Leheriya"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4 text-center">
                        <h5 className="font-semibold">LEHERIYA</h5>
                        <div className="text-sm text-[#5a3e2b]">Among the many heritage crafts that define Rajasthan...</div>
                    </div>
                </div>

                <div className="card w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-[#fffaf0] rounded-lg shadow-md">
                    <img
                        src="../public/images/raj2.avif"
                        alt="Ajrakh"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4 text-center">
                        <h5 className="font-semibold">AJRAKH</h5>
                        <div className="text-sm text-[#5a3e2b]">Found in various regions around India...</div>
                    </div>
                </div>

                <div className="card w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-[#fffaf0] rounded-lg shadow-md">
                    <img
                        src="../public/images/raj3.jpg"
                        alt="Tie & Dye"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4 text-center">
                        <h5 className="font-semibold">TIE & DYE</h5>
                        <div className="text-sm text-[#5a3e2b]">The heartland of Rajasthani Textiles...</div>
                    </div>
                </div>

                <div className="card w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-[#fffaf0] rounded-lg shadow-md">
                    <img
                        src="../public/images/raj4.avif"
                        alt="Hand Block Printing"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4 text-center">
                        <h5 className="font-semibold">HAND BLOCK PRINTING</h5>
                        <div className="text-sm text-[#5a3e2b]">Since time immemorial, hand block printing...</div>
                    </div>
                </div>

                <div className="card w-full sm:w-1/2 md:w-1/4 lg:w-1/5 bg-[#fffaf0] rounded-lg shadow-md">
                    <img
                        src="../public/images/raj5.jpg"
                        alt="Bagru"
                        className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="p-4 text-center">
                        <h5 className="font-semibold">BAGRU</h5>
                        <div className="text-sm text-[#5a3e2b]">It is no secret that Indians were...</div>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <hr className="border-dashed border-[#a0522d] my-8" />

            {/* Traditional Rajasthani Wear */}
            <div className="flex flex-wrap justify-center gap-6">
                <div className="w-full sm:w-1/3 text-center">
                    <h3 className="font-great-vibes text-xl text-[#a0522d]">Traditional Rajasthani Wear</h3>
                </div>
                <div className="w-full sm:w-1/3">
                    <h4 className="font-semibold">Women</h4>
                    <p>
                        The traditional Rajasthani attire of women includes{" "}
                        <span className="text-[#8b0000] font-bold">chaniya choli</span> adorned with vibrant colors and
                        intricate mirror work. The <span className="text-[#8b0000] font-bold">dupatta</span>, or{" "}
                        <span className="text-[#8b0000] font-bold">odhni</span>, symbolizes modesty and serves as protection
                        from the sun.
                    </p>
                </div>
                <div className="w-full sm:w-1/3">
                    <h4 className="font-semibold">Men</h4>
                    <p>
                        Men&apos;s traditional wear features the <span className="text-[#8b0000] font-bold">dhoti</span> and{" "}
                        <span className="text-[#8b0000] font-bold">angrakha</span>, often paired with a majestic{" "}
                        <span className="text-[#daa520] italic">turban</span>. Comfort meets elegance with these airy and
                        regal garments.
                    </p>
                </div>
            </div>

            {/* Divider Line */}
            <hr className="border-dashed border-[#a0522d] my-8" />

            {/* Staple Jewellery & Accessories */}
            <div className="flex flex-wrap justify-center gap-6">
                <div className="w-full sm:w-1/3 text-center">
                    <h3 className="font-great-vibes text-xl text-[#a0522d]">Staple Jewellery & Accessories</h3>
                </div>
                <div className="w-full sm:w-1/3">
                    <p>
                        Women adorn themselves with{" "}
                        <span className="text-[#8b0000] font-bold">Jadau sets</span>,{" "}
                        <span className="text-[#8b0000] font-bold">chokers</span>, and{" "}
                        <span className="text-[#8b0000] font-bold">Rani Haars</span>, while men wear the iconic{" "}
                        <span className="text-[#daa520] italic">pagri</span>, a symbol of honor and pride.
                    </p>
                </div>
                <div className="w-full sm:w-1/3">
                    <p>
                        Special designs, such as the festive <span className="text-[#8b0000] font-bold">safa</span>, add a
                        touch of grandeur to Rajasthan&apos;s ethnic wear traditions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RajasthanElegance;
