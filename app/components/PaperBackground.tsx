"use client";

import Image from "next/image";

const PaperBackground = () => {
  return (
    <>
      <Image
        src={"/images/bg/paper-bg.png"}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-60"
      />
    </>
  );
};

export default PaperBackground;
