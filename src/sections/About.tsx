function About() {
  return (
    <div className="six-about-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div
              className="six-about-image"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={500}
              data-aos-once="true"
            >
              <img src="assets/images/home-six/about.jpg" alt="image" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="six-about-content"
              data-aos="fade-up"
              data-aos-delay={70}
              data-aos-duration={700}
              data-aos-once="true"
            >
              <span>About Us</span>
              <h3>We Handle All Commercial Cleaning Services</h3>
              <p>
                Local operations team on-call 24 hours a day available to work
                at a moment notice top quality cleaning that meets and exceed.
              </p>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-6">
                  <div className="about-inner-card">
                    <h4>Best Service &amp; Price</h4>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui proin.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="about-inner-card">
                    <h4>Visible Difference</h4>
                    <p>
                      Vestibulum ac diam sit amet quam vehicula elementum sed
                      sit amet dui proin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
