"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="section-wrapper">
      <div className="flex flex-col justify-center items-center h-full">
        <Image
          src={"/images/logos/tipidicuts-logo.png"}
          alt="Stellar logo"
          sizes="100vw"
          width={500}
          height={500}
          quality={100}
          className="md:w-[40%] w-[80%] h-auto opacity-80 saturate-200"
        />
      </div>
    </div>
  );
};

export default HeroSection;
