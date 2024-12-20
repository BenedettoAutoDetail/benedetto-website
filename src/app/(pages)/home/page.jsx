import Link from "next/link";
import React from "react";
import AboutUs from "../about-us/page";
import Services from "../(services)/services/page";
import Gallery from "../gallery/page";
import { TestimonialCarousel } from "./TestimonialCarousel";
import TypeWriter from "@/components/shared/TypeWriter";
import MediaPlayer from "@/components/shared/MediaPlayer";

const typewriterStrings = [
  "WELCOME TO BENEDETTO AUTO DETAIL - Best Car detailing Service in Town!",
  "WELCOME TO BENEDETTO AUTO DETAIL - Auto Detailing",
  "WELCOME TO BENEDETTO AUTO DETAIL - Ceramic Coating",
  "WELCOME TO BENEDETTO AUTO DETAIL - Interior Coating",
  "WELCOME TO BENEDETTO AUTO DETAIL - Paint Protection Film",
];

function Home() {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover overflow-x-hidden"
      style={{
        backgroundImage: `url(/images/Ceramic_Coating_Application_SEO.jpg)`,
      }}
    >
      {/* hero section  */}
      <div className="relative min-h-screen bg-center bg-no-repeat bg-cover bg-black ">
        <div className="absolute inset-0 bg-[url('/images/auto-detailing-scaled-1.png')] bg-center bg-no-repeat bg-cover opacity-[0.26] transition-all duration-300"></div>
        <div className="relative z-10 text-center md:text-start">
          <div className="w-full h-full flex flex-col md:flex-row pt-32 px-5 ">
            <div className="md:grow-3 order-2 md:order-1 md:ps-10 p-2">
              <TypeWriter
                strings={typewriterStrings}
                delay={2500}
                speed={5}
                deletionSpeed={40}
                className="inline-block pe-3 transition-all text-white mt-20 md:text-2xl uppercase border-b-4 border-red-600"
              />

              <h1
                data-aos="fade-down"
                className="text-white mt-10 text-2xl md:text-5xl font-extrabold"
              >
                Ladera Ranch Based Car Detailing Experts Serving All Across
                Orange County, California
              </h1>

              <p
                data-aos="fade-up"
                className="text-white mt-10 md:mt-1 text-justify md:text-start md:text-lg font-semibold text-opacity-85 font_barlow"
              >
                Benedetto Auto Detail has been serving the market with more than
                a decade through premium coating and auto detailing services in
                town Orange County. If you are in or Near Orange County,
                California and looking for a auto detailing or paint protection
                service-provider then look no further, Because Benedetto has the
                experts of the field with years of professional knowhow. We are
                located in Ladera Ranch, CA and serving all across the Orange
                County.
              </p>

              <div data-aos="fade-right" className="mt-10">
                <Link
                  href={"/booking"}
                  className="btn bg-red-600 text-white text-xl w-40 border-0 hover:bg-red-600 hover:scale-110"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div
              className="md:grow-1 w-full h-full order-1 md:order-2 items-center bg-red-600 rounded-full mt-10 md:mt-20"
              data-aos="fade-right"
            >

              <MediaPlayer src={'/videos/Automatic Car Wash.json'} />
            </div>
          </div>
        </div>
      </div>

      <AboutUs showHeroSection={false} />
      <Services showHeroSection={false} limit={3} />
      <Gallery showHeroSection={false} />

      <div className="bg-white pb-10">
        <div className="bg-white flex flex-col justify-center items-center text-black p-10">
          <span className="inline-block mt-20 text-2xl uppercase border-b-4 border-red-600">
            Testimonials
          </span>

          <h1 data-aos="fade-down" className="mt-10 text-3xl font-extrabold">
            What Clients Say About Our Car detailing Service?
          </h1>
        </div>

        <div data-aos="fade-up" className="w-[85vw] m-auto">
          <TestimonialCarousel />
        </div>
      </div>

      <div className="min-h-[80vh] bg-black/70 text-white flex flex-col justify-center items-center gap-y-5 px-[20%]">
        <h1
          data-aos="fade-right"
          className="mt-10 text-center text-3xl font-extrabold"
        >
          Thank You For Considering Benedetto Auto Detail For Your Car Care
          Needs
        </h1>

        <h1 data-aos="fade-left" className="mt-4 text-center text-lg ">
          We welcome any questions or feedback you may have about our services.
          Please feel free to reach out to us via phone, email or in person at
          our location.
        </h1>

        <Link
          href={"/contact-us"}
          data-aos="fade-up"
          className="btn mb-5 border-0 bg-red-600 text-white hover:bg-red-600 hover:scale-110"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Home;
