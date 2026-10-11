export default function Hero() {
  return (
    <div className="about-area bg-f4fbf9 ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image" data-speed="0.02" data-revert="true">
              <img src="assets/images/about/about-4.jpg" alt="780 Property Cleaners team" />
              <div
                className="about-image-shape-4"
                data-speed="0.08"
                data-revert="true"
              >
                <img src="assets/images/about/shape-3.png" alt="decorative shape" />
              </div>
              <div
                className="about-image-shape-5"
                data-speed="0.08"
                data-revert="true"
              >
                <img src="assets/images/about/shape-6.png" alt="decorative shape" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-content" data-speed="0.02" data-revert="true">
              <span>About Us</span>
              <h3>Professional Cleaning for Edmonton Homes &amp; Businesses</h3>
              <div className="content-box">
                <div className="icon">
                  <i className="flaticon-rating" />
                </div>
                <h4>Our Story</h4>
                <p>
                  780 Property Cleaners was founded with a simple mission: to provide exceptional cleaning services that Edmonton residents and businesses can rely on. We understand that every property is unique, and we take pride in tailoring our approach to meet your specific needs. From regular home cleaning to commercial office maintenance, our trained professionals bring attention to detail and a commitment to quality to every job.
                </p>
              </div>
              <div className="content-box color-two">
                <div className="icon">
                  <i className="flaticon-settings" />
                </div>
                <h4>Our Mission</h4>
                <p>
                  To deliver consistently high-quality cleaning services that exceed expectations and create healthier, more welcoming spaces for our clients. We serve Edmonton and surrounding areas with flexible scheduling, eco-friendly products, and a satisfaction guarantee on every service.
                </p>
              </div>
              <div className="about-btn">
                <a href="/contact" className="default-btn">
                  <i className="ri-book-open-line" /> Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-shape-6" data-speed="0.05" data-revert="true">
        <img src="assets/images/about/shape-7.png" alt="decorative shape" />
      </div>
    </div>
  );
}
