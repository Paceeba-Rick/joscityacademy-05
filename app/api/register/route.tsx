import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend("re_9xEERgzo_9uWCJif97zvK5KCWeWEAt2c2")

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()
    console.log("[v0] Registration data received:", formData)

    const { firstName, lastName, email, phone, ageCategory, accommodation, experience } = formData
    const fullName = `${firstName} ${lastName}`

    const { data, error } = await resend.emails.send({
      from: "JOS CITY SOCCER ACADEMY <noreply@resend.dev>",
      to: ["info.joscitysoccer@gmail.com"], // Only send to academy email
      subject: "New Registration - JOS CITY SOCCER ACADEMY",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #dc2626; text-align: center;">New Registration Received</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 15px;">Player Information:</h3>
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Age Category:</strong> ${ageCategory}</p>
            <p><strong>Accommodation Needed:</strong> ${accommodation ? "Yes" : "No"}</p>
            <p><strong>Experience Level:</strong> ${experience}</p>
          </div>
          <div style="text-align: center; margin-top: 30px;">
            <p style="color: #6b7280; font-size: 14px;">
              This registration was submitted through the JOS CITY SOCCER ACADEMY website.
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json({ success: false, message: "Failed to send registration email" }, { status: 500 })
    }

    console.log("[v0] Email sent successfully:", { data })
    return NextResponse.json({
      success: true,
      message: "Registration submitted successfully! We will contact you soon.",
    })
  } catch (error) {
    console.error("[v0] Registration error:", error)
    return NextResponse.json({ success: false, message: "Failed to submit registration" }, { status: 500 })
  }
}
