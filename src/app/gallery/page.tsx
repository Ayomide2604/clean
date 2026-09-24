import PageBanner from "@/components/PageBanner";
import Portfolio from "./Portfolio";

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
