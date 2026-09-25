export default function ContactInfo() {
  return (
    <div className="contact-information-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span>Contact Information</span>

          <h2>Get In Touch With 780 Property Cleaners</h2>

          <p>
            Have a question or need a cleaning quote? Reach out to us and tell
            us a little about your property and the service you need.
          </p>
        </div>

        <div className="row justify-content-center">
          {/* Service Area */}
          <div className="col-lg-4 col-md-6">
            <div className="contact-information-card">
              <div className="icon">
                <i className="flaticon-location" />
              </div>

              <h3>Service Areas</h3>

              <p>
                Edmonton and surrounding areas
                <br />
                
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="col-lg-4 col-md-6">
            <div className="contact-information-card">
              <div className="icon">
                <i className="flaticon-phone-call" />
              </div>

              <h3>Phone Number</h3>

              <p>
                <a href="tel:+17805550142">+1 780 555 0142</a>
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="col-lg-4 col-md-6">
            <div className="contact-information-card">
              <div className="icon">
                <i className="flaticon-mail" />
              </div>

              <h3>Email Address</h3>

              <p>
                <a href="mailto:780propertycleaners@gmail.com">
                  780propertycleaners@gmail.com
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
        <img src="/assets/images/contact-information-shape-1.png" alt="" />
      </div>
    </div>
  );
}
