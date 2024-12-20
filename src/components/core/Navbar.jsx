"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const servicesMenu = [
  { title: "Auto Detailing", url: "/auto-detailing" },
  { title: "Ceramic Coating", url: "/ceramic-coating" },
  { title: "Interior Coating", url: "/interior-coating" },
  { title: "Paint Protection Film", url: "/paint-protection-film" },
];

function Navbar() {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);

  useEffect(() => {
    // Function to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !servicesButtonRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar bg-base-200 font_barlow p-10 flex justify-between max-h-[4vh] max-w-[80vw] rounded-3xl fixed top-1 left-0 right-0 mx-auto z-50 mt-5">
      {/* Navbar start */}
      <div className="navbar-start">
        {/* Burger icon on the small screens */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm bg-base-200 dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow text-red-500 z-20"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li>
              <div className="dropdown">
                <button
                  ref={servicesButtonRef}
                  onClick={() => setServicesOpen(!isServicesOpen)}
                  className="flex justify-between w-full"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-600 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isServicesOpen && (
                  <ul
                    ref={dropdownRef}
                    className="p-2 mt-2 bg-base-200 rounded-box shadow z-40 absolute top-4 left-[-.6rem]"
                  >
                    {servicesMenu.map((service) => (
                      <li key={service.title}>
                        <Link href={service.url}>{service.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link href={"/gallery"}>Gallery</Link>
            </li>
            <li>
              <Link href={"/contact-us"}>Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex-shrink-0 p-2 hidden lg:block">
          <Link href={"/"}>
            <img
              src="/images/Benedetto-Auto-Detail-Logo.png" // Update with your logo path
              alt="Company Logo"
              className="ms-4 md:ms-0 h-8 md:h-12 w-20 md:w-32" // Set height and width
            />
          </Link>
        </div>
      </div>

      <div className="flex-shrink-0 p-2 block lg:hidden">
        <Link href={"/"}>
          <img
            src="/images/Benedetto-Auto-Detail-Logo.png" // Update with your logo path
            alt="Company Logo"
            className="ms-4 md:ms-0 h-8 md:h-12 w-20 md:w-32" // Set height and width
          />
        </Link>
      </div>

      {/* Navbar middle part */}
      <div className="navbar-center hidden lg:flex font-semibold">
        <ul className="menu menu-horizontal px-1 text-red-500">
          <li className="m-1">
            <Link href={"/"} className="me-1 w-full">
              Home
            </Link>
          </li>
          <li className="m-1">
            <Link href={"/about-us"} className="w-full">
              About Us
            </Link>
          </li>
          <li className="m-1 relative group">
            <Link href={"/services"} className="px-20 w-full">
              Services
            </Link>
            <ul className="absolute bg-base-200 border-0 top-7 left-0 p-2 w-[15rem] bg-base-100 rounded-box shadow mt-2 hidden group-hover:block z-20">
              {servicesMenu.map((service) => (
                <li key={service.title}>
                  <Link href={service.url} className="w-full">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="m-1">
            <Link href={"/gallery"} className="w-full">
              Gallery
            </Link>
          </li>
          <li className="m-1">
            <Link href={"/contact-us"} className="w-full">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar end */}
      <div className="navbar-end hidden lg:flex lg:justify-end">
        <Link
          href={"/booking"}
          className="btn bg-red-600 text-white hover:bg-red-600 hover:scale-110"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
