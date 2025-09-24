"use client";

import { motion } from "motion/react";

import Image from "next/image";

const LocationSection = () => {
  return (
    <motion.div
      initial={{
        opacity: "0%",
        scaleY: "0%",
      }}
      whileInView={{
        opacity: "100%",
        scaleY: "100%",
      }}
      viewport={{
        once: true,
        margin: "-200px"
      }}
      transition={{
        delay: 0.5,
      }}
      style={{ transformOrigin: "top" }}
      className="section-wrapper px-5 lg:px-60 md:px-20"
    >
      <div className="flex flex-col justify-center items-center h-full gap-7">
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-strong font-culot text-center text-5xl uppercase">
            Visit us!
          </h1>
          <h1 className="text-strong font-culot text-center uppercase px-11 lg:block hidden w-150">
            National Road, Arellano, Orion, Bataan — in front of Orion Plaza
            (Munisipyo)
          </h1>
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center gap-5 lg:gap-10">
          <Image
            src={"/images/etc/tipidicuts-interior.png"}
            alt="Tipidicuts Barbershop Interior"
            sizes="100vw"
            width={500}
            height={500}
            quality={100}
            className="lg:w-120 w-90 h-auto rounded-3xl opacity-80"
          />
          <h1 className="text-strong font-culot text-center uppercase px-11 lg:hidden">
            National Road, Arellano, Orion, Bataan — in front of Orion Plaza
            (Munisipyo)
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1758647825471!6m8!1m7!1sW1eekmLSHudX_CUPML7JWg!2m2!1d14.62132155705074!2d120.5770397556131!3f98.58038615371574!4f-11.569655434909507!5f1.330583485328891" // Replace with the actual URL from the generated iframe code
            width="500"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="lg:w-120 w-90 lg:h-90 rounded-3xl opacity-90"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationSection;
