import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "harishraghav@yectra.com",
    to: "example.gmail.com",
    subject: "Hola!",
    react: <WelcomeTemplate name="Harish" />,
  });
  return NextResponse.json("Email send successfully");
}
