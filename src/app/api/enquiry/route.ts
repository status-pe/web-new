import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildEnquiryEmail, buildAcknowledgementEmail } from "@/lib/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, details } = body;

    if (!name || !email || !service || !details) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const enquiryData = { name, company, email, phone, service, details };

    const [adminResult, ackResult] = await Promise.all([
      resend.emails.send({
        from: "Status P-E <noreply@statuspe.com.sg>",
        to: ["admin@statuspe.com.sg"],
        replyTo: email,
        subject: `New Enquiry: ${service} — ${company || name}`,
        html: buildEnquiryEmail(enquiryData),
      }),
      resend.emails.send({
        from: "Status P-E <noreply@statuspe.com.sg>",
        to: [email],
        replyTo: "admin@statuspe.com.sg",
        subject: `We've Received Your Enquiry — Status P-E Pte Ltd`,
        html: buildAcknowledgementEmail(enquiryData),
      }),
    ]);

    if (adminResult.error) {
      return NextResponse.json({ error: adminResult.error.message }, { status: 500 });
    }

    if (ackResult.error) {
      console.error("Acknowledgement email failed:", ackResult.error.message);
    }

    return NextResponse.json({ success: true, id: adminResult.data?.id });
  } catch {
    return NextResponse.json(
      { error: "Failed to send enquiry" },
      { status: 500 }
    );
  }
}
