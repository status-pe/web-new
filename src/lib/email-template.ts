interface EnquiryData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  details: string;
}

export function buildEnquiryEmail(data: EnquiryData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry — Status P-E Pte Ltd</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);padding:44px 40px;text-align:center;">
              <img src="https://www.statuspe.com.sg/images/logo-full.png" alt="Status P-E Pte Ltd" width="220" style="display:block;margin:0 auto;max-width:220px;height:auto;" />
            </td>
          </tr>

          <!-- Blue accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#1976D2,#42a5f5,#1976D2);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="padding:32px 40px 0 40px;">
              <h1 style="margin:0 0 6px 0;font-size:24px;font-weight:700;color:#0f172a;letter-spacing:-0.3px;">New Enquiry Received</h1>
              <p style="margin:0;font-size:14px;color:#64748b;">A potential client has submitted an enquiry via the website.</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:20px 40px 0 40px;">
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:0;" />
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:24px 40px 0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 16px;background-color:#f8fafc;border-radius:8px;margin-bottom:8px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="120" style="font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;padding:2px 0;">Name</td>
                        <td style="font-size:15px;color:#0f172a;font-weight:500;padding:2px 0;">${escapeHtml(data.name)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height:8px;font-size:0;line-height:0;">&nbsp;</td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#f8fafc;border-radius:8px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="120" style="font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;padding:2px 0;">Company</td>
                        <td style="font-size:15px;color:#0f172a;font-weight:500;padding:2px 0;">${escapeHtml(data.company)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height:8px;font-size:0;line-height:0;">&nbsp;</td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#f8fafc;border-radius:8px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="120" style="font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;padding:2px 0;">Email</td>
                        <td style="font-size:15px;color:#1976D2;padding:2px 0;"><a href="mailto:${escapeHtml(data.email)}" style="color:#1976D2;text-decoration:none;">${escapeHtml(data.email)}</a></td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height:8px;font-size:0;line-height:0;">&nbsp;</td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#f8fafc;border-radius:8px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="120" style="font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;padding:2px 0;">Phone</td>
                        <td style="font-size:15px;color:#0f172a;font-weight:500;padding:2px 0;">${escapeHtml(data.phone)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height:8px;font-size:0;line-height:0;">&nbsp;</td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#e3f2fd;border-radius:8px;border-left:3px solid #1976D2;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="120" style="font-size:12px;font-weight:600;color:#1565C0;text-transform:uppercase;letter-spacing:0.5px;vertical-align:top;padding:2px 0;">Service</td>
                        <td style="font-size:15px;color:#0d47a1;font-weight:600;padding:2px 0;">${escapeHtml(data.service)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Project Details -->
          <tr>
            <td style="padding:24px 40px 0 40px;">
              <p style="margin:0 0 8px 0;font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Project Details</p>
              <div style="padding:16px 20px;background-color:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
                <p style="margin:0;font-size:14px;color:#334155;line-height:1.7;white-space:pre-wrap;">${escapeHtml(data.details)}</p>
              </div>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="padding:28px 40px 0 40px;text-align:center;">
              <a href="mailto:${escapeHtml(data.email)}?subject=RE: Enquiry from ${escapeHtml(data.company)} — Status P-E" style="display:inline-block;padding:14px 36px;background-color:#1976D2;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;border-radius:8px;letter-spacing:0.3px;">Reply to ${escapeHtml(data.name)}</a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:28px 40px 0 40px;">
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:0;" />
            </td>
          </tr>

          <!-- Sign-off -->
          <tr>
            <td style="padding:24px 40px 0 40px;">
              <p style="margin:0;font-size:14px;color:#334155;line-height:1.6;">
                Warm regards,<br />
                <strong style="color:#0f172a;">Admin</strong><br />
                <span style="color:#64748b;font-size:13px;">Status P-E Pte Ltd</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:32px 40px 36px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;border-radius:8px;border-top:2px solid #e2e8f0;">
                <tr>
                  <td style="padding:16px 20px;font-size:12px;color:#94a3b8;line-height:1.6;">
                    <strong style="color:#64748b;">Status P-E Pte Ltd</strong><br />
                    Blk 9010, Tampines Street 93, #01-137, Singapore 528844<br />
                    <a href="tel:+6597373178" style="color:#94a3b8;text-decoration:none;">+65 9737 3178</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="mailto:admin@statuspe.com.sg" style="color:#94a3b8;text-decoration:none;">admin@statuspe.com.sg</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.statuspe.com.sg" style="color:#1976D2;text-decoration:none;">statuspe.com.sg</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildAcknowledgementEmail(data: EnquiryData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Enquiry Received — Status P-E Pte Ltd</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f1f5f9;padding:40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);padding:44px 40px;text-align:center;">
              <img src="https://www.statuspe.com.sg/images/logo-full.png" alt="Status P-E Pte Ltd" width="220" style="display:block;margin:0 auto;max-width:220px;height:auto;" />
            </td>
          </tr>

          <!-- Blue accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#1976D2,#42a5f5,#1976D2);font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:32px 40px 0 40px;">
              <h1 style="margin:0 0 6px 0;font-size:24px;font-weight:700;color:#0f172a;letter-spacing:-0.3px;">Thank You for Your Enquiry</h1>
              <p style="margin:0;font-size:14px;color:#64748b;">We have received your enquiry and will get back to you shortly.</p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:20px 40px 0 40px;">
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:0;" />
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:24px 40px 0 40px;">
              <p style="margin:0;font-size:15px;color:#334155;line-height:1.7;">
                Dear ${escapeHtml(data.name)},
              </p>
              <p style="margin:16px 0 0 0;font-size:15px;color:#334155;line-height:1.7;">
                Thank you for reaching out to <strong style="color:#0f172a;">Status P-E Pte Ltd</strong>. We have received your enquiry and our engineering team is reviewing your requirements.
              </p>
              <p style="margin:16px 0 0 0;font-size:15px;color:#334155;line-height:1.7;">
                We will respond within <strong style="color:#0f172a;">1–2 business days</strong> with a detailed quotation or any follow-up questions.
              </p>
            </td>
          </tr>

          <!-- Summary heading -->
          <tr>
            <td style="padding:24px 40px 0 40px;">
              <p style="margin:0 0 12px 0;font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Your Enquiry Summary</p>
            </td>
          </tr>

          <!-- Summary details -->
          <tr>
            <td style="padding:0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
                <tr>
                  <td style="padding:16px 20px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="100" style="font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;padding:6px 0;vertical-align:top;">Service</td>
                        <td style="font-size:14px;color:#0d47a1;font-weight:600;padding:6px 0;">${escapeHtml(data.service)}</td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding:4px 0;"><hr style="border:none;border-top:1px solid #e2e8f0;margin:0;" /></td>
                      </tr>
                      <tr>
                        <td width="100" style="font-size:12px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;padding:6px 0;vertical-align:top;">Details</td>
                        <td style="font-size:14px;color:#334155;line-height:1.6;padding:6px 0;white-space:pre-wrap;">${escapeHtml(data.details)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contact info -->
          <tr>
            <td style="padding:24px 40px 0 40px;">
              <p style="margin:0;font-size:14px;color:#334155;line-height:1.7;">
                In the meantime, feel free to contact us directly if you have any urgent requirements:
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:12px;">
                <tr>
                  <td style="padding:4px 0;font-size:14px;color:#64748b;">Phone:&nbsp;&nbsp;</td>
                  <td style="padding:4px 0;font-size:14px;"><a href="tel:+6597373178" style="color:#1976D2;text-decoration:none;font-weight:500;">+65 9737 3178</a></td>
                </tr>
                <tr>
                  <td style="padding:4px 0;font-size:14px;color:#64748b;">Email:&nbsp;&nbsp;</td>
                  <td style="padding:4px 0;font-size:14px;"><a href="mailto:admin@statuspe.com.sg" style="color:#1976D2;text-decoration:none;font-weight:500;">admin@statuspe.com.sg</a></td>
                </tr>
                <tr>
                  <td style="padding:4px 0;font-size:14px;color:#64748b;">WhatsApp:&nbsp;&nbsp;</td>
                  <td style="padding:4px 0;font-size:14px;"><a href="https://wa.me/6597373178" style="color:#1976D2;text-decoration:none;font-weight:500;">Chat with us</a></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:28px 40px 0 40px;">
              <hr style="border:none;border-top:1px solid #e2e8f0;margin:0;" />
            </td>
          </tr>

          <!-- Sign-off -->
          <tr>
            <td style="padding:24px 40px 0 40px;">
              <p style="margin:0;font-size:14px;color:#334155;line-height:1.6;">
                Warm regards,<br />
                <strong style="color:#0f172a;">Admin</strong><br />
                <span style="color:#64748b;font-size:13px;">Status P-E Pte Ltd</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:32px 40px 36px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc;border-radius:8px;border-top:2px solid #e2e8f0;">
                <tr>
                  <td style="padding:16px 20px;font-size:12px;color:#94a3b8;line-height:1.6;">
                    <strong style="color:#64748b;">Status P-E Pte Ltd</strong><br />
                    Blk 9010, Tampines Street 93, #01-137, Singapore 528844<br />
                    <a href="tel:+6597373178" style="color:#94a3b8;text-decoration:none;">+65 9737 3178</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="mailto:admin@statuspe.com.sg" style="color:#94a3b8;text-decoration:none;">admin@statuspe.com.sg</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://www.statuspe.com.sg" style="color:#1976D2;text-decoration:none;">statuspe.com.sg</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
