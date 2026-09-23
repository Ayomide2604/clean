export default function Pricing() {
  return (
    <section className="services-area bg-fefbf3 ptb-100">
      <div className="container">
        <div className="section-title">
          <span>How Pricing Works</span>
          <h2>Simple customer quotes, sound internal planning</h2>
          <p>
            Most suitable jobs can be quoted as a flat rate after we understand
            the scope. For uncertain or ongoing work, hourly pricing may be the
            better fit.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="single-services-card">
              <h3>1. Tell us about the job</h3>
              <p>
                Property size, condition, service needed, timing, and any
                special requirements.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-services-card">
              <h3>2. We estimate the work</h3>
              <p>
                We consider the cleaner-hours, supplies, access, travel, and
                scope required.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-services-card">
              <h3>3. You receive a clear quote</h3>
              <p>
                We confirm the agreed scope and pricing before the work begins.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
