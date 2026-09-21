import Link from "next/link";

export default function PageBanner({ title }: { title: string }) {
  return (
    <div className="page-banner-area">
      <div className="container">
        <div className="page-banner-content">
          <h2>{title}</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
