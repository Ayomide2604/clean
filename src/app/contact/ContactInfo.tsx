export default function ContactInfo() {
  return (
    <div className="contact-information-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span>Contact Information</span>
          <h2>We Want To Share Our Location To Find Us Easily</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="contact-information-card">
              <div className="icon">
                <i className="flaticon-location" />
              </div>
              <h3>Office Address</h3>
              <p>
                28 Benin, south of Niger #5 San <br /> Francisco USA
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="contact-information-card">
              <div className="icon">
                <i className="flaticon-phone-call" />
              </div>
              <h3>Phone Number</h3>
              <p>
                <a href="tel:001547898765">+00154 789 8765</a> <br />{" "}
                <a href="tel:001547899241">+00154 789 9241</a>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="contact-information-card">
              <div className="icon">
                <i className="flaticon-mail" />
              </div>
              <h3>Mail Address</h3>
              <p>
                <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#2b4f59445d4e6b4c464a424705484446">
                  <span
                    className="__cf_email__"
                    data-cfemail="3a5e48554c5f7a5d575b535614595557"
                  >
                    [email&nbsp;protected]
                  </span>
                </a>{" "}
                <br />{" "}
                <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#ddb9afb2abb8b4b3bbb29dbab0bcb4b1f3beb2b0">
                  <span
                    className="__cf_email__"
                    data-cfemail="6400160b12010d0a020b240309050d084a070b09"
                  >
                    [email&nbsp;protected]
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="contact-information-shape-1"
        data-speed="0.08"
        data-revert="true"
      >
        <img src="assets/images/contact-information-shape-1.png" alt="image" />
      </div>
    </div>
  );
}
