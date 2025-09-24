"use client";

import { motion } from "motion/react";

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="section-wrapper">
      <div className="flex flex-col justify-center items-center h-full gap-7">
        <Image
          src={"/images/logos/tipidicuts-logo.png"}
          alt="Tipidicuts Barber Logo"
          sizes="100vw"
          width={500}
          height={500}
          quality={100}
          className="md:w-[30%] w-[80%] h-auto brightness-110"
        />
        <div className="flex flex-col gap-1">
          <motion.h1
            initial={{
              opacity: "0%",
              scaleY: "0%",
            }}
            animate={{
              opacity: "100%",
              scaleY: "100%",
            }}
            transition={{
              delay: 1,
            }}
            className="font-bold text-strong font-culot text-center text-4xl uppercase"
          >
            Affordable, quality cuts
          </motion.h1>
          <motion.span
            initial={{
              opacity: "0%",
              scaleX: "0%",
            }}
            animate={{
              opacity: "100%",
              scaleX: "100%",
            }}
            transition={{
              delay: 1,
            }}
            className="text-strong font-culot text-center uppercase tracking-wider"
          >
            in the heart of <span className="text-blu">Orion,</span>
            <span className="text-rid"> Bataan.</span>
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
