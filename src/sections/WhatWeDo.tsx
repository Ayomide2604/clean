export default function WhatWeDo() {


    const services = [
      [
        "ri-home-4-line",
        "Regular Cleaning",
        "Reliable recurring cleaning for homes, apartments, and offices.",
      ],
      [
        "ri-brush-2-line",
        "Deep Cleaning",
        "A detailed reset for high-use rooms, surfaces, and hard-to-reach areas.",
      ],
      [
        "ri-key-2-line",
        "Move-In / Move-Out",
        "A fresh start for tenants, homeowners, landlords, and property managers.",
      ],
    ];
  return (
    <section className="services-area bg-fefbf3 ptb-100">
        <div className="container">
          <div className="section-title">
            <span>What We Do</span>
            <h2>Cleaning that fits your property and schedule</h2>
            <p>
              Clean serves Edmonton and nearby communities with practical,
              dependable residential and commercial cleaning.
            </p>
          </div>
          <div className="row justify-content-center">
            {services.map(([icon, title, text]) => (
              <div className="col-lg-4 col-md-6" key={title}>
                <div className="single-services-card bg-f8f8f8">
                  <div className="icon">
                    <i className={icon}></i>
                  </div>
                  <h3>
                    <a href="/services">{title}</a>
                  </h3>
                  <p>{text}</p>
                  <a href="/services" className="services-btn">
                    <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>

           <div className="view-all-btn">
                    <a href="/services" className="default-btn"><i className="ri-eye-line"></i> View All</a>
                </div>
        </div>
      </section>
  );
}
