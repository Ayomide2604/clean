import PageBanner from "@/components/PageBanner";
import Services from "./Services";
import Faq from "./Faq";
import Pricing from "./pricing";

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
