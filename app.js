const express = require('express')
const app = express()
const port = 8080
const path = require('path');


// メール処理
let mailer = require('nodemailer');
require('dotenv').config();
//SMTPの設定
const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // SSL
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD
    }
}
const transporter = mailer.createTransport(smtpConfig);
const mailOptions = {
    from: 'rozetta.araki@gmail.com',
    to: 'a-araki@rozetta.jp',
    subject: 'メールテストです',
    html: 'YouConnectからURLをお送ります。'
}


app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


app.get('/api/send/mail', (req, res) => {
    transporter.sendMail(mailOptions, function(err, res){
        if(err){
            console.log(err)
        }else{
            console.log('send mail OK');
        }
    });
});




