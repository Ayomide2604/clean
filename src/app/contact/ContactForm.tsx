export default function ContactForm() {
  return (
    <div className="contact-form-area ptb-100">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-md-12">
        <div className="contact-form-content">
          <span>Contact Form</span>
          <h3>Cool Project? Get in Touch! Will Contact You Soon</h3>
          <ul className="action-list">
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <i className="ri-facebook-line" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                <i className="ri-twitter-fill" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="ri-instagram-fill" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank">
                <i className="ri-linkedin-fill" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="contact-form-wrap">
          <form id="contactForm">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <label>
                    <i className="ri-user-3-line" />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    data-error="Please enter your name"
                    placeholder="Enter your name"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <label>
                    <i className="ri-mail-line" />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    data-error="Please enter your email"
                    placeholder="Email Address"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <label>
                    <i className="ri-phone-line" />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    data-error="Please enter your phone number"
                    placeholder="Enter Number"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <label>
                    <i className="ri-book-line" />
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    data-error="Please enter your subject"
                    placeholder="Enter Subject"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <label>
                    <i className="ri-pencil-line" />
                  </label>
                  <textarea
                    className="form-control"
                    cols={30}
                    rows={6}
                    required
                    data-error="Write your message"
                    placeholder="How can we help you? Feel free to talk...."
                    defaultValue={""}
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <button type="submit" className="default-btn">
                  <i className="ri-arrow-right-line" /> Send Message
                </button>
                <div id="msgSubmit" className="h3 text-center hidden" />
                <div className="clearfix" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}