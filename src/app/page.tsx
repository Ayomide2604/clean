import Hero from "@/sections/Hero";
import About from "@/sections/About";
import WhatWeDo from "@/sections/WhatWeDo";
import OurApproach from "@/sections/OurApproach";
import Appointment from "@/sections/Appointment";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "780 Property Cleaners | Professional Cleaning Services Edmonton",
  description: "Edmonton's trusted residential and commercial cleaning service. We provide thorough, reliable cleaning for homes, offices, and businesses. Get your free quote today.",
  keywords: "cleaning services Edmonton, house cleaning, commercial cleaning, professional cleaners, deep cleaning",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <WhatWeDo/>
      <OurApproach/>
      <Appointment/>
    </>
  );
}
