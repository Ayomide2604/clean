"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  useEffect(() => {
    // Initialize Owl Carousel when component mounts
    const initCarousel = () => {
      if (typeof window !== "undefined" && (window as any).$) {
        const $ = (window as any).$;
        $(".six-home-slides").owlCarousel({
          items: 1,
          loop: true,
          nav: true,
          dots: true,
          smartSpeed: 500,
          autoplay: true,
          autoplayTimeout: 5000,
          navText: [
            '<i className="ri-arrow-left-line"></i>',
            '<i className="ri-arrow-right-line"></i>',
          ],
        });
      }
    };

    // Try to initialize immediately
    initCarousel();

    // If jQuery isn't ready yet, wait for it
    const checkJQuery = setInterval(() => {
      if (typeof window !== "undefined" && (window as any).$) {
        clearInterval(checkJQuery);
        initCarousel();
      }
    }, 100);

    return () => clearInterval(checkJQuery);
  }, []);

  return (


    
    <div className="six-home-slides owl-carousel owl-theme">
      <div className="six-slides-item">
        <div className="container-fluid">
          <div className="six-slides-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Professional Cleaning for Edmonton Homes &amp; Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Reliable regular, deep, move-in/out, and short-term rental
              cleaning built around your property and schedule.
            </motion.p>

            <motion.ul
              className="slides-btn"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <li>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/quote" className="default-btn">
                    <i className="ri-calendar-2-line"></i>
                    Request a Quote
                  </Link>
                </motion.div>
              </li>

              <li>
                <span>
                  Need Any Help? <a href="/contact">Contact Us</a>
                </span>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>

      <div className="six-slides-item slides-bg-two">
        <div className="container-fluid">
          <div className="six-slides-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Cleaning Support for Every Stage of Your Property
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              From routine upkeep to post-renovation and commercial cleaning,
              we tailor the scope of work to the job at hand.
            </motion.p>

            <motion.ul
              className="slides-btn"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <li>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link href="/quote" className="default-btn">
                    <i className="ri-calendar-2-line"></i>
                    Request a Quote
                  </Link>
                </motion.div>
              </li>

              <li>
                <span>
                  Need Any Help? <a href="/contact">Contact Us</a>
                </span>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}
