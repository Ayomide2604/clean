import Link from "next/link";
import { notFound } from "next/navigation";

import PageBanner from "@/components/PageBanner";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map(({ slug }) => ({
    slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageBanner title={service.title} />

      <section className="services-details-area ptb-100">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8 col-md-12">
              <div className="services-details-desc">
                {/* Service Image */}
                <div className="services-details-image">
                  <img src={service.image} alt={service.title} />
                </div>

                {/* Service Description */}
                <div className="services-desc-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <p>{service.bestFor}</p>
                </div>

                {/* What's Included */}
                <div className="services-desc-content">
                  <h3>What&apos;s Included</h3>

                  <ul className="services-desc-list">
                    {service.included.map((item) => (
                      <li key={item}>
                        <i className="ri-check-line"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing / Quote */}
                <div className="services-desc-content">
                  <h3>Every Property Is Different</h3>

                  <p>
                    Your quote will reflect the property size, current
                    condition, requested scope, access, timing, and any
                    additional requirements. We&apos;ll confirm what&apos;s
                    included before work begins.
                  </p>

                  <Link href="/contact" className="default-btn">
                    <i className="ri-chat-1-line"></i>
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12">
              <aside className="widget-area">
                <div className="widget widget_service_categories">
                  <h3 className="widget-title">Our Services</h3>

                  <ul className="categories-list">
                    {services.map((item) => {
                      const isActive = item.slug === slug;

                      return (
                        <li
                          key={item.slug}
                          className={isActive ? "active" : undefined}
                        >
                          <Link
                            href={`/services/${item.slug}`}
                            className={isActive ? "active" : undefined}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <span>{item.title}</span>

                            <i className="ri-arrow-right-s-line"></i>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
