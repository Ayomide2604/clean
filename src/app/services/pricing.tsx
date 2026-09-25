export default function Pricing() {
  return (
    <section className="services-area bg-fefbf3 ptb-100">
      <div className="container">
        <div className="section-title">
          <span>How Pricing Works</span>

          <h2>Clear quotes based on the work your property needs</h2>

          <p>
            Every property is different. We look at the size, condition, service
            requested, access, and overall scope of the job before providing a
            quote.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-services-card">
              <div className="icon">
                <i className="ri-chat-3-line"></i>
              </div>

              <h3>1. Tell Us About Your Property</h3>

              <p>
                Share the property type, approximate size, cleaning service
                needed, preferred date, and any specific requirements.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-card">
              <div className="icon">
                <i className="ri-search-eye-line"></i>
              </div>

              <h3>2. We Review the Scope</h3>

              <p>
                We consider the condition of the property, areas requiring
                attention, access, timing, and the work involved.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-card">
              <div className="icon">
                <i className="ri-file-list-3-line"></i>
              </div>

              <h3>3. Receive Your Quote</h3>

              <p>
                We provide a clear quote based on the agreed scope and confirm
                what is included before the cleaning begins.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>
            <strong>Simple and transparent:</strong> Most suitable jobs can be
            quoted at a flat rate. For certain ongoing or less predictable jobs,
            hourly pricing may be more appropriate.
          </p>
        </div>
      </div>
    </section>
  );
}
