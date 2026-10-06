"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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

    /*
     * ---------------------------------------------
     * Web3Forms configuration
     * ---------------------------------------------
     */

    formData.append("access_key", accessKey);

    formData.append("subject", "New Contact Message - 780 Property Cleaners");

    formData.append("from_name", "780 Property Cleaners Website");

    try {
      /*
       * ---------------------------------------------
       * 1. Send submission to Web3Forms
       * ---------------------------------------------
       */

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

      /*
       * ---------------------------------------------
       * 2. Send confirmation to customer through Resend
       * ---------------------------------------------
       */

      const confirmationResponse = await fetch("/api/contact-confirmation", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject_message"),
          message: formData.get("message"),
        }),
      });

      const confirmationResult = await confirmationResponse.json();

      /*
       * The Web3Forms submission was successful.
       *
       * Even if Resend fails, we don't show the customer
       * an error because their original message was still
       * successfully delivered to 780 Property Cleaners.
       */

      if (!confirmationResponse.ok) {
        console.error("Resend confirmation error:", confirmationResult);
      }

      /*
       * ---------------------------------------------
       * 3. Success
       * ---------------------------------------------
       */

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);

      setStatus("error");
    }
  };

  return (
    <div className="contact-form-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-form-content">
              <span>Contact Form</span>

              <h3>Have a Question? Get in Touch With Us</h3>

              <ul className="action-list">
                {/* Facebook */}
                <li>
                  <a
                    href="https://www.facebook.com/780propertycleaners"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="ri-facebook-line" />
                  </a>
                </li>

                {/* Instagram */}
                <li>
                  <a
                    href="https://www.instagram.com/780propertycleaners"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="ri-instagram-fill" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-form-wrap">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row">
                  {/* NAME */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-user-3-line" />
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-mail-line" />
                      </label>

                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-phone-line" />
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        required
                        placeholder="Enter Number"
                      />
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-book-line" />
                      </label>

                      <input
                        type="text"
                        name="subject_message"
                        className="form-control"
                        required
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <label>
                        <i className="ri-pencil-line" />
                      </label>

                      <textarea
                        name="message"
                        className="form-control"
                        cols={30}
                        rows={6}
                        required
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>

                  {/* STATUS + BUTTON */}
                  <div className="col-lg-12 col-md-12">
                    {/* Success */}
                    {status === "success" && (
                      <div className="alert alert-success mb-3">
                        Thanks! Your message has been received. We&apos;ll get
                        back to you shortly.
                      </div>
                    )}

                    {/* Error */}
                    {status === "error" && (
                      <div className="alert alert-danger mb-3">
                        Something went wrong while sending your message. Please
                        try again or contact us directly.
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="default-btn"
                      disabled={status === "sending"}
                    >
                      <i className="ri-arrow-right-line" />

                      {status === "sending" ? "Sending..." : "Send Message"}
                    </button>

                    <div className="clearfix" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
