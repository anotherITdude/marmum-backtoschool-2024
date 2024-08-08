"use client";
import React from "react";
import hero_right from "./../public/hero_right.png";
import hero_en_left_top from "./../public/hero_en_left_top.png";
import hero_en_left_bot from "./../public/hero_en_left_bot.png";
// import hero_en from "./../public/hero_en.png";
// import hero_ar from "./../public/hero_ar.png";
// import mobile_en from "./../public/mobile_en.png";
// import mobile_ar from "./../public/mobile_ar.png";

import hero_left_ar from "./../public/hero_left_ar.png";
import Image from "next/image";
import { motion } from "framer-motion";

import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar"; 

const Hero = () => {
  const motionSettingsh2 = {
    initial: { opacity: 0, y: -15 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsImage = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 2 },
  };

  const motionSettingsleft2right = {
    initial: { opacity: 0, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const motionSettingsright2left = {
    initial: { opacity: 0, x: 15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };

  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  const how_to_title =
    locale === "/"
      ? "howtocard_title font-DIN-Bold"
      : "howtocard_title font-HelveticaNeueLTArabic-Roman pt-0";

  const how_to_card =
    locale === "/"
      ? "howtocard font-DIN-Bold"
      : "howtocard font-HelveticaNeueLTArabic-Roman";
  
  return (
    <div
      className="hero bg-webHeroBg
    bg
    
    md:bg-cover md:h-full
    flex flex-col overflow-hidden"
    >
      <Navbar />

      <div
        className="flex justify-center   md:flex-row md:justify-between items-center
        pl-4 pr-4 mb-4 mt-4 h-[600px] md:h-[540px] overflow-visible
        "
      >
        <div
          className={`
          flex flex-col md:flex-row h-full justify-center md:justify-evenly items-center w-full -gap-x-10
          ${locale === "/" ? "pr-0 md:pl-16 -mt-[5%]" : "pr-6 md:pr-16 -mt-[5%] "}
          `}
        >
         
          <motion.div {...motionSettingsleft2right} className="m-auto
          ">
          <Image
              placeholder="blur"
              src={hero_en_left_top}
              alt="Marvel"
              className={`max-w-[80%] md:max-w-[450px] m-auto`}
            />
            <Image
              placeholder="blur"
              src={hero_en_left_bot}
              alt="Marvel"
              className={`max-w-[80%] md:max-w-[430px] mt-8 m-auto`}
            />
            </motion.div>
          <motion.div {...motionSettingsright2left} className="right md:block
         
          ">
            <Image
              placeholder="blur"
              src={hero_right}
              alt="Marvel"
              className={`max-w-[100%] md:max-w-[550px] m-auto`}
            />
            </motion.div>
        </div>
       
      </div>
    </div>
  );
};

export default Hero;
