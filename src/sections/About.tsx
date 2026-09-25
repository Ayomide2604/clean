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
              <img
                src="/assets/images/home-six/about.jpg"
                alt="780 Property Cleaners"
              />
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

              <h3>Reliable Cleaning for Homes, Rentals &amp; Businesses</h3>

              <p>
                780 Property Cleaners provides practical, dependable cleaning
                services for homes, apartments, short-term rentals, offices, and
                commercial properties in Edmonton and surrounding areas. We
                focus on understanding what your property needs and delivering a
                clean, comfortable, and presentable space.
              </p>

              <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-6">
                  <div className="about-inner-card">
                    <h4>Cleaning That Fits Your Property</h4>

                    <p>
                      From regular cleaning to deep cleaning and move-in or
                      move-out services, we tailor the scope to your property
                      and the work required.
                    </p>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6">
                  <div className="about-inner-card">
                    <h4>Clear &amp; Straightforward Service</h4>

                    <p>
                      We confirm the cleaning scope before work begins and
                      provide clear quotes based on the size, condition, and
                      requirements of your property.
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
