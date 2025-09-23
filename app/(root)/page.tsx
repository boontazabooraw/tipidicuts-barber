"use client";

import HeroSection from "../components/HeroSection";
import PaperBackground from "../components/PaperBackground";
import SampleSection from "../components/SampleSection";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <SampleSection />
      </div>
      <div className="bg-wrapper -z-1 top-0 left-0 fixed h-dvh w-dvw">
        <PaperBackground />
      </div>
    </>
  );
}
