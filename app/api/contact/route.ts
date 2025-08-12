import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.formData()
  const name = data.get('name')
  const email = data.get('email')
  const message = data.get('message')
  // TODO: integrar Resend/Nodemailer
  console.log('Message from', name, email, message)
  return NextResponse.json({ ok: true })
}
