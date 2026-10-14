"use client";

import { services } from "@/data/services";
import Link from "next/link";
import { motion } from "framer-motion";

const icons = [
  "ri-home-4-line",
  "ri-brush-2-line",
  "ri-key-2-line",
  "ri-hotel-bed-line",
  "ri-building-2-line",
  "ri-tools-line",
];

export default function Services() {
  return (
    <section className="services-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Cleaning Services</span>

          <h2>
            Cleaning support for homes, rentals, offices, and commercial
            properties
          </h2>

          <p>
            From regular cleaning to deep cleaning, move-in and move-out
            services, short-term rental turnovers, and commercial cleaning, we
            tailor the scope to the needs of your property.
          </p>
        </div>

        <div className="row justify-content-center">
          {services.map((service, index) => (
            <motion.div
              className="col-lg-4 col-md-6"
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <motion.div
                className="single-services-card bg-f8f8f8"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="icon"
                  whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                >
                  <i className={icons[index]}></i>
                </motion.div>

                <h3>
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h3>

                <p>{service.summary}</p>

                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="services-btn"
                    aria-label={`Learn about ${service.title}`}
                  >
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
