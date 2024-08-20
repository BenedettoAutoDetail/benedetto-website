import { AboutUsCard, HeroSection } from "../../../components/shared";
import React from "react";

const cardsDetail = [
  {
    title: "Full Insurance and Secure Care",
    description:
      "We handle your valued cars with great care and expertise. Choosing us comes with total peace.",
  },

  {
    title: "Satisfaction Guaranteed",
    description:
      "We strive to serve you better every day. All we deliver is your total satisfaction and trust in our services.",
  },
];

function AboutUs({ showHeroSection = true }) {
  return (
    <div>
      {/* hero section  */}
      {showHeroSection && (
        <HeroSection
          bgImage={"/images/Ceramic_Coating_Application_SEO.jpg"}
          title={"About Us"}
          subtitle={"About Us"}
        />
      )}

      {/* about us  */}
      <div className="min-h-[70vh] grid grid-cols-1 md:grid-cols-[1fr_1fr] bg-white">
        {/* left side  */}
        <div className="p-10">
          <div className="grid grid-cols-[1fr_1fr] gap-4">
            <img
              src="/images/is-ceramic-coating-better-than-applying-car-wax-6144564716152.jpg"
              alt=""
              className="rounded-lg shadow-xl"
            />
            <img
              src="/images/Locate-a-Car-Detailing-Near-You.jpg"
              alt=""
              className="h-full rounded-lg shadow-xl"
            />
          </div>
          <div className="w-full mt-4">
            <img
              src="/images/ceramic-coating-for-cars.jpg"
              alt=""
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* right side  */}
        <div className="bg-white text-black p-10">
          <span className="inline-block mt-20 text-2xl uppercase border-b-4 border-red-600">
            About Us
          </span>

          <h1 data-aos="fade-down" className="mt-10 text-3xl font-extrabold">
            We Are A Leading Name Of Auto Detailing California
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 font_barlow text-justify"
          >
            With 15 years of satisfied clients behind us, Benedetto Auto
            Detailing a leading name in car detailing and precision paint
            correction and protection. Located in Ladera Ranch, California, our
            boutique workshop is fitted with the very latest in-car detailing
            and paint correction technology, allowing us to deliver impressive
            results we’re confident you won’t get elsewhere. Talk to any of our
            team members and you’ll find people who are passionate about cars
            and their work. We’re dedicated to your satisfaction, looking to
            build lasting relationships with a passion for vehicles at the
            center. Discuss your needs with us today.
          </p>
        </div>
      </div>

      {/* why choose we  */}
      <div className="min-h-[90vh] grid grid-cols-1 md:grid-cols-[1fr_1fr] bg-red-500">
        {/* left side  */}

        <div className="text-white p-10">
          <span className="inline-block mt-20 text-2xl uppercase border-b-4 border-black">
            Why Choose Us
          </span>

          <h1 data-aos="fade-down" className="mt-10 text-3xl font-extrabold">
            We Revitalize Your Ride Through Car Detailing California
          </h1>

          <p
            data-aos="fade-up"
            className="mt-2 text-lg text-opacity-85 text-justify font_barlow"
          >
            Benedetto Auto Detail comes with many options when it comes to auto
            detailing services. That’s why we go above and beyond to provide our
            clients with a truly exceptional experience that sets us apart from
            the competition. With our attention to detail, commitment to
            quality, and dedication to customer satisfaction, you can trust that
            your vehicle is in the best hands with us.
          </p>

          <div className="flex flex-col mt-5 gap-y-3">
            {cardsDetail.map(({ title, description }) => (
              <AboutUsCard
                key={title}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>

        {/* right side  */}
        <div className="p-10">
          <img
            src="/images/is-ceramic-coating-better-than-applying-car-wax-6144564716152.jpg"
            alt=""
            className="w-full h-full rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
