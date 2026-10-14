import PageBanner from "@/components/PageBanner";
import Portfolio from "./Portfolio";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Portfolio | Before & After Cleaning Transformations | 780 Property Cleaners",
  description: "See the difference we make with before and after photos of our residential and commercial cleaning projects across Edmonton and surrounding areas.",
  keywords: "cleaning portfolio, before after cleaning, cleaning transformations, Edmonton cleaning results, residential cleaning examples, commercial cleaning gallery",
};

const SHOW_GALLERY = process.env.NEXT_PUBLIC_SHOW_GALLERY === "true";

export default function Gallery() {
  if (!SHOW_GALLERY) {
    return (
      <>
        <PageBanner title="Our Portfolio" />
        <div className="portfolio-area ptb-100">
          <div className="container">
            <div className="section-title">
              <span>Our Portfolio</span>
              <h2>Coming Soon</h2>
            </div>
            <div style={{ textAlign: "center", padding: "60px 20px" }}>
              <i
                className="ri-image-line"
                style={{ fontSize: "80px", color: "var(--main-color)", marginBottom: "20px" }}
              ></i>
              <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>Our Portfolio is Coming Soon</h3>
              <p style={{ fontSize: "18px", color: "var(--paragraph-color)", maxWidth: "600px", margin: "0 auto" }}>
                We're currently curating our best before and after transformations to showcase the quality and attention to detail we bring to every cleaning project across Edmonton. Check back soon to see our work!
              </p>
              <div style={{ marginTop: "30px" }}>
                <Link href="/contact" className="default-btn">
                  <i className="ri-chat-1-line"></i>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageBanner title="Our Portfolio" />
      <div className="portfolio-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Our Portfolio</span>
            <h2>See the Difference We Make</h2>
            <p>Browse our before and after transformations to see the quality and attention to detail we bring to every cleaning project across Edmonton.</p>
          </div>

          <Portfolio />

        </div>
      </div>
    </>
  );
}
