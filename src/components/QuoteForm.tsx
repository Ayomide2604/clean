"use client";

import { useState, useEffect } from "react";
import { services } from "@/data/services";

export default function QuoteForm() {
  const [selectedService, setSelectedService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [servicesArray, setServicesArray] = useState<any[]>([]);

  useEffect(() => {
    setServicesArray(Array.from(services));
  }, []);

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

    formData.append("access_key", accessKey);
    formData.append("subject", "New Quote Request - 780 Property Cleaners");
    formData.append("from_name", "780 Property Cleaners Website");

    let selectedServiceName = selectedService;
    if (selectedService === "other") {
      selectedServiceName = otherService;
    } else {
      const service = servicesArray.find(
        (s: any) => s.slug === selectedService,
      );
      selectedServiceName = service?.title || selectedService;
    }

    formData.set("service", selectedServiceName);

    try {
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

      setStatus("success");

      // Hide animation and reset form after 3 seconds
      setTimeout(() => {
        form.reset();
        setSelectedService("");
        setOtherService("");
        setPropertyType("");
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Quote submission error:", error);
      setStatus("error");
    }
  };

  const isCommercial =
    propertyType === "Office" ||
    propertyType === "Restaurant" ||
    propertyType === "Retail";

  return (
    <div className="appointment-form-wrap">
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="row">
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
                placeholder="Property location (Edmonton area)"
              />
            </div>
          </div>

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
                id="quote-datepicker"
              />
            </div>
          </div>

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

          <div className="col-lg-12 col-md-12">
            {status === "success" && (
              <div className="alert alert-success mb-3">
                Thanks! Your quote request has been received. We&apos;ll review
                your request and get back to you within 24 hours.
              </div>
            )}

            {status === "error" && (
              <div className="alert alert-danger mb-3">
                Something went wrong while sending your request. Please try
                again or contact us directly.
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

          {/* Success Animation Overlay */}
          {status === "success" && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
                animation: "fadeIn 0.3s ease-in",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "60px 40px",
                  borderRadius: "12px",
                  textAlign: "center",
                  animation: "scaleIn 0.5s ease-out",
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 20px",
                    borderRadius: "50%",
                    backgroundColor: "#4CAF50",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "checkmark 0.6s ease-in-out",
                  }}
                >
                  <i
                    className="ri-check-line"
                    style={{
                      fontSize: "48px",
                      color: "white",
                    }}
                  />
                </div>
                <h2
                  style={{
                    margin: "0 0 10px",
                    color: "#333",
                    fontSize: "28px",
                  }}
                >
                  Thank You!
                </h2>
                <p
                  style={{
                    margin: "0",
                    color: "#666",
                    fontSize: "16px",
                  }}
                >
                  Your quote request has been received.
                </p>
                <p
                  style={{
                    margin: "10px 0 0",
                    color: "#999",
                    fontSize: "14px",
                  }}
                >
                  We'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
