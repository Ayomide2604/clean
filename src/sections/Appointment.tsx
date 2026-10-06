"use client";

import { useState, useEffect } from "react";
import { services } from "@/data/services";

export default function Appointment() {
  const [selectedService, setSelectedService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [servicesArray, setServicesArray] = useState<any[]>([]);

  useEffect(() => {
    // Convert services to a regular array
    setServicesArray(Array.from(services));
  }, []);

  const isCommercial =
    propertyType === "Office" ||
    propertyType === "Restaurant" ||
    propertyType === "Retail";

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is missing.");

      setStatus("error");
      return;
    }

    // Web3Forms
    formData.append("access_key", accessKey);

    formData.append("subject", "New Quote Request - 780 Property Cleaners");

    formData.append("from_name", "780 Property Cleaners Website");

    // Convert service slug into the actual service name
    const selectedServiceName =
      selectedService === "other"
        ? otherService
        : servicesArray.find((service) => service.slug === selectedService)?.title ||
          selectedService;

    formData.set("service", selectedServiceName);

    try {
      // -----------------------------------------
      // WEB3FORMS
      // -----------------------------------------
      const web3Response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const web3Result = await web3Response.json();

      if (!web3Response.ok || !web3Result.success) {
        console.error("Web3Forms error:", web3Result);

        setStatus("error");
        return;
      }

      // -----------------------------------------
      // RESEND CUSTOMER CONFIRMATION
      // -----------------------------------------
      const confirmationResponse = await fetch("/api/quote-confirmation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
          propertyType: formData.get("propertyType"),
          bedrooms: formData.get("bedrooms"),
          bathrooms: formData.get("bathrooms"),
          frequency: formData.get("frequency"),
          location: formData.get("location"),
          date: formData.get("date"),
          message: formData.get("message"),
        }),
      });

      const confirmationResult = await confirmationResponse.json();

      if (!confirmationResponse.ok) {
        console.error("Resend confirmation error:", confirmationResult);
      }

      // Web3Forms succeeded, so show success
      setStatus("success");

      form.reset();
      setSelectedService("");
      setOtherService("");
      setPropertyType("");
    } catch (error) {
      console.error("Quote submission error:", error);

      setStatus("error");
    }
  };

  return (
    <div className="appointment-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          {/* FORM */}
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

              <form className="appointment-form" onSubmit={handleSubmit}>
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
                        required
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
                        required
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
                        required
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
                        required
                        placeholder="Email address"
                      />
                    </div>
                  </div>

                  {/* Property Type */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-building-line" />
                      </label>
                      <select
                        className="form-control"
                        name="propertyType"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        required
                      >
                        <option value="">Property type</option>
                        <option value="Home/Apartment">Home/Apartment</option>
                        <option value="Office">Office</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Retail">Retail</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Frequency */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-refresh-line" />
                      </label>
                      <select className="form-control" name="frequency" required>
                        <option value="">Frequency</option>
                        <option value="One-time">One-time</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Bi-weekly">Bi-weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="As needed">As needed</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-calendar-line" />
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        name="date"
                        placeholder="Preferred date (optional)"
                        id="appointment-datepicker"
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
                        required
                      >
                        <option value="">Select a service</option>

                        {servicesArray.map((service) => (
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
                          required
                          placeholder="What type of cleaning service do you need?"
                        />
                      </div>
                    </div>
                  )}

                  {/* Property Type */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-building-line" />
                      </label>
                      <select
                        className="form-control"
                        name="propertyType"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        required
                      >
                        <option value="">Property type</option>
                        <option value="Home/Apartment">Home/Apartment</option>
                        <option value="Office">Office</option>
                        <option value="Restaurant">Restaurant</option>
                        <option value="Retail">Retail</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Frequency */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-refresh-line" />
                      </label>
                      <select className="form-control" name="frequency" required>
                        <option value="">Frequency</option>
                        <option value="One-time">One-time</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Bi-weekly">Bi-weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="As needed">As needed</option>
                      </select>
                    </div>
                  </div>

                  {/* Bedrooms (hidden for commercial) */}
                  {!isCommercial && (
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>
                          <i className="ri-home-line" />
                        </label>
                        <select className="form-control" name="bedrooms" required>
                          <option value="">Bedrooms</option>
                          <option value="Studio">Studio</option>
                          <option value="1 Bedroom">1 Bedroom</option>
                          <option value="2 Bedrooms">2 Bedrooms</option>
                          <option value="3 Bedrooms">3 Bedrooms</option>
                          <option value="4+ Bedrooms">4+ Bedrooms</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Bathrooms (hidden for commercial) */}
                  {!isCommercial && (
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>
                          <i className="ri-home-smile-line" />
                        </label>
                        <select className="form-control" name="bathrooms" required>
                          <option value="">Bathrooms</option>
                          <option value="1 Bathroom">1 Bathroom</option>
                          <option value="2 Bathrooms">2 Bathrooms</option>
                          <option value="3 Bathrooms">3 Bathrooms</option>
                          <option value="4+ Bathrooms">4+ Bathrooms</option>
                        </select>
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
                        rows={5}
                        placeholder="Tell us about the property or anything else we should know..."
                      />
                    </div>
                  </div>

                  {/* Status */}
                  <div className="col-lg-12 col-md-12">
                    {status === "success" && (
                      <div className="alert alert-success mb-3">
                        Thanks! Your quote request has been received. We&apos;ll
                        review your request and get back to you within 24 hours.
                      </div>
                    )}

                    {status === "error" && (
                      <div className="alert alert-danger mb-3">
                        Something went wrong while sending your request. Please
                        try again or contact us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      className="default-btn"
                      disabled={status === "sending"}
                    >
                      <i className="ri-arrow-right-line" />

                      {status === "sending" ? "Sending..." : "Request a Quote"}
                    </button>

                    <div className="clearfix" />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* IMAGE */}
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
