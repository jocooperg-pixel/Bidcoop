const { Resend } = require('resend');

async function testResendDisplay() {
  const resend = new Resend('re_W2m4R9K7_H3fW7pQ2mL9kP8vN7x5'); // We will test resend API key or check Resend dispatch
  try {
    const data = await resend.emails.send({
      from: 'Alertas BidCoop <onboarding@resend.dev>',
      to: ['jonathan.cooper.g@gmail.com'],
      subject: '[BidCoop] Prueba de Remitente Único: Alertas BidCoop',
      html: '<h2>Prueba de Remitente Resend</h2><p>Este correo no expone la casilla personal de gmail.</p>'
    });
    console.log('✅ Resend Sent:', data);
  } catch (err) {
    console.error('❌ Resend Error:', err);
  }
}

testResendDisplay();
