"use client";

import Script from "next/script";

export default function TemplateScripts() {
  return (
    <>
      {/* jQuery - must load first */}
      <Script
        src="/assets/js/jquery.min.js"
        strategy="afterInteractive"
      />

      {/* Bootstrap */}
      <Script
        src="/assets/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />

      {/* Mean Menu */}
      <Script
        src="/assets/js/jquery.meanmenu.js"
        strategy="afterInteractive"
      />

      {/* Owl Carousel */}
      <Script
        src="/assets/js/owl.carousel.min.js"
        strategy="afterInteractive"
      />

      {/* Counter */}
      <Script
        src="/assets/js/jquery.appear.js"
        strategy="afterInteractive"
      />

      <Script
        src="/assets/js/odometer.min.js"
        strategy="afterInteractive"
      />

      {/* Popup */}
      <Script
        src="/assets/js/jquery.magnific-popup.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/assets/js/fancybox.min.js"
        strategy="afterInteractive"
      />

      {/* jQuery UI */}
      <Script
        src="/assets/js/jquery-ui.js"
        strategy="afterInteractive"
      />

      {/* Selectize */}
      <Script
        src="/assets/js/selectize.min.js"
        strategy="afterInteractive"
      />

      {/* Animation */}
      <Script
        src="/assets/js/TweenMax.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/assets/js/aos.js"
        strategy="afterInteractive"
      />

      {/* Forms */}
      <Script
        src="/assets/js/jquery.ajaxchimp.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/assets/js/form-validator.min.js"
        strategy="afterInteractive"
      />

      <Script
        src="/assets/js/contact-form-script.js"
        strategy="afterInteractive"
      />

      {/* WOW */}
      <Script
        src="/assets/js/wow.min.js"
        strategy="afterInteractive"
      />

      {/* Theme Main JS - LAST */}
      <Script
        src="/assets/js/main.js"
        strategy="afterInteractive"
      />
    </>
  );
}