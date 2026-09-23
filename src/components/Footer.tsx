import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-area footer-with-wrap-color pt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <div className="footer-widget-logo">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="Clean"
                    width={70}
                    height={50}
                    priority
                    style={{ transform: "scale(1.25)" }}
                  />
                </Link>
              </div>
              <p>
                Thoughtful residential and commercial cleaning for Edmonton and
                nearby communities.
              </p>
              <h4>Follow Us</h4>
              <ul className="footer-widget-social">
                <li>
                  <a href="#">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-instagram-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget ps-5">
              <h3>Company</h3>
              <ul className="quick-links">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/blog">Cleaning Tips</a>
                </li>
                <li>
                  <a href="/contact">Request a Quote</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget ps-3">
              <h3>Our Services</h3>
              <ul className="quick-links">
                <li>
                  <a href="/services">Regular Cleaning</a>
                </li>
                <li>
                  <a href="/services">Deep Cleaning</a>
                </li>
                <li>
                  <a href="/services">Move-In / Move-Out</a>
                </li>
                <li>
                  <a href="/services">Short-Term Rental</a>
                </li>
                <li>
                  <a href="/services">Commercial Cleaning</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3>Contact Info</h3>
              <ul className="quick-links">
                <li>
                  <span>Location:</span> Edmonton, Alberta
                </li>
                <li>
                  <span>Email:</span>{" "}
                  <a href="mailto:hello@cleanexample.ca">
                    hello@cleanexample.ca
                  </a>
                </li>
                <li>
                  <span>Hours:</span> Mon–Sat, 8 AM–6 PM
                </li>
              </ul>
              <div className="footer-information">
                <i className="ri-phone-fill"></i>
                <span>Call Us Now</span>
                <a href="tel:+17805550142">+1 780 555 0142</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-content">
            <p>© {new Date().getFullYear()} Clean. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="go-top">
        <i className="ri-arrow-up-s-line"></i>
      </div>
    </footer>
  );
}
