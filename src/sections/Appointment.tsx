import { services } from "@/data/services";

export default function Appointment() {
  return (
    <div className="appointment-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div
              className="appointment-form-wrap"
              data-speed="0.02"
              data-revert="true"
            >
              <div className="content">
                <span>Appointment</span>
                <h3>Needs Any Servicing Get Appointment Now</h3>
              </div>
              <form className="appointment-form">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-user-3-line" />
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
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
                        placeholder="Enter Number"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-map-pin-line" />
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Location"
                      />
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
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-calendar-line" />
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Date"
                        id="datepicker"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <select className="selectize-filter">
                        {services.map((service) => (
                          <option key={service.slug} value={service.slug}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-pencil-line" />
                      </label>
                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="How can we help you? Feel free to talk...."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="default-btn">
                      <i className="ri-arrow-right-line" /> Confirm Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="appointment-form-image"
              data-speed="0.02"
              data-revert="true"
            >
              <img
                src="assets/images/appointment/appointment-1.png"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={500}
                alt="image"
              />
              <div
                className="square-pattern"
                data-aos="fade-down"
                data-aos-delay={70}
                data-aos-duration={700}
                data-aos-once="true"
              />
              <div
                className="appointment-image-shape-1"
                data-speed="0.05"
                data-revert="true"
              >
                <img src="assets/images/appointment/shape-1.png" alt="image" />
              </div>
              <div
                className="appointment-image-shape-2"
                data-speed="0.07"
                data-revert="true"
              >
                <img src="assets/images/appointment/shape-2.png" alt="image" />
              </div>
              <div
                className="appointment-image-shape-3"
                data-speed="0.08"
                data-revert="true"
              >
                <img src="assets/images/appointment/shape-3.png" alt="image" />
              </div>
              <div
                className="appointment-image-shape-4"
                data-speed="0.09"
                data-revert="true"
              >
                <img src="assets/images/appointment/shape-4.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
