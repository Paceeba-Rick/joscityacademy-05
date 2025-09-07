import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_9xEERgzo_9uWCJif97zvK5KCWeWEAt2c2")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log("[v0] Registration data received:", body)

    const { firstName, lastName, email, phone, ageCategory, accommodation, experience } = body

    const emailContent = `
      <h2>New Registration - JOS CITY SOCCER ACADEMY</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Age Category:</strong> ${ageCategory}</p>
      <p><strong>Accommodation Needed:</strong> ${accommodation ? "Yes" : "No"}</p>
      <p><strong>Experience:</strong> ${experience}</p>
      <p><strong>Registration Date:</strong> ${new Date().toLocaleDateString()}</p>
    `

    const emailResult = await resend.emails.send({
      from: "JOS CITY SOCCER ACADEMY <noreply@resend.dev>",
      to: "info.joscitysoccer@gmail.com",
      subject: `New Registration: ${firstName} ${lastName}`,
      html: emailContent,
    })

    console.log("[v0] Email sent successfully:", emailResult)

    return NextResponse.json({
      success: true,
      message: "Registration submitted successfully! We will contact you soon.",
    })
  } catch (error) {
    console.error("[v0] Registration error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit registration. Please try again.",
      },
      { status: 500 },
    )
  }
}
