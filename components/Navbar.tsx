"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo_eng from "../public/logo.png";
import logo_ar from "../public/logo.png";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import en from "../locales/en";
import ar from "../locales/ar";

const Navbar = () => {
  const locale = usePathname();
  const locales = ["en", "ar"];
  const finalLogo = locale === "/ar" ? logo_ar : logo_eng;
  const t = locale === "/" ? en : ar;
  return (
    <motion.nav
      className={`flex justify-between gap-x-4  -mb-00 z-50 relative
  ${locale === "/" ? " pl-6 md:pl-16" : "pr-6 md:pr-16"}
  `}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="font-neosans-medium uppercase flex justify-start items-center gap-[3px]"
      >
        <div
          className={`${locale === "/ar" ? "md:pr-4 mt-10" : "md:pl-4 mt-10"}`}
        >
          {locales.map((lang, index) => (
            <React.Fragment key={lang}>
              <Link
                href={lang === "en" ? "/" : `/${lang}`}
                className={`${
                  locale === `/${lang}` || (locale === "/" && lang === "en")
                    ? "text-webWhite cursor-not-allowed underline underline-offset-4 font-Circular-Bold "
                    : "text-webLangColor cursor-pointer font-Circular-Bold  "
                }`}
              >
                {lang === "ar" ? "Ar" : "En"}
              </Link>

              {index !== locales.length - 1 && (
                <span className="font-Circular-Bold pr-[4px] pl-[4px] text-md ">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
      
      <motion.div className={`pt-4 ${locale === "/" ? "pr-4 md:pr-14" : "pl-4 md:pl-14"} `}>
        <Link href="/">
          <Image
            quality={100}
            placeholder="empty"
            src={finalLogo}
            alt="logo"
            className={`w-[150px] pt-4 md:w-[200px] cursor-pointer  
          ${locale === "/" ? " " : ""} `}
          />
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
