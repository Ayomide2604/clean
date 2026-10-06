import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      subject,
      message,
    } = body;

    // Validate required fields
    if (!name || !email) {
      return Response.json(
        {
          success: false,
          error: "Name and email are required.",
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return Response.json(
        {
          success: false,
          error: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    const { data, error } = await resend.emails.send({
      from: "780 Property Cleaners <onboarding@resend.dev>",
      to: [email],
      subject: "We Received Your Message - 780 Property Cleaners",

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Message Received</title>
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
                Thank You for Contacting Us
              </h2>

              <p>
                Hi ${name},
              </p>

              <p>
                Thank you for reaching out to
                <strong>780 Property Cleaners</strong>.
                We have received your message and will get back to you
                shortly.
              </p>

              <div
                style="
                  margin: 25px 0;
                  padding: 20px;
                  background: #f5f7f8;
                  border-left: 4px solid #2caac1;
                "
              >
                <p style="margin: 0 0 8px;">
                  <strong>Subject:</strong> ${subject || "General Inquiry"}
                </p>

                ${
                  phone
                    ? `
                      <p style="margin: 0;">
                        <strong>Phone:</strong> ${phone}
                      </p>
                    `
                    : ""
                }
              </div>

              <p>
                If your message is regarding a cleaning service or quote,
                we'll review the information you provided and contact you
                with the next steps.
              </p>

              <p>
                We appreciate your interest in
                <strong>780 Property Cleaners</strong>.
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
                <strong>780 Property Cleaners</strong><br />
                Edmonton &amp; Surrounding Areas<br />
                Alberta, Canada<br />
                780propertycleaners@gmail.com
              </p>

            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          success: false,
          error: "Failed to send confirmation email.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Contact confirmation error:", error);

    return Response.json(
      {
        success: false,
        error: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}
