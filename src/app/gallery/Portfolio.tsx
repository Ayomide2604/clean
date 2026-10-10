"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ImageSet {
  before: string;
  after: string;
}

interface Collection {
  id: string;
  title: string;
  description: string;
  imageSets: ImageSet[];
}

const collections: Collection[] = [
  {
    id: "1",
    title: "Residential Home",
    description: "Complete house cleaning",
    imageSets: [
      {
        before: "/assets/images/portfolio/portfolio-2.jpg",
        after: "/assets/images/portfolio/portfolio-4.jpg",
      },
      {
        before: "/assets/images/portfolio/portfolio-5.jpg",
        after: "/assets/images/portfolio/portfolio-6.jpg",
      },
      {
        before: "/assets/images/gallery/gallery-1.jpg",
        after: "/assets/images/gallery/gallery-2.jpg",
      },
    ],
  },
  {
    id: "2",
    title: "Office Space",
    description: "Commercial cleaning project",
    imageSets: [
      {
        before: "/assets/images/portfolio/portfolio-1.jpg",
        after: "/assets/images/portfolio/portfolio-7.jpg",
      },
      {
        before: "/assets/images/gallery/gallery-3.jpg",
        after: "/assets/images/gallery/gallery-4.jpg",
      },
      {
        before: "/assets/images/gallery/gallery-5.jpg",
        after: "/assets/images/gallery/gallery-6.jpg",
      },
    ],
  },
  {
    id: "3",
    title: "Commercial Building",
    description: "Large scale cleaning",
    imageSets: [
      {
        before: "/assets/images/gallery/gallery-7.jpg",
        after: "/assets/images/gallery/gallery-8.jpg",
      },
      {
        before: "/assets/images/gallery/gallery-9.jpg",
        after: "/assets/images/portfolio/portfolio-3.jpg",
      },
      {
        before: "/assets/images/portfolio/portfolio-2.jpg",
        after: "/assets/images/portfolio/portfolio-1.jpg",
      },
    ],
  },
];

export default function Portfolio() {
  const [selectedCollection, setSelectedCollection] = useState<number | null>(null);
  const [selectedImageSet, setSelectedImageSet] = useState<number>(0);
  const [view, setView] = useState<"before" | "after">("before");
  const [showHint, setShowHint] = useState(false);
  const hintTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerHint = () => {
    if (hintTimeoutRef.current) {
      clearTimeout(hintTimeoutRef.current);
    }
    setShowHint(true);
    hintTimeoutRef.current = setTimeout(() => {
      setShowHint(false);
      hintTimeoutRef.current = null;
    }, 3000);
  };

  const openLightbox = (collectionIndex: number) => {
    setSelectedCollection(collectionIndex);
    setSelectedImageSet(0);
    setView("before");
    triggerHint();
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedCollection(null);
    document.body.style.overflow = "";
  };

  const goToPrevious = () => {
    if (selectedCollection === null) return;
    const collection = collections[selectedCollection];
    const newIndex = selectedImageSet === 0 ? collection.imageSets.length - 1 : selectedImageSet - 1;
    setSelectedImageSet(newIndex);
    setView("before");
    triggerHint();
  };

  const goToNext = () => {
    if (selectedCollection === null) return;
    const collection = collections[selectedCollection];
    const newIndex = selectedImageSet === collection.imageSets.length - 1 ? 0 : selectedImageSet + 1;
    setSelectedImageSet(newIndex);
    setView("before");
    triggerHint();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCollection === null) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        setView(view === "before" ? "after" : "before");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCollection, selectedImageSet, view]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hintTimeoutRef.current) {
        clearTimeout(hintTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Portfolio Grid */}
      <div className="row justify-content-center">
        {collections.map((collection, index) => (
          <div className="col-lg-4 col-md-6" key={collection.id}>
            <div
              className="portfolio-image"
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Before image (thumbnail) */}
              <Image
                src={collection.imageSets[0].before}
                alt={collection.title}
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
                src={collection.imageSets[0].after}
                alt={collection.title}
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
                <button
                  type="button"
                  className="portfolio-view-btn"
                  onClick={() => openLightbox(index)}
                >
                  <i className="ri-eye-line"></i>
                  View
                </button>
              </div>

              {/* Collection info */}
              <div className="portfolio-collection-info">
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
                <span className="portfolio-count-badge">
                  {collection.imageSets.length} {collection.imageSets.length === 1 ? 'image' : 'images'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox */}
      {selectedCollection !== null && (
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
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close image viewer"
          >
            <i className="ri-close-line"></i>
          </button>

          {/* Navigation buttons */}
          <button
            type="button"
            className="portfolio-nav-btn portfolio-nav-prev"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <i className="ri-arrow-left-line"></i>
          </button>

          <button
            type="button"
            className="portfolio-nav-btn portfolio-nav-next"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <i className="ri-arrow-right-line"></i>
          </button>

          {/* Click hint overlay */}
          {showHint && (
            <div className="portfolio-click-hint">
              <i className="ri-cursor-line"></i>
              <span>Click image to toggle • Use arrows to navigate</span>
            </div>
          )}

          <div
            className="portfolio-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Collection title */}
            <div className="portfolio-collection-title">
              <h2>{collections[selectedCollection].title}</h2>
              <p>{collections[selectedCollection].description}</p>
            </div>

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
            <div
              className="portfolio-lightbox-image"
              onClick={() => setView(view === "before" ? "after" : "before")}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={
                  view === "before"
                    ? collections[selectedCollection].imageSets[selectedImageSet].before
                    : collections[selectedCollection].imageSets[selectedImageSet].after
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

            {/* Image counter */}
            <div className="portfolio-counter">
              {selectedImageSet + 1} / {collections[selectedCollection].imageSets.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
