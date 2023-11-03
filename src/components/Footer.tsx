import React from "react";

import { Image } from "astro:assets";
// icons
import logo from "../assets/icons/logo.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";

const Footer = () => {
  return (
    <section className="font-Quicksand_L bg-footer flex items-center justify-center py-8 w-screen  h-[280px]">
      <div className=" flex flex-col items-center justify-between gap-4">
        <div className="footer-logo w-32 h-12">
          <img src={logo.src} alt="" />
        </div>
        <div className="footer-text text-center">
          <div>
            <h2>Built by Reine_Dev</h2>
          </div>
          <div>
            <h2>Help</h2>
            <h2>Contact Us</h2>
            <h2>Privacy & Terms</h2>
          </div>
        </div>
        <div className="socials-img flex w-full items-center justify-between">
          <img src={facebook.src} alt="" />
          <img src={twitter.src} alt="" />
          <img src={instagram.src} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
