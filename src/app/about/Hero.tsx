export default function Hero() {
  return (
    <div className="about-area bg-f4fbf9 ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image" data-speed="0.02" data-revert="true">
              <img src="assets/images/about/about-4.jpg" alt="image" />
              <div
                className="about-image-shape-4"
                data-speed="0.08"
                data-revert="true"
              >
                <img src="assets/images/about/shape-3.png" alt="image" />
              </div>
              <div
                className="about-image-shape-5"
                data-speed="0.08"
                data-revert="true"
              >
                <img src="assets/images/about/shape-6.png" alt="image" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-content" data-speed="0.02" data-revert="true">
              <span>About Us</span>
              <h3>We Will Make Absolutely Any Place Clean, Neat</h3>
              <div className="content-box">
                <div className="icon">
                  <i className="flaticon-rating" />
                </div>
                <h4>We Provide Qualified &amp; Expert</h4>
                <p>
                  Aenean sollicitudin lorem quis bibendum auctor nisi elit
                  consequat ipsum nec sagittis sem nibh id elit duis sed odio
                  sit amet nibh vulputate cursus.
                </p>
              </div>
              <div className="content-box color-two">
                <div className="icon">
                  <i className="flaticon-settings" />
                </div>
                <h4>Modern Tools &amp; Technology Use</h4>
                <p>
                  Aenean sollicitudin lorem quis bibendum auctor nisi elit
                  consequat ipsum nec sagittis sem nibh id elit duis sed odio
                  sit amet nibh vulputate cursus.
                </p>
              </div>
              <div className="about-btn">
                <a href="about-one.html" className="default-btn">
                  <i className="ri-book-open-line" /> Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-shape-6" data-speed="0.05" data-revert="true">
        <img src="assets/images/about/shape-7.png" alt="image" />
      </div>
    </div>
  );
}
