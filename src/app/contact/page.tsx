import PageBanner from "@/components/PageBanner";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | 780 Property Cleaners",
  description: "Get in touch with 780 Property Cleaners for professional cleaning services in Edmonton. Call us, email, or fill out our contact form for a free quote.",
  keywords: "contact cleaning service, cleaning quote Edmonton, cleaning company contact",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <ContactInfo />
      <ContactForm />
    </>
  );
}
