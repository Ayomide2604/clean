"use client";

import { usePathname } from "next/navigation";
import TopBar from "./Topbar";
import Navbar from "./Navbar";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={pathname === "/" ? "header-wrap-area" : "site-header"}>
      <TopBar />
      <Navbar />
    </header>
  );
}
