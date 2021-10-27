"use strict";

const { Router } = require('express');


const nodemailer = require('nodemailer');

function EmailSend(app){
    const router = Router();
    app.use('/api', router);
    router.post('/send-email', async (req, res) => {
        const { name, email, phone, message } = req.body;
        
     const contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Mentor: ${name}</li>
            <li>User Email: ${email}</li>
            <li>PhoneNumber: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;
    
        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'vaintegracion@gmail.com',//Correo Mentor
                pass: 'V71858727NEM'
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    
       // Step 2
        let mailOptions = {
            from: 'vaintegracion@gmail.com', // TODO: email sender
            to: 'valentin.antunez@unmsm.edu.pe', // Correo del Mentorizado
            subject: 'Nodemailer - Test',
            text: 'Wooohooo it works!!',
            html: contentHTML
        };
    
        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                return log('Error occurs');
            }
            return log('Email sent!!!');
        });
         res.redirect('/sucess.html');
    });

   

    
};
module.exports = EmailSend;