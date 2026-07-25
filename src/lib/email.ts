import emailjs from "@emailjs/browser";

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(payload: ContactPayload) {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      time: new Date().toLocaleString(),
      reply_to: payload.email,
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  );
}
