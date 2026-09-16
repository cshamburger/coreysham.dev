import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "CoreySham.dev <contact@coreysham.dev>",
            to: ["corey@coreysham.dev"],
            replyTo: email,
            subject: `Portfolio Contact: ${name}`,
            text: `
New message from your portfolio:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
        });

        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                { error: "Unable to send message." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Contact form error:", error);

        return NextResponse.json(
            { error: "Unable to send message." },
            { status: 500 }
        );
    }
}