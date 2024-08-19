import ServiceProcedureCard from "@/components/shared/ServiceProcedureCard";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const servicesList = [
  {
    title: "Ceramic Coating Services Lvl 1",
    price: "900",
    procedure: {
      "Exterior Includes": [
        "Paint Correction",
        "Clay Bar",
        "Machine Polish On The Paint",
        "Layer of Ceramic Coating, Applied On All Paint",
      ],
      "Interior Includes": [
        "Full Interior Vacuumed",
        "Shampoo Floor Mats",
        "Dash Board Cleaning",
        "Middle Console Cleaning",
        "Cup Holder Cleaning"
      ],
    },
    notes: [
      "(Protection lasts Up to 3 Years.)",
    ],
  },

  {
    title: "Ceramic Coating Services Lvl 2",
    price: "1200",
    procedure: {
      "Exterior Includes": [
        "Paint Correction",
        "Clay Bar",
        "Machine Polish On The Paint",
        "Ceramic Coating From G-TECHNIQ – Smart Surface Science",
        "Ceramic Coating – Applied On All Paint",
        "Coating – Applied On All Wheels",
        "Coating – Applied On Windshields Front & Back & All Windows"
      ],
      "Interior Includes": [
        "Full Interior Vacuumed",
        "Shampoo Floor Mats",
        "Dash Board Cleaning",
        "Middle Console Cleaning",
        "Cup Holder Cleaning"
      ],
    },
    notes: [
      "(Protection lasts Up to 3 Years.)",
    ],
  },

  {
    title: "Ceramic Coating Services Lvl 3",
    price: "1500",
    procedure: {
      "Exterior Includes": [
        "Clay Bar",
        "Machine Polish On The Paint",
        "2 Layers of Coating From G-TECHNIQ – Smart Surface Science",
        "2 Layers of Ceramic Coating Applied On Paint",
        "2 Layers of Coating Applied On All Wheels",
        "2 Layers of Coating Applied On Windshield Front & Back & All Windows",
        "2 Layers of Coating Applied On Exterior Plastics"
      ],
      "Interior Includes": [
        "Full Interior Vacuumed",
        "Shampoo Floor Mats",
        "Dash Board Cleaning",
        "Middle Console Cleaning",
        "Cup Holder Cleaning"
      ],
    },
    notes: [
      "(Protection lasts Up to 3 Years.)",
    ],
  },

];

function CeramicCoating() {
  return (
    <div>
      {/* hero section  */}
      <div className="relative min-h-[60vh] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-[url('/images/10bea6_143823941f044c608861fb59b181b31d_mv2.jpg')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 p-10 w-full text-center">
          <h1
            data-aos="fade-down"
            className="text-white mt-32 text-5xl font-bold"
          >
            Ladera Ranch Based Ceramic Coating Experts Serving All Across Orange
            County, CA
          </h1>

          <div
            data-aos="fade-up"
            className="flex justify-center text-white mt-1 text-md font_barlow font-semibold text-opacity-85 font_barlow"
          >
            <div className="flex gap-2 items-center">
              Home
              <FaLongArrowAltRight className="text-lg text-red-600" />
              Ceramic Coating
            </div>
          </div>
        </div>
      </div>

      {/* Auto Detailing  */}
      <div className="min-h-[70vh] grid grid-cols-[1fr_1fr] bg-white">
        {/* left side  */}
        <div className="w-full mt-4 p-10">
          <img
            src="/images/IMG_20170604_003947.webp"
            alt=""
            className="w-full h-full"
          />
        </div>

        {/* right side  */}
        <div className="bg-white text-black p-10">
          <span className="inline-block mt-5 text-2xl uppercase border-b-4 border-red-600">
            Ceramic Coating
          </span>

          <h1 data-aos="fade-down" className="mt-10 text-3xl font-extrabold">
            Get Best Ceramic Coating in Town Near Orange County, California
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify"
          >
            CRYSTAL SERUM CERAMIC COATING provides a Supreme Hard Protection,
            Scratch & Swirls Resistant. This Coating Provides Protection
            Against: Tree Sap, Tar, & Hard Water Spots. Crystal Serum Ultra is a
            true 9H Ceramic Protection when it comes to adding Gloss, Resisting
            Swirls, Contaminant & Dirt Repellency, Technique Crystal Serum Ultra
            is the Pinnacle in Paint Protection. By applying CRYSTAL SERUM
            COATING on your vehicle, this will increased the thickness on the
            Coating and it will provide a Long-Lasting protection on the Paint.
            Because of the Coating Unique Properties, the Paint will reach an
            Unparalleled High-Gloss, Depth & Sharp Reflection. Crystal Serum
            Ultra must spend a minimum of 1 day to dry & cure! The Vehicle can’t
            get wet. After 10 days the coating is fully cured and regular washes
            can commence.
          </p>
        </div>
      </div>

      {/* services procedure  */}
      <div className="bg-red-500   p-10">
        
        <div className="text-white flex flex-col justify-center items-center m-5 mb-10">
        <h1 data-aos="fade-down" className="mt-10 text-5xl font-extrabold">
          Best Prices for Ceramic Coating
        </h1>
        <h1 data-aos="fade-down" className="mt-4 text-2xl font-extrabold">
          extra charge for large vehicle
        </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4">
          {servicesList.map((service) => (
            <ServiceProcedureCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CeramicCoating;
