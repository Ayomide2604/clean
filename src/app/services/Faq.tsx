"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "780 Property Cleaners serves Edmonton and surrounding areas. Availability may depend on the location, service requested, and schedule.",
  },
  {
    question: "Do you provide one-time cleaning?",
    answer:
      "Yes. We offer both one-time and recurring cleaning services depending on the type of cleaning you need.",
  },
  {
    question: "Do you offer recurring cleaning?",
    answer:
      "Yes. Regular cleaning can be scheduled weekly, bi-weekly, monthly, or on an as-needed basis.",
  },
  {
    question: "How do you price cleaning services?",
    answer:
      "Pricing depends on factors such as property size, condition, service type, scope of work, access, and timing. Most suitable jobs can be quoted at a flat rate after we understand the scope.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "This depends on the agreed service and scope. Any specific supply requirements can be discussed when your service is arranged.",
  },
  {
    question: "Can I request additional cleaning tasks?",
    answer:
      "Yes. Additional tasks can be requested before or during the service. If they fall outside the agreed scope, we will confirm any additional cost before proceeding.",
  },
  {
    question: "Do you clean offices and commercial properties?",
    answer:
      "Yes. We provide commercial cleaning for small offices, retail spaces, restaurants, and other commercial properties.",
  },
  {
    question: "Do you clean Airbnb or short-term rentals?",
    answer:
      "Yes. We provide between-guest cleaning and property resets for short-term rental hosts.",
  },
  {
    question: "How do I book a cleaning?",
    answer:
      "You can request a quote through our website. Tell us about the property, the service you need, and your preferred timing, and we will get back to you with the next steps.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "At the moment, we accept cash and e-Transfer.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5);

  const renderFaq = (
    faq: (typeof faqs)[number],
    index: number,
    offset: number,
  ) => {
    const actualIndex = index + offset;
    const isOpen = openIndex === actualIndex;

    return (
      <div className="accordion-item" key={faq.question}>
        <button
          className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
          type="button"
          onClick={() => setOpenIndex(isOpen ? null : actualIndex)}
          aria-expanded={isOpen}
        >
          {faq.question}
        </button>

        <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
          <div className="accordion-body">
            <p>{faq.answer}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="faq-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span>Frequently Asked Questions</span>

          <h2>Questions About Our Cleaning Services?</h2>

          <p>
            Here are some of the questions customers commonly ask before booking
            a cleaning service.
          </p>
        </div>

        <div className="row align-items-start">
          <div className="col-lg-6 col-md-12">
            <div className="faq-accordion">
              <div className="accordion">
                {leftFaqs.map((faq, index) => renderFaq(faq, index, 0))}
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="faq-accordion">
              <div className="accordion">
                {rightFaqs.map((faq, index) => renderFaq(faq, index, 5))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-shape-1" data-speed="0.08" data-revert="true">
        <img src="/assets/images/faq-shape-1.png" alt="" />
      </div>
    </section>
  );
}
