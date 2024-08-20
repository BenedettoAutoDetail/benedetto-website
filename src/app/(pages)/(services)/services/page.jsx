import { HeroSection, ServiceCard } from "../../../../components/shared";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const cardsdetail = [
  {
    image: "/images/shutterstock_1792547533_1200x.webp",
    title: "Auto Detailing",
    description:
      "Welcome to Benedetto Auto Detail, your one-stop solution for premium auto detailing services. We are a team of experienced...",
    url: "/auto-detailing",
  },
  {
    image: "/images/Ceramic_Coating_Application_SEO.jpg",
    title: "Ceramic Coating",
    description:
      "CRYSTAL SERUM CERAMIC COATING provides a Supreme Hard Protection, Scratch & Swirls Resistant. This Coating Provides...",
    url: "/ceramic-coating",
  },
  {
    image: "/images/Ceramic-Pro-Leather.jpg",
    title: "Interior Coating",
    description:
      "LEATHER GUARD COATING is made out of nanotechnology and is a Super Hydro-Phobic Coating that Protects, Leather...",
    url: "/interior-coating",
  },
  {
    image: "/images/bl_01_576d8097-08a2-4503-b06b-a499c5e261f0.jpg",
    title: "Paint Protection Film",
    description:
      "Benedetto Auto Detail understands that your vehicle is an investment that you want to protect. That's why we offer the best...",
    url: "/paint-protection-film",
  },
];

function Services({ showHeroSection = true, limit}) {

  const cardsToShow = limit ? cardsdetail.slice(0, limit) : cardsdetail;

  return (
    <div>
      {/* hero section  */}
      {showHeroSection && (
        <HeroSection
          bgImage={
            "/images/truck-driver-pointing-the-issue-to-his-mechanic.jpg"
          }
          title={"Services"}
          subtitle={"Services"}
        />
      )}

      {/* service cards  */}
      {showHeroSection ? (
        <div className="bg-white text-black/90 flex flex-col items-center gap-2 pb-5">
          <span className="inline-block mt-20 text-2xl uppercase text-red-600">
            Our Services
          </span>

          <p
            data-aos="fade-up"
            className="text-3xl md:text-4xl font-extrabold text-md text-opacity-85 font_barlow text-center md:w-[35%]"
          >
            Explore Our Services
          </p>
        </div>
      ) : (
        <div className="bg-white grid grid-cols-1 md:grid-cols-[3fr_1fr]">
          <div className="bg-white text-black/90 flex flex-col items-start pl-10 gap-2 pb-5">
            <span className="inline-block mt-14 text-2xl uppercase text-red-600">
              Our Services
            </span>

            <p
              data-aos="fade-up"
              className="text-3xl md:text-4xl font-extrabold text-md text-opacity-85 font_barlow text-center md:w-[35%]"
            >
              Explore Our Services
            </p>
          </div>

          <div className="flex justify-end items-center pr-10">
            <Link
              href={"/services"}
              className="btn bg-red-600 border-0 text-white hover:bg-red-600 hover:scale-110"
            >
              All Services
            </Link>
          </div>
        </div>
      )}

      <div className="bg-white grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4 p-10">
        {cardsToShow.map(({ image, title, description, url }) => (
          <ServiceCard
            key={title}
            image={image}
            title={title}
            description={description}
            url={url}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
