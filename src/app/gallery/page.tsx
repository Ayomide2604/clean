import PageBanner from "@/components/PageBanner";
import Portfolio from "./Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Portfolio | Before & After Cleaning Results | 780 Property Cleaners",
  description: "See our cleaning results with before and after photos. View our portfolio of residential and commercial cleaning projects in Edmonton.",
  keywords: "cleaning portfolio, before after cleaning, cleaning results, cleaning examples",
};

export default function Gallery() {
  return (
    <>
      <PageBanner title="Our Portfolio" />
      <div className="portfolio-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Our Portfolio</span>
            <h2>Have A Look We Will Make Any Place Absolutely Clean, Neat</h2>
          </div>

          <Portfolio />

        </div>
      </div>
    </>
  );
}
