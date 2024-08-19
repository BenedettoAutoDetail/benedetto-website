import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const galleryImages = [
  "/images/10bea6_02ccb98b176c4e05b03aee7c30187710_mv2.webp",
  "/images/shutterstock_1447469384-1-1080x608-1.jpg",
  "/images/IMG_20170604_003947.webp",
  "/images/bl_01_576d8097-08a2-4503-b06b-a499c5e261f0.jpg",
  "/images/Ceramic-Pro-Leather.jpg",
  "/images/Locate-a-Car-Detailing-Near-You.jpg",
];

function Gallery({ showHeroSection = true }) {
  return (
    <div>
      {/* hero section  */}
      {showHeroSection && (
        <div className="relative min-h-[60vh] bg-black bg-center bg-no-repeat bg-cover">
          <div className="absolute inset-0 bg-[url('/images/truck-driver-pointing-the-issue-to-his-mechanic.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
          <div className="relative z-10 p-10 w-full text-center">
            <h1
              data-aos="fade-down"
              className="text-white mt-32 text-5xl font-bold"
            >
              Gallery
            </h1>

            <div
              data-aos="fade-up"
              className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow"
            >
              <div className="flex gap-2 items-center">
                Home
                <FaLongArrowAltRight className="text-lg text-red-600" />
                Gallery
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white text-black/90 flex flex-col items-center gap-2 pb-5">
        <span className="inline-block mt-20 text-2xl uppercase text-red-600">
          Gallery
        </span>

        <p
          data-aos="fade-up"
          className="text-4xl font-extrabold text-md text-opacity-85 font_barlow text-center md:w-[35%]"
        >
          Explore Our Gallery
        </p>
      </div>

      <div className="bg-white grid grid-cols-3 gap-2 p-20">
        {galleryImages.map((image, index) => (
          <div key={index} className="w-full relative group">
            <img src={image} alt="" className="w-full h-full" />
            <div className="absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
