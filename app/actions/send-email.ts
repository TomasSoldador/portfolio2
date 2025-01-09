'use server'

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tomassoldador07@gmail.com',
    pass: "ihvx gsoa zxjj kowe"
  }
})

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    const mailOptions = {
      from: `"Contato do Portfólio" <tomassoldador07@gmail.com>`,
      to: 'tomassoldador07@gmail.com',
      replyTo: email,
      subject: `Novo contato do portfólio de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
      html: `
        <h3>Novo contato do portfólio</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `
    }

    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Email enviado com sucesso!' }
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    return { success: false, message: 'Erro ao enviar email. Tente novamente mais tarde.' }
  }
}


