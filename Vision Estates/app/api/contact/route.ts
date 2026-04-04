export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Basic validation
    const { name, email, whatsapp, product, message } = body

    if (!name || !email || !product || !message) {
      return Response.json(
        { error: 'Campos obrigatórios ausentes' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Log the contact form data (in development only)
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact Form Submission:', {
        name,
        email,
        whatsapp,
        product,
        message,
        timestamp: new Date().toISOString()
      })
    }

    // TODO: Integrate with email service (Resend, SendGrid, Nodemailer, etc.)
    // const response = await sendEmail({
    //   to: 'contato@visionestates.com.br',
    //   subject: `Novo contato: ${name}`,
    //   html: `<p>Nome: ${name}</p><p>Email: ${email}</p><p>Produto: ${product}</p><p>Mensagem: ${message}</p>`
    // })

    return Response.json(
      {
        success: true,
        message: 'Formulário recebido com sucesso'
      },
      { status: 200 }
    )
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Contact form error:', error)
    }
    return Response.json(
      { error: 'Erro ao processar formulário' },
      { status: 500 }
    )
  }
}
