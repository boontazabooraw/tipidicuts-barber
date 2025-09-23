"use client";

import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="section-wrapper px-5 md:px-60">
      <div className="flex flex-col justify-center items-center h-full gap-7">
        <div className="flex items-center">
          <span className="font-bold text-strong md:text-center text-justify md:text-3xl text-xl font-culot leading-normal">
            Tipidicuts is your neighborhood barbershop in Orion, Bataan — right
            across Orion Plaza. We specialize in classic and modern cuts,
            keeping it budget-friendly while making sure you walk out looking
            sharp.
          </span>
        </div>
        <div className="flex flex-wrap justify-around gap-7">
          <div className="flex flex-col items-center justify-between">
            <Image
              src={"/images/logos/titotatay-trim.png"}
              alt="Stellar logo"
              width={130}
              height={130}
              quality={100}
            />
            <h1 className="text-3xl opacity-70 font-culot tracking-tighter uppercase">
              Tito Trim
            </h1>
          </div>
          <div className="flex flex-col items-center justify-between">
            <Image
              src={"/images/logos/bagets-style.png"}
              alt="Stellar logo"
              width={150}
              height={150}
              quality={100}
            />
            <h1 className="text-3xl opacity-70 font-culot tracking-tighter uppercase">
              Bagets Style
            </h1>
          </div>
          <div className="flex flex-col items-center justify-between">
            <Image
              src={"/images/logos/astig-fade.png"}
              alt="Stellar logo"
              width={150}
              height={150}
              quality={100}
              // className="md:w-[30%] w-[40%] h-auto"
            />
            <h1 className="text-3xl opacity-70 font-culot tracking-tighter uppercase">
              Astig Fade
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
