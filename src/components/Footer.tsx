import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export default function Footer() {
  return (
    <footer className="footer-area footer-with-wrap-color pt-100">
      <div className="container">
        <div className="row justify-content-center">
          {/* About */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <div className="footer-widget-logo">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="780 Property Cleaners"
                    width={70}
                    height={50}
                    priority
                    style={{ transform: "scale(1.25)" }}
                  />
                </Link>
              </div>

              <p>
                Thoughtful residential and commercial cleaning for Edmonton and
                surrounding communities.
              </p>

              <h4>Follow Us</h4>

              <ul className="footer-widget-social">
                <li>
                  <a
                    href="https://www.facebook.com/780propertycleaners"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/780propertycleaners"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="ri-instagram-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Company */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget ps-5">
              <h3>Company</h3>

              <ul className="quick-links">
                <li>
                  <Link href="/about">About Us</Link>
                </li>

                <li>
                  <Link href="/services">Services</Link>
                </li>

                <li>
                  <Link href="/blog">Cleaning Tips</Link>
                </li>

                <li>
                  <Link href="/contact">Request a Quote</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget ps-3">
              <h3>Our Services</h3>

              <ul className="quick-links">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3>Contact Info</h3>

              <ul className="quick-links">
                <li>
                  <span>Location:</span> Edmonton, Alberta
                </li>

                <li>
                  <span>Email:</span>{" "}
                  <a href="mailto:780propertycleaners@gmail.com">
                    780propertycleaners@gmail.com
                  </a>
                </li>

                <li>
                  <span>Hours:</span> Mon–Sat, 8 AM–6 PM
                </li>
              </ul>

              <div className="footer-information">
                <i className="ri-phone-fill"></i>

                <span>Call Us Now</span>

                <a href="tel:+17805550142">
                  +1 780 555 0142
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-content">
            <p>
              © {new Date().getFullYear()} 780 Property Cleaners. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Go Top */}
      <div className="go-top">
        <i className="ri-arrow-up-s-line"></i>
      </div>
    </footer>
  );
}
