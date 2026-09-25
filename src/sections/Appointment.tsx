"use client";

import { useState } from "react";
import { services } from "@/data/services";

export default function Appointment() {
  const [selectedService, setSelectedService] = useState("");
  const [otherService, setOtherService] = useState("");

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
                <span>Request a Quote</span>

                <h3>Tell Us About Your Cleaning Needs</h3>
              </div>

              <form className="appointment-form">
                <div className="row">
                  {/* Name */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-user-3-line" />
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-phone-line" />
                      </label>

                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-map-pin-line" />
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="location"
                        placeholder="Property location"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-mail-line" />
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email address"
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-calendar-line" />
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="date"
                        placeholder="Preferred date"
                        id="datepicker"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <select
                        className="form-control"
                        name="service"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                      >
                        <option value="">Select a service</option>

                        {services.map((service) => (
                          <option key={service.slug} value={service.slug}>
                            {service.title}
                          </option>
                        ))}

                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Other Service */}
                  {selectedService === "other" && (
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>
                          <i className="ri-service-line" />
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          name="otherService"
                          value={otherService}
                          onChange={(e) => setOtherService(e.target.value)}
                          placeholder="What type of cleaning service do you need?"
                        />
                      </div>
                    </div>
                  )}

                  {/* Message */}
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-pencil-line" />
                      </label>

                      <textarea
                        name="message"
                        className="form-control"
                        placeholder="Tell us about the property or anything else we should know..."
                        defaultValue={""}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="default-btn">
                      <i className="ri-arrow-right-line" />
                      Request a Quote
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Image */}
          <div className="col-lg-6 col-md-12">
            <div
              className="appointment-form-image"
              data-speed="0.02"
              data-revert="true"
            >
              <img
                src="/assets/images/appointment/appointment-1.png"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={500}
                alt="780 Property Cleaners"
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
                <img src="/assets/images/appointment/shape-1.png" alt="" />
              </div>

              <div
                className="appointment-image-shape-2"
                data-speed="0.07"
                data-revert="true"
              >
                <img src="/assets/images/appointment/shape-2.png" alt="" />
              </div>

              <div
                className="appointment-image-shape-3"
                data-speed="0.08"
                data-revert="true"
              >
                <img src="/assets/images/appointment/shape-3.png" alt="" />
              </div>

              <div
                className="appointment-image-shape-4"
                data-speed="0.09"
                data-revert="true"
              >
                <img src="/assets/images/appointment/shape-4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
