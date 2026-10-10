import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      location,
      date,
      service,
      propertyType,
      bedrooms,
      bathrooms,
      frequency,
      message,
    } = body;

    if (!name || !email || !phone || !location || !service) {
      return Response.json(
        {
          success: false,
          error: "Required quote information is missing.",
        },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return Response.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    console.log("Sending confirmation email to:", email);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",

      to: [email],

      subject: "We Received Your Quote Request - 780 Property Cleaners",

      html: `
          <!DOCTYPE html>

          <html>
            <head>
              <meta charset="UTF-8" />

              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
              />

              <title>
                Quote Request Received
              </title>
            </head>

            <body
              style="
                margin: 0;
                padding: 0;
                background-color: #f5f7f8;
                font-family: Arial, Helvetica, sans-serif;
                color: #333333;
              "
            >

              <div
                style="
                  max-width: 600px;
                  margin: 40px auto;
                  background: #ffffff;
                  padding: 40px;
                  border-radius: 8px;
                "
              >

                <h2
                  style="
                    margin-top: 0;
                    color: #2caac1;
                  "
                >
                  Quote Request Received
                </h2>

                <p>
                  Hi ${name},
                </p>

                <p>
                  Thank you for contacting
                  <strong>
                    780 Property Cleaners
                  </strong>.
                </p>

                <p>
                  We have received your cleaning
                  quote request and will review
                  the details you provided.
                </p>

                <p>
                  We will respond to your request within 24 hours
                  with a customized quote and next steps.
                </p>

                <div
                  style="
                    margin: 25px 0;
                    padding: 20px;
                    background: #f5f7f8;
                    border-left: 4px solid #2caac1;
                  "
                >

                  <p style="margin: 0 0 10px;">
                    <strong>
                      Service:
                    </strong>
                    ${service}
                  </p>

                  <p style="margin: 0 0 10px;">
                    <strong>
                      Property Type:
                    </strong>
                    ${propertyType || "Not specified"}
                  </p>

                  ${bedrooms ? `
                    <p style="margin: 0 0 10px;">
                      <strong>
                        Bedrooms:
                      </strong>
                      ${bedrooms}
                    </p>
                  ` : ""}

                  ${bathrooms ? `
                    <p style="margin: 0 0 10px;">
                      <strong>
                        Bathrooms:
                      </strong>
                      ${bathrooms}
                    </p>
                  ` : ""}

                  <p style="margin: 0 0 10px;">
                    <strong>
                      Cleaning Frequency:
                    </strong>
                    ${frequency || "Not specified"}
                  </p>

                  <p style="margin: 0 0 10px;">
                    <strong>
                      Property Location:
                    </strong>
                    ${location}
                  </p>

                  ${date ? `
                    <p style="margin: 0 0 10px;">
                      <strong>
                        Preferred Date:
                      </strong>
                      ${date}
                    </p>
                  ` : ""}

                  <p style="margin: 0;">
                    <strong>
                      Phone:
                    </strong>
                    ${phone}
                  </p>

                </div>

                ${
                  message
                    ? `
                      <div
                        style="
                          margin: 25px 0;
                          padding: 20px;
                          background: #fafafa;
                          border: 1px solid #eeeeee;
                        "
                      >

                        <p
                          style="
                            margin: 0 0 8px;
                          "
                        >
                          <strong>
                            Additional Information:
                          </strong>
                        </p>

                        <p
                          style="
                            margin: 0;
                            white-space: pre-line;
                          "
                        >
                          ${message}
                        </p>

                      </div>
                    `
                    : ""
                }

                <p>
                  We appreciate your interest in
                  <strong>
                    780 Property Cleaners
                  </strong>.
                </p>

                <hr
                  style="
                    border: none;
                    border-top: 1px solid #eeeeee;
                    margin: 30px 0;
                  "
                />

                <p
                  style="
                    margin-bottom: 0;
                    font-size: 14px;
                    color: #666666;
                  "
                >

                  <strong>
                    780 Property Cleaners
                  </strong>

                  <br />

                  Edmonton &amp; Surrounding Areas

                  <br />

                  Alberta, Canada

                  <br />

                  clean@780propertycleaners.ca

                </p>

              </div>

            </body>
          </html>
        `,
    });

    if (error) {
      console.error("Resend quote confirmation error:", error);
      console.error("Error details:", JSON.stringify(error, null, 2));

      return Response.json(
        {
          success: false,
          error: error.message || "Failed to send confirmation email.",
        },
        { status: 500 },
      );
    }

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Quote confirmation error:", error);

    return Response.json(
      {
        success: false,
        error: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}
