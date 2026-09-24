"use client";

import { useState } from "react";
import Image from "next/image";

const portfolioItems = [
  {
    before: "/assets/images/portfolio/portfolio-2.jpg",
    after: "/assets/images/portfolio/portfolio-4.jpg",
  },
  {
    before: "/assets/images/portfolio/portfolio-5.jpg",
    after: "/assets/images/portfolio/portfolio-6.jpg",
  },
  {
    before: "/assets/images/portfolio/portfolio-1.jpg",
    after: "/assets/images/portfolio/portfolio-7.jpg",
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [view, setView] = useState<"before" | "after">("after");

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setView("after");
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* Portfolio Grid */}
      <div className="row justify-content-center">
        {portfolioItems.map((item, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div
              className="portfolio-image"
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onClick={() => openLightbox(index)}
            >
              {/* Before image */}
              <Image
                src={item.before}
                alt="Before cleaning"
                width={600}
                height={600}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />

              {/* After image overlay */}
              <Image
                src={item.after}
                alt="After cleaning"
                width={600}
                height={600}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                }}
                className="portfolio-after-preview"
              />

              {/* Hover overlay */}
              <div className="portfolio-hover-overlay">
                <span className="portfolio-view-btn">
                  <i className="ri-eye-line"></i>
                  View
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox */}
      {selectedImage !== null && (
        <div
          className="portfolio-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Before and after image viewer"
        >
          <button
            type="button"
            className="portfolio-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image viewer"
          >
            <i className="ri-close-line"></i>
          </button>

          <div
            className="portfolio-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Before / After controls */}
            <div className="before-after-switch">
              <button
                type="button"
                className={view === "before" ? "active" : ""}
                onClick={() => setView("before")}
              >
                Before
              </button>

              <button
                type="button"
                className={view === "after" ? "active" : ""}
                onClick={() => setView("after")}
              >
                After
              </button>
            </div>

            {/* Image */}
            <div className="portfolio-lightbox-image">
              <Image
                src={
                  view === "before"
                    ? portfolioItems[selectedImage].before
                    : portfolioItems[selectedImage].after
                }
                alt={
                  view === "before"
                    ? "Before cleaning"
                    : "After cleaning"
                }
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                }}
                priority
              />
            </div>

            {/* Current state */}
            <div className="before-after-label">
              {view === "before" ? "Before" : "After"}
            </div>
          </div>
        </div>
      )}
    </>
  );
}