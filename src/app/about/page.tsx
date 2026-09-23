import PageBanner from "@/components/PageBanner";
import Hero from "./Hero";
import WhatWeDo from "@/sections/WhatWeDo";
import ServiceAreas from "./ServiceAreas";

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
