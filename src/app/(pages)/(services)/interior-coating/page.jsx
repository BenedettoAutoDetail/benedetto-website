import ServiceProcedureCard from "@/components/shared/ServiceProcedureCard";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const servicesList = [
  {
    title: "Complete Interior Coating Package",
    price: "750",
    procedure: {
      "Interior Includes": [
        "Full Interior Detailed",
        "Hot Steam Clean All Interior Surfaces",
        "Full Interior Vacuumed",
        "Shampoo Carpets and Floor Mats",
        "Dash Board Cleaning",
        "Middle Console Cleaning",
        "Cup Holder Cleaning",
        "Upholstery Cleaning",
        "Vinyl Cleaning",
        "Cloth Cleaning",
        "Plastics Cleaning",
        "Interior Coating: Coating All Interior Surfaces - Plastics, Vinyl, Leather, Trim. Super Hydrophobic Coating that Protects Leather, Vinyl, and Plastics against liquids and dirt stains without affecting the look, texture, or color of the coated surface.",
        "Fabric & Cloth Coating: Coating All Carpets, Floor Mats, Cloth. Provides protection that makes fabrics waterproof and easy to clean, preventing soaking, swelling, or rotting."
      ],
    },
    notes: ["(Protection lasts Up to 3 Years.)"],
  },
];

function InteriorCoating() {
  return (
    <div>
      {/* hero section  */}
      <div className="relative min-h-[60vh] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-[url('/images/Locate-a-Car-Detailing-Near-You.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1
            data-aos="fade-down"
            className="text-white mt-32 text-5xl font-bold"
          >
            Vehicle Interior Coating Service Near Ladera Ranch & Orange County,
            CA
          </h1>

          <div
            data-aos="fade-up"
            className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow"
          >
            <div className="flex gap-2 items-center">
              Home
              <FaLongArrowAltRight className="text-lg text-red-600" />
              Interior Coating
            </div>
          </div>
        </div>
      </div>

      {/* Auto Detailing  */}
      <div className="min-h-[70vh] grid grid-cols-[1fr_1fr] bg-white">
        {/* left side  */}
        <div className="w-full mt-4 p-10">
          <img
            src="/images/Ceramic-Pro-Leather.jpg"
            alt=""
            className="w-full h-full"
          />
        </div>

        {/* right side  */}
        <div className="bg-white text-black p-10">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-red-600">
            Interior Coating
          </span>

          <h1 data-aos="fade-down" className="mt-10 text-3xl font-extrabold">
            Best Vehicle Interior Coating in Town Near Orange County, California
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify"
          >
            LEATHER GUARD COATING is made out of nanotechnology and is a Super
            Hydro-Phobic Coating that Protects, Leather, Vinyl’s & Plastics
            against liquids and dirt stains. It does not affect the look,
            texture, or color of the coated surface. This Innovative Coating
            ensures all dirt & spillages can be safely removed from the surface
            of the Leather, Vinyl & Plastics. (Protection lasts up to 18
            Months.) Unlike other products that can be used to protect the
            interior of the Vehicle, (Such as LEXOLE or Leather Treatment) the
            Protection & Durability of these types of products will fade away
            right away. Interior Coating will ensure Maximum Protection &
            Durability. At Benedetto Auto Detail, we are committed to delivering
            the best Interior Coating California to our customers. Contact us
            today to learn more about our services and how we can protect your
            investment.
          </p>
        </div>
      </div>

      {/* services procedure  */}
      <div className="bg-red-500   p-10">
        <div className="text-white flex flex-col justify-center items-center m-5 mb-10">
          <h1 data-aos="fade-down" className="mt-10 text-5xl font-extrabold">
          Vehicle Interior Coating Cost
          </h1>
          <h1 data-aos="fade-down" className="mt-4 text-2xl font-extrabold">
            extra charge for large vehicle
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
          {servicesList.map((service) => (
            <ServiceProcedureCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default InteriorCoating;
