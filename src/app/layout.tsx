import type { Metadata } from "next";
import TemplateScripts from "@/components/TemplateScripts";

export const metadata: Metadata = {
  title: "Cleaning Services",
  description:
    "Professional cleaning services in Edmonton and surrounding areas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />

        {/* Animation & UI CSS */}
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />

        {/* Mean Menu */}
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />

        {/* Icons */}
        <link rel="stylesheet" href="/assets/css/remixicon.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />

        {/* Counters */}
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />

        {/* Owl Carousel */}
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />

        {/* jQuery UI */}
        <link rel="stylesheet" href="/assets/css/jquery-ui.min.css" />

        {/* Popup / Lightbox */}
        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/assets/css/fancybox.min.css" />

        {/* Selectize */}
        <link rel="stylesheet" href="/assets/css/selectize.min.css" />

        {/* Main Theme CSS */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/navbar.css" />
        <link rel="stylesheet" href="/assets/css/footer.css" />
        <link rel="stylesheet" href="/assets/css/dark.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>

      <body>{children}</body>
      <TemplateScripts />
    </html>
  );
}
