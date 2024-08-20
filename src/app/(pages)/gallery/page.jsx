import { HeroSection } from "@/components/shared";
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
        <HeroSection
          bgImage={
            "/images/truck-driver-pointing-the-issue-to-his-mechanic.jpg"
          }
          title={"Gallery"}
          subtitle={"Gallery"}
        />
      )}

      <div className="bg-white text-black/90 flex flex-col items-center gap-2 pb-5">
        <span className="inline-block mt-20 text-2xl uppercase text-red-600">
          Gallery
        </span>

        <p className="text-4xl font-extrabold text-md text-opacity-85 font_barlow text-center md:w-[35%]">
          Explore Our Gallery
        </p>
      </div>

      <div className="bg-white grid grid-cols-1 md:grid-cols-3 gap-2 p-5 md:p-20">
        {galleryImages.map((image, index) => (
          <div key={index} className="w-full relative group" data-aos="fade-up">
            <img src={image} alt="" className="w-full h-full rounded-lg" />
            <div className="absolute inset-0 bg-red-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
