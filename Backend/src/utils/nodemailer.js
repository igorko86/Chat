const nodemailer = require('nodemailer');


const smtpTransport = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: {
        user: 'username@gmail.com',
        pass: 'password'
    }
});