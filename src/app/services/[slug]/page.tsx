import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { getService, services } from "@/data/services";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return <><PageBanner title={service.title} /><section className="services-details-area ptb-100"><div className="container"><div className="row"><div className="col-lg-8 col-md-12"><div className="services-details-desc"><img src="/assets/images/services-details/services-details-1.jpg" alt="Professional cleaning service" /><div className="services-desc-content"><h3>{service.title}</h3><p>{service.description}</p><p>{service.bestFor}</p></div><div className="services-desc-content"><h3>What&apos;s included</h3><ul className="services-desc-list">{service.included.map((item) => <li key={item}><i className="ri-check-line"></i>{item}</li>)}</ul></div><div className="services-desc-content"><h3>Every property is different</h3><p>Your quote will reflect the property size, current condition, requested scope, access, timing, and any additional requirements. We&apos;ll confirm what&apos;s included before work begins.</p><Link href="/contact" className="default-btn"><i className="ri-chat-1-line"></i> Request a quote</Link></div></div></div><div className="col-lg-4 col-md-12"><aside className="widget-area"><div className="widget widget_service_categories"><h3 className="widget-title">Our Services</h3><ul className="categories-list">{services.map((item) => <li key={item.slug}><Link href={`/services/${item.slug}`}>{item.title}<i className="ri-arrow-right-s-line"></i></Link></li>)}</ul></div></aside></div></div></div></section></>;
}
