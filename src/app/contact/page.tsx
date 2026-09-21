import PageBanner from "@/components/PageBanner";

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <section className="contact-information-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Let&apos;s Talk</span>
            <h2>Tell us about the space you need cleaned</h2>
            <p>
              Contact details below are placeholders for now. A clear
              description helps us recommend the right scope and quote.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-map-pin-line"></i>
                </div>
                <h3>Service Area</h3>
                <p>Edmonton, Alberta and nearby communities</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-phone-line"></i>
                </div>
                <h3>Phone</h3>
                <p>
                  <a href="tel:+17805550142">+1 780 555 0142</a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-information-card">
                <div className="icon">
                  <i className="ri-mail-line"></i>
                </div>
                <h3>Email</h3>
                <p>
                  <a href="mailto:hello@cleanexample.ca">
                    hello@cleanexample.ca
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="contact-form-content">
                <span>Request a Quote</span>
                <h3>Help us understand the job</h3>
                <p>
                  We use these details to estimate the time, team size, and
                  supplies needed before offering a clear quote.
                </p>
                <ul className="action-list">
                  <li>
                    <a href="tel:+17805550142" aria-label="Call Clean">
                      <i className="ri-phone-line"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:hello@cleanexample.ca"
                      aria-label="Email Clean"
                    >
                      <i className="ri-mail-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <form
                className="contact-form-wrap"
                aria-label="Quote request form"
              >
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Your name</label>
                      <input
                        id="name"
                        type="text"
                        className="form-control"
                        name="name"
                        autoComplete="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="phone">Phone number</label>
                      <input
                        id="phone"
                        type="tel"
                        className="form-control"
                        name="phone"
                        autoComplete="tel"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <label htmlFor="service">Service needed</label>
                      <select
                        id="service"
                        className="form-control"
                        name="service"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          {/* Select a service */}
                        </option>
                        <option>Regular Cleaning</option>
                        <option>Deep Cleaning</option>
                        <option>Move-In / Move-Out</option>
                        <option>Short-Term Rental Cleaning</option>
                        <option>Commercial Cleaning</option>
                        <option>Post-Renovation Cleaning</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="property">Property details</label>
                      <input
                        id="property"
                        type="text"
                        className="form-control"
                        name="property"
                        // placeholder="e.g. 3-bedroom home, 2 bathrooms, Edmonton"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="message">
                        Anything else we should know?
                      </label>
                      <textarea
                        id="message"
                        className="form-control"
                        name="message"
                        // placeholder="Tell us about the condition, preferred date, access, or special requests."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button type="button" className="default-btn">
                      <i className="ri-send-plane-line"></i> Request a Quote
                    </button>
                    <p className="form-note">
                      Quote requests usually take under 24 hours to respond to.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
