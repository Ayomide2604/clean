"use client";

import Link from "next/link";
import Image from "next/image";

const SHOW_GALLERY = process.env.NEXT_PUBLIC_SHOW_GALLERY === "true";

const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ...(SHOW_GALLERY ? [["Gallery", "/gallery"]] : []),
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  return (
    <div className="navbar-area navbar-area-with-white-color">
      {/* Mobile Navbar */}
      <div className="main-responsive-nav">
        <div className="container">
          <div className="main-responsive-menu">
            <div className="logo">
              <Link href="/" aria-label="Clean home">
                <Image
                  src="/logo.png"
                  alt="Clean"
                  width={140}
                  height={100}
                  priority
                  style={{ maxWidth: "60px", height: "auto" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="main-navbar">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" href="/" aria-label="Clean home">
              <Image
                src="/logo.png"
                alt="Clean"
                width={140}
                height={100}
                priority
                style={{
                  maxWidth: "60px",
                  height: "auto",
                  transform: "scale(1.2)",
                }}
              />
            </Link>

            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                {navigation.map(([label, href]) => (
                  <li className="nav-item" key={href}>
                    <Link href={href} className="nav-link">
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="nav-item d-block d-md-none">
                  <Link
                    href="/quote"
                    className="nav-link default-btn quote-mobile-btn d-inline-block"
                  >
                    <i className="ri-chat-1-line"></i>
                    Request a Quote
                  </Link>
                </li>
              </ul>

              <div className="others-options d-flex align-items-center">
                <div className="option-item">
                  <a href="tel:+17805550142" className="phone-number">
                    +1 780 555 0142
                  </a>
                </div>

                <div className="option-item">
                  <Link href="/quote" className="default-btn">
                    <i className="ri-chat-1-line"></i>
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
