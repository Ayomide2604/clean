import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { services } from "@/data/services";

const icons = [
  "ri-home-4-line",
  "ri-brush-2-line",
  "ri-key-2-line",
  "ri-hotel-bed-line",
  "ri-building-2-line",
  "ri-tools-line",
];

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" />
      <section className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Cleaning Services</span>
            <h2>Choose the support your property needs</h2>
            <p>
              Explore each service to see what it covers. Final scope is always
              confirmed before work begins.
            </p>
          </div>
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={service.slug}>
                <div className="single-services-card bg-f8f8f8">
                  <div className="icon">
                    <i className={icons[index]}></i>
                  </div>
                  <h3>
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p>{service.summary}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="services-btn"
                    aria-label={`Learn about ${service.title}`}
                  >
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="services-area bg-fefbf3 ptb-100">
        <div className="container">
          <div className="section-title">
            <span>How Pricing Works</span>
            <h2>Simple customer quotes, sound internal planning</h2>
            <p>
              Most suitable jobs can be quoted as a flat rate after we
              understand the scope. For uncertain or ongoing work, hourly
              pricing may be the better fit.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-services-card">
                <h3>1. Tell us about the job</h3>
                <p>
                  Property size, condition, service needed, timing, and any
                  special requirements.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-services-card">
                <h3>2. We estimate the work</h3>
                <p>
                  We consider the cleaner-hours, supplies, access, travel, and
                  scope required.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-services-card">
                <h3>3. You receive a clear quote</h3>
                <p>
                  We confirm the agreed scope and pricing before the work
                  begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
