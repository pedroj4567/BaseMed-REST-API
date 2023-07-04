import nodemailer from 'nodemailer';


async function sendEmail({email,name,lastname},password) {
  try {
    // Configuración del transportista SMTP
    let transport = nodemailer.createTransport({
      host: process.env.HOST_EMAIL,
      port: process.env.PORT_EMAIL,
      secure: false,
      auth: {
          user: process.env.USER_EMAIL,
          pass: process.env.PASSWORD_EMAIL
      }
      });

    //Enviar correo electrónico
    let info = await transport.sendMail({
      from: 'baseMedsystem - register',
      to: email,
      subject: 'Registro doctor - BASEMEDSYSTEM',
      html: `
            <h1>Bievenid@ a BaseMed</h1>
            <p>Saludo estimad@ ${name} ${lastname}</p>
            <p>Anexo al correo les dejamos sus credenciales de acceso</p>
            <ul>
                <li>Correo Electronico: ${email}</li>
                <li>Crendencial: ${password}</li>
            </ul>

            <span>
            Por su seguridad cambie la credencial enviada en este correo 
            en la seccion de recuperar credencial
            </span>
      `
    });

    console.log('Correo electrónico enviado: ', info.messageId);
  } catch (error) {
    console.log('Error al enviar correo electrónico: ', error);
  }
}

export { sendEmail };

