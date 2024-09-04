import { sendEmail } from "@/utils/mail"

export async function POST(req: Request) {
    const { from, subject, text, name, html } = await req.json();

    const sender = {
        name: 'My App',
        address: 'no-reply@example.com'
    }

    const receipients = [{
        name: name,
        address: from
    }]

    try {
        const result = await sendEmail ({
            sender,
            receipients,
            subject: subject,
            message: text
        })

        return Response.json({
            accepted: result.accepted,
        })
    } catch (error) {
        return Response.json({ message: 'Unable to send email this time'
        }, { status: 500 })
    }
}