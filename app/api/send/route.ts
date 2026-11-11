import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactFormEmail from "../../../emails/ContactFormEmail";
import QuoteRequestEmail from "../../../emails/QuoteRequestEmail";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not defined in environment variables");
      return NextResponse.json(
        { error: "Email service is not configured on the server" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { error: "Missing required fields: type and data" },
        { status: 400 }
      );
    }

    let emailComponent;
    let subject = "";

    switch (type) {
      case "contact": {
        if (!data.name || !data.email || !data.phone || !data.message) {
          return NextResponse.json(
            { error: "Missing required fields for contact inquiry" },
            { status: 400 }
          );
        }

        subject = `Contact Inquiry from ${data.name}${data.companyName ? ` (${data.companyName})` : ""}`;
        emailComponent = ContactFormEmail({
          name: data.name,
          email: data.email,
          phone: data.phone,
          companyName: data.companyName,
          message: data.message,
        });
        break;
      }

      case "quote": {
        if (
          !data.name ||
          !data.email ||
          !data.phone ||
          !data.species ||
          !data.productType ||
          !data.volume ||
          !data.destination
        ) {
          return NextResponse.json(
            { error: "Missing required fields for quote request" },
            { status: 400 }
          );
        }

        subject = `New Timber RFQ: ${data.species} (${data.productType}) - ${data.companyName || data.name}`;
        emailComponent = QuoteRequestEmail({
          name: data.name,
          email: data.email,
          phone: data.phone,
          companyName: data.companyName,
          species: data.species,
          productType: data.productType,
          volume: data.volume,
          destination: data.destination,
          specifications: data.specifications,
        });
        break;
      }

      default:
        return NextResponse.json(
          { error: `Unknown email type: ${type}` },
          { status: 400 }
        );
    }

    // Explicitly render to HTML string to avoid runtime import issues
    const htmlContent = await render(emailComponent);

    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "Support@primewoodglobal.com";
    const sender = process.env.RESEND_FROM_EMAIL || "Prime Wood Global <noreply@primewoodglobal.com>";

    let { data: emailData, error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: data.email,
      subject: subject,
      html: htmlContent,
    });

    // If domain is not yet verified on Resend, fallback to onboarding@resend.dev so the lead is never lost
    if (error && (error.message?.toLowerCase().includes("domain") || error.name === "validation_error")) {
      console.warn("Domain not yet verified in Resend. Falling back to onboarding@resend.dev:", error.message);
      const retryResult = await resend.emails.send({
        from: "Prime Wood Global <onboarding@resend.dev>",
        to: [recipient],
        replyTo: data.email,
        subject: subject,
        html: htmlContent,
      });

      if (!retryResult.error) {
        emailData = retryResult.data;
        error = null;
      } else {
        error = retryResult.error;
      }
    }

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email via Resend", details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        emailId: emailData?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Send Server Error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}
