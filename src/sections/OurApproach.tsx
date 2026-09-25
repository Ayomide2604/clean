export default function OurApproach() {
  return (
    <section className="choose-us-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="choose-us-content">
              <span>Our Approach</span>
              <h3>Clear scope. Careful work. A quote that makes sense.</h3>
              <p className="mb-2">
                We assess the property, service type, condition, timing, and
                access before recommending a suitable cleaning plan.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center gap-2 mb-2 ">
                  <i className="ri-check-line"></i> Residential and commercial
                  options
                </li>
                <li className="d-flex align-items-center gap-2 mb-2">
                  <i className="ri-check-line"></i> One-time or recurring visits
                </li>
                <li className="d-flex align-items-center gap-2 mb-2">
                  <i className="ri-check-line"></i> Edmonton-area service
                </li>
              </ul>
              <a href="/contact" className="default-btn">
                <i className="ri-chat-1-line"></i> Get a quote
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose-us-image">
              <img
                src="/assets/images/choose-us/choose-1.png"
                alt="Cleaner preparing supplies"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
