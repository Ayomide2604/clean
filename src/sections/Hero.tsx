"use client";

import Link from "next/link";
import { useEffect } from "react";

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
            <h1>Professional Cleaning for Edmonton Homes &amp; Businesses</h1>

            <p>
              Reliable regular, deep, move-in/out, and short-term rental
              cleaning built around your property and schedule.
            </p>

            <ul className="slides-btn">
              <li>
                <Link href="/quote" className="default-btn">
                  <i className="ri-calendar-2-line"></i>
                  Request a Quote
                </Link>
              </li>

              <li>
                <span>
                  Need Any Help? <a href="/contact">Contact Us</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="six-slides-item slides-bg-two">
        <div className="container-fluid">
          <div className="six-slides-content">
            <h1>Cleaning Support for Every Stage of Your Property</h1>

            <p>
              From routine upkeep to post-renovation and commercial cleaning,
              we tailor the scope of work to the job at hand.
            </p>

            <ul className="slides-btn">
              <li>
                <Link href="/quote" className="default-btn">
                  <i className="ri-calendar-2-line"></i>
                  Request a Quote
                </Link>
              </li>

              <li>
                <span>
                  Need Any Help? <a href="/contact">Contact Us</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
