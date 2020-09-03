const nodemailer = require("nodemailer");

module.exports = {
    nodemailer,
    sendEmail(to = "kuhnidev@gmail.com", subject = "Prueba de correo", text = "Hola Kuhni Dev", html = null) {
        const mailFrom = process.env.MAIL_FROM;
        const mailUser = process.env.MAIL_USER;
        const mailPassword = process.env.MAIL_PASSWORD;
        const mailServer = process.env.MAIL_SERVER;
        const mailPort = process.env.MAIL_PORT;
        const mailSecure = process.env.MAIL_SECURE;

        transporter = nodemailer.createTransport({
            host: mailServer,
            port: Number(mailPort),
            secure: /true|1/i.test(mailSecure),
            auth: {
                user: mailUser,
                pass: mailPassword
            }
        });

        const info = await transporter.sendMail({
            from: mailFrom,
            to,
            subject,
            text,
            html: html || text,
        });

        if (!info) throw `No se pudo enviar el correo desde ${mailFrom} hacía ${to}`;

        // console.log("sendEmail", info);

        return info.messageId;
    }
}