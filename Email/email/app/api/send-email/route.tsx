import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  resend.emails.send({
    from: "harishraghav@yectra.com",
    to: "example.gmail.com",
    subject: "Hola!",
    react: <WelcomeTemplate name="Harish" />,
  });
}
