import PageBanner from "@/components/PageBanner";
import Hero from "./Hero";
import WhatWeDo from "@/sections/WhatWeDo";
import ServiceAreas from "./ServiceAreas";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 780 Property Cleaners",
  description: "Learn about 780 Property Cleaners - Edmonton's professional cleaning service. Our mission, values, and commitment to excellence in residential and commercial cleaning.",
  keywords: "about cleaning company, cleaning service Edmonton, professional cleaners",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Clean" />
      <Hero />

      <WhatWeDo />
      <ServiceAreas />
    </>
  );
}
