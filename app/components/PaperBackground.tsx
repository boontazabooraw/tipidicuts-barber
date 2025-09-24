"use client";

import Image from "next/image";

const PaperBackground = () => {
  return (
    <>
      <Image
        src={"/images/bg/paper-bg.png"}
        alt="Background Image"
        fill
        priority
        quality={100}
        className="opacity-80"
        style={{ objectFit: "cover" }}
      />
    </>
  );
};

export default PaperBackground;
