const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");


router.post('/email', (req, res) => {


    const outputHTML = `
    
    <h2>Mail Details</h2>
    <ul>
        <li>Name: ${req.body.name} </li>
        <li>Email: ${req.body.email} </li>
        <li>Phone: ${req.body.phone} </li>
    </ul>
    <h3>Message </h3>
    <p>${req.body.message}</p>`

    async function main() {

        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: "admin@admin.com", // CHANGE_THIS
                pass: "password", // CHANGE_THIS
            }
        });

        let info = await transporter.sendMail({
            from: '"Node Proje Contact Form" <admin@admin.com>', // sender address
            to: "admin@admin.com", // list of receivers
            subject: "Node Contact Message", // Subject line
            text: "Hello world?", // plain text body
            html: outputHTML, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
        req.session.sessionFlash = {
            type: 'alert alert-success',
            message: 'Your message has been sent successfully.'
        }
        res.redirect('/contact');
    }
    main().catch(console.error);
})

module.exports = router;