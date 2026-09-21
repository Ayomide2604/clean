import Link from "next/link";

const navigation = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Blog", "/blog"], ["Contact", "/contact"]];

export default function Navbar() {
  return <div className="navbar-area navbar-area-with-white-color">
    <div className="main-responsive-nav"><div className="container"><div className="main-responsive-menu"><div className="logo"><Link href="/" aria-label="Clean home" style={{ fontSize: "28px", fontWeight: "800", color: "#2caac1", textDecoration: "none", letterSpacing: "2px", textTransform: "uppercase" }}>clean</Link></div></div></div></div>
    <div className="main-navbar"><div className="container-fluid"><nav className="navbar navbar-expand-md navbar-light">
      <Link className="navbar-brand" href="/" aria-label="Clean home" style={{ fontSize: "36px", fontWeight: "800", color: "#2caac1", textDecoration: "none", letterSpacing: "2px", textTransform: "uppercase" }}>clean</Link>
      <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent"><ul className="navbar-nav m-auto">{navigation.map(([label, href]) => <li className="nav-item" key={href}><Link href={href} className="nav-link">{label}</Link></li>)}</ul><div className="others-options d-flex align-items-center"><div className="option-item"><a href="tel:+17805550142" className="phone-number">+1 780 555 0142</a></div><div className="option-item"><Link href="/contact" className="default-btn"><i className="ri-chat-1-line"></i> Request a Quote</Link></div></div></div>
    </nav></div></div>
    <div className="others-option-for-responsive"><div className="container"><div className="dot-menu"><div className="inner"><div className="circle circle-one"></div><div className="circle circle-two"></div><div className="circle circle-three"></div></div></div><div className="container"><div className="option-inner"><div className="others-options d-flex align-items-center"><div className="option-item"><a href="tel:+17805550142" className="phone-number">+1 780 555 0142</a></div><div className="option-item"><a href="/contact" className="default-btn"><i className="ri-chat-1-line"></i> Request a Quote</a></div></div></div></div></div></div>
  </div>;
}
