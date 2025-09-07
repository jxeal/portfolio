import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import emailFunc from "./email";
export async function POST(req: Request) {
  try {
    const { subject, body, email } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const { name, email_id, phone, service, message } = body;
    const emailStr = emailFunc(name, email_id, phone, service, message);
    const mailOption = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      html: emailStr,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
