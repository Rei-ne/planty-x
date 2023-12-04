import React from "react";

import { Image } from "astro:assets";
// icons
import logo from "../assets/icons/logo.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";

const Footer = () => {
  return (
    <>
      <div className="w-full lg:flex px-8">
        <div className="flex items-center justify-center w-4/5 text-center mx-auto py-8 lg:w-1/2 lg:text-left">
          <h2 className="font-Quicksand-B text-xl lg:text-3xl">
            Stay updated with special offers, plant-parenting tips, and more.
          </h2>
        </div>
        <div className="py-2 lg:bg-white bg-footer flex items-center justify-center relative w-full lg:w-1/2">
          <div className="relative w-full lg:mx-5">
            <input
              id="email"
              type="text"
              placeholder="Your email"
              className="block w-full px-3 py-2 text-black border-b-2 lg:bg-white bg-footer focus:outline-none focus:border-black font-sm"
            />
            <span className="absolute block w-full h-1 bottom-0 left-0 transition-all duration-300 ease-in-out"></span>
          </div>

          <button className="xs:text-xs sm:text-sm bg-black w-[100px] lg:w-[120px] text-white py-1 px-4 md:my-4 lg:px-8 rounded-full font-Quicksand_L absolute right-4 mb-1">
            Subscribe
          </button>
        </div>
      </div>
      <section className="font-Quicksand_L bg-footer flex items-center justify-center py-8 w-full  h-[320px]">
        <div className=" flex flex-col items-center justify-between gap-4">
          <div className="footer-logo w-28 h-12 py-2">
            <a href="#">
              {" "}
              <img src={logo.src} alt="planty'x logo" />
            </a>
          </div>
          <div className="footer-text text-center gap-5">
            <div>
              <h2 className="pb-4">
                Built by{" "}
                <a
                  className="italic font-bold"
                  href="https://github.com/Rei-ne/"
                >
                  Reine_Dev
                </a>
              </h2>
            </div>
            <div>
              <h2 className="py-4">Help</h2>
              <h2 className="py-4">Contact Us</h2>
              <h2 className="py-4">Privacy & Terms</h2>
            </div>
          </div>
          <div className="socials-img flex w-full items-center justify-between">
            <img src={facebook.src} alt="" />
            <img src={twitter.src} alt="" />
            <img src={instagram.src} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
