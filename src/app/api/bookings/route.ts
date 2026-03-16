import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  return new Resend(apiKey);
}

interface BookingPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: {
    id: string;
    title: string;
    duration: string;
  };
  date: string;
  time: string;
  notes: string;
}

export async function POST(request: Request) {
  try {
    const body: BookingPayload = await request.json();

    const { firstName, lastName, email, phone, service, date, time, notes } =
      body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !service || !date || !time) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const adminEmail = process.env.ADMIN_EMAIL;
    const fromEmail = process.env.FROM_EMAIL || "bookings@bodyfixosteo.com";

    if (!adminEmail) {
      console.error("ADMIN_EMAIL environment variable is not set");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    const resend = getResendClient();

    const patientName = `${firstName} ${lastName}`;
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // Send both emails concurrently
    const [adminResult, patientResult] = await Promise.all([
      // Email 1: Notification to admin
      resend.emails.send({
        from: `BodyFix Bookings <${fromEmail}>`,
        to: adminEmail,
        subject: `🚨 New Booking: ${patientName} - ${service.title}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #102a43; padding: 24px 32px; border-radius: 12px 12px 0 0;">
              <h1 style="color: #ffffff; font-size: 20px; margin: 0;">New Booking Request</h1>
            </div>
            <div style="background: #ffffff; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
              <h2 style="color: #1f9751; font-size: 18px; margin: 0 0 20px;">Patient Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #627d98; font-size: 14px; width: 140px;">Name</td>
                  <td style="padding: 8px 0; color: #102a43; font-size: 14px; font-weight: 600;">${patientName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #627d98; font-size: 14px;">Email</td>
                  <td style="padding: 8px 0; color: #102a43; font-size: 14px;"><a href="mailto:${email}" style="color: #1f9751;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #627d98; font-size: 14px;">Phone</td>
                  <td style="padding: 8px 0; color: #102a43; font-size: 14px;"><a href="tel:${phone}" style="color: #1f9751;">${phone}</a></td>
                </tr>
              </table>

              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

              <h2 style="color: #1f9751; font-size: 18px; margin: 0 0 20px;">Appointment Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #627d98; font-size: 14px; width: 140px;">Service</td>
                  <td style="padding: 8px 0; color: #102a43; font-size: 14px; font-weight: 600;">${service.title}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #627d98; font-size: 14px;">Duration</td>
                  <td style="padding: 8px 0; color: #102a43; font-size: 14px;">${service.duration}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #627d98; font-size: 14px;">Date</td>
                  <td style="padding: 8px 0; color: #102a43; font-size: 14px; font-weight: 600;">${formattedDate}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #627d98; font-size: 14px;">Time</td>
                  <td style="padding: 8px 0; color: #102a43; font-size: 14px; font-weight: 600;">${time}</td>
                </tr>
              </table>

              ${
                notes
                  ? `
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                <h2 style="color: #1f9751; font-size: 18px; margin: 0 0 12px;">Patient Notes</h2>
                <p style="color: #334e68; font-size: 14px; line-height: 1.6; margin: 0; padding: 16px; background: #f7f9fc; border-radius: 8px;">${notes}</p>
              `
                  : ""
              }
            </div>
          </div>
        `,
      }),

      // Email 2: Confirmation to patient
      resend.emails.send({
        from: `BodyFix Osteopathy <${fromEmail}>`,
        to: email,
        subject: "Your Appointment Confirmation - BodyFix Osteopathy",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1f9751; padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
              <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Booking Confirmed ✓</h1>
              <p style="color: #c6f7d9; font-size: 14px; margin: 8px 0 0;">BodyFix Osteopathy, Birmingham</p>
            </div>
            <div style="background: #ffffff; padding: 32px; border: 1px solid #e2e8f0; border-top: none;">
              <p style="color: #334e68; font-size: 16px; line-height: 1.6; margin: 0 0 24px;">
                Hi ${firstName},
              </p>
              <p style="color: #334e68; font-size: 14px; line-height: 1.6; margin: 0 0 24px;">
                Thank you for booking with BodyFix. Your appointment with Aleeza has been confirmed. Here are your details:
              </p>

              <div style="background: #f7f9fc; border-radius: 12px; padding: 24px; margin: 0 0 24px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 10px 0; color: #627d98; font-size: 13px; width: 100px;">Service</td>
                    <td style="padding: 10px 0; color: #102a43; font-size: 14px; font-weight: 600;">${service.title} (${service.duration})</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; color: #627d98; font-size: 13px;">Date</td>
                    <td style="padding: 10px 0; color: #102a43; font-size: 14px; font-weight: 600;">${formattedDate}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; color: #627d98; font-size: 13px;">Time</td>
                    <td style="padding: 10px 0; color: #102a43; font-size: 14px; font-weight: 600;">${time}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; color: #627d98; font-size: 13px;">Location</td>
                    <td style="padding: 10px 0; color: #102a43; font-size: 14px;">Birmingham, UK</td>
                  </tr>
                </table>
              </div>

              <p style="color: #334e68; font-size: 14px; line-height: 1.6; margin: 0 0 8px;">
                <strong>Before your appointment:</strong>
              </p>
              <ul style="color: #334e68; font-size: 14px; line-height: 1.8; margin: 0 0 24px; padding-left: 20px;">
                <li>Wear comfortable, loose-fitting clothing</li>
                <li>Arrive 5 minutes early to complete any paperwork</li>
                <li>Bring a list of any medications you are currently taking</li>
              </ul>

              <p style="color: #334e68; font-size: 14px; line-height: 1.6; margin: 0 0 8px;">
                Need to reschedule or cancel? Please contact us at least 24 hours before your appointment.
              </p>

              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

              <p style="color: #627d98; font-size: 13px; line-height: 1.6; margin: 0;">
                Looking forward to seeing you!<br />
                <strong style="color: #102a43;">Aleeza</strong><br />
                Lead Osteopath, BodyFix
              </p>
            </div>
            <div style="padding: 20px; text-align: center; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px; background: #f7f9fc;">
              <p style="color: #829ab1; font-size: 12px; margin: 0;">
                BodyFix Osteopathy · Birmingham, UK<br />
                info@bodyfixosteo.com
              </p>
            </div>
          </div>
        `,
      }),
    ]);

    // Check for errors from either email
    if (adminResult.error || patientResult.error) {
      console.error("Email send errors:", {
        admin: adminResult.error,
        patient: patientResult.error,
      });
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send confirmation emails. Please contact us directly.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
