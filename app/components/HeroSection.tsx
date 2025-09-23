"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="section-wrapper">
      <div className="flex flex-col justify-center items-center h-full gap-7">
        <Image
          src={"/images/logos/tipidicuts-logo.png"}
          alt="Stellar logo"
          sizes="100vw"
          width={500}
          height={500}
          quality={100}
          className="md:w-[30%] w-[80%] h-auto opacity-80 saturate-200"
        />
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-strong font-culot text-center text-4xl uppercase">
            Affordable, quality cuts
          </h1>
          <span className="text-strong font-culot text-center uppercase tracking-wider">
            in the heart of <span className="text-blu">Orion,</span>
            <span className="text-rid"> Bataan.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
