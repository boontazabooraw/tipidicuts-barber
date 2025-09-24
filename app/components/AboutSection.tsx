"use client";

import { motion } from "motion/react";

import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="section-wrapper px-5 lg:px-60 md:px-20">
      <div className="flex lg:flex-row flex-col justify-center items-center h-full gap-7 lg:gap-0">
        <div className="flex items-center lg:w-150">
          <motion.span
            initial={{
              opacity: "0%",
              scaleX: "0%",
            }}
            whileInView={{
              opacity: "100%",
              scaleX: "100%",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.3,
            }}
            className="font-bold text-strong lg:text-end text-justify lg:text-3xl text-xl font-culot leading-relaxed tracking-wider"
          >
            <span className="text-blu opacity-90">Tipid</span>
            <span className="text-rid opacity-90">icuts </span>
            is your neighborhood barbershop in Orion, Bataan — right across
            Orion Plaza. We specialize in classic and modern cuts, keeping it
            budget-friendly while making sure you walk out looking sharp.
          </motion.span>
        </div>
        <div className="flex flex-wrap lg:justify-center justify-around gap-7 lg:gap-0">
          <motion.div
            initial={{
              opacity: "0%",
              x: "-20%",
            }}
            whileInView={{
              opacity: "100%",
              x: "0",
              scale: [1, 1, 1, 1, 1, 1.1, 1],
            }}
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            className="flex lg:flex-row flex-col items-center lg:justify-center justify-between"
          >
            <Image
              src={"/images/logos/titotatay-trim.png"}
              alt="Tito / Tatay Trim"
              width={200}
              height={200}
              quality={100}
              className="brightness-90 lg:w-[60%] w-33"
            />
            <h1 className="lg:text-4xl text-3xl opacity-90 font-culot tracking-tighter uppercase lg:[writing-mode:vertical-lr]">
              <span className="text-blu">Tito</span>
              <span className="text-rid">Trim</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{
              opacity: "0%",
              x: "20%",
            }}
            whileInView={{
              opacity: "100%",
              x: "0",
              scale: [1, 1, 1, 1, 1, 1.1, 1],
            }}
            transition={{
              duration: 0.2,
              delay: 1,
            }}
            className="flex lg:flex-row flex-col items-center lg:justify-center justify-between"
          >
            <Image
              src={"/images/logos/bagets-style.png"}
              alt="Bagets style"
              width={200}
              height={200}
              quality={100}
              className="brightness-90 lg:w-[66%] w-40"
            />
            <h1 className="lg:text-4xl text-3xl opacity-90 font-culot tracking-tighter uppercase lg:[writing-mode:vertical-lr]">
              <span className="text-blu">Bagets</span>
              <span className="text-rid">Style</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{
              opacity: "0%",
              y: "20%",
            }}
            whileInView={{
              opacity: "100%",
              y: "0",
              scale: [1, 1, 1, 1, 1, 1.1, 1],
            }}
            transition={{
              duration: 0.2,
              delay: 1.5,
            }}
            className="flex lg:flex-row flex-col items-center justify-between lg:justify-center"
          >
            <Image
              src={"/images/logos/astig-fade.png"}
              alt="Astig Fade"
              width={200}
              height={200}
              quality={100}
              className="brightness-90 lg:w-[66%] w-40"
              // className="lg:w-[30%] w-[40%] h-auto"
            />
            <h1 className="lg:text-4xl text-3xl opacity-90 font-culot tracking-tighter uppercase lg:[writing-mode:vertical-lr]">
              <span className="text-blu">Astig</span>
              <span className="text-rid">Fade</span>
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
