import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Get a Free Quote | 780 Property Cleaners",
  description:
    "Request a free quote for professional cleaning services in Edmonton. Fill out our quick form and receive a customized cleaning quote within 24 hours.",
  keywords: "free cleaning quote, cleaning quote Edmonton, cleaning estimate, cleaning price",
};

export default function QuotePage() {
  return (
    <>
      

      <div className="appointment-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Get a Free Quote</span>
            <h2>Tell Us About Your Cleaning Needs</h2>
            <p>
              Fill out the form below and we'll get back to you within 24 hours
              with a customized quote for your cleaning needs.
            </p>
          </div>

          <QuoteForm />
        </div>
      </div>

    </>
  );
}
