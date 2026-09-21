
import "./globals.css";
import type { Metadata } from "next";
import TemplateScripts from "@/components/TemplateScripts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchOverlay from "@/components/SearchOverlay";





export const metadata: Metadata = {
  title: "Clean - Professional Cleaning Services",
  description: "Professional cleaning and washing services",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">

      <head>
        {/* <link rel="icon" type="image/png" href="/assets/images/favicon.png" /> - Favicon removed until logo decided */}
        
        {/* CSS files from public/assets/css */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.css" />
        <link rel="stylesheet" href="/assets/css/remixicon.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.min.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
        <link rel="stylesheet" href="/assets/css/fancybox.min.css" />
        <link rel="stylesheet" href="/assets/css/selectize.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/navbar.css" />
        <link rel="stylesheet" href="/assets/css/footer.css" />
        <link rel="stylesheet" href="/assets/css/dark.css" /> 
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>
      <body>
        <Header/>
        <SearchOverlay/>
        {children}
        <Footer/>

       
      </body>
      <TemplateScripts/>
    </html>
  );
}
