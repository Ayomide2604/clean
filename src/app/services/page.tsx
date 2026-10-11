import PageBanner from "@/components/PageBanner";
import Services from "./Services";
import Faq from "./Faq";
import Pricing from "./pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Cleaning Services | Residential & Commercial | 780 Property Cleaners",
  description: "Comprehensive cleaning services in Edmonton: residential cleaning, commercial cleaning, move-out cleaning, deep cleaning, office cleaning, and more. Free quotes available.",
  keywords: "cleaning services, house cleaning, office cleaning, move-out cleaning, deep cleaning, commercial cleaning Edmonton",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Cleaning Services" />

      <Services />

      <Pricing />

      <Faq />
    </>
  );
}
