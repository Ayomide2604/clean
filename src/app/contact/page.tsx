import PageBanner from "@/components/PageBanner";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <ContactInfo />
      <ContactForm />
    </>
  );
}
