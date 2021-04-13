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

//メールの内容
const mailOptions = {
    from: 'rozetta.araki@gmail.com',
    to: 'a-araki@rozetta.jp',
    subject: 'メールテストです',
    html: 'YouConnectからURLをお送ります。'
}

//メールの送信
function sendMail() {
    transporter.sendMail(mailOptions, function(err, res){
        if(err){
            console.log(err)
        }
    });

}


////////////////////
//モジュールの読み込み
// var nodemailer = require("nodemailer");

// //SMTPサーバの設定
// var smtp = nodemailer.createTransport({
//     host: 'localhost',
//     port: 25
// });

// //メール情報の作成
// var message = {
//     from: 'Fromアドレス',
//     to: 'Toアドレス',
//     subject: 'nodemailer test mail',
//     text: 'テストメールです。'
// };

// // メール送信
// try{
//     smtp.sendMail(message, function(error, info){
//         // エラー発生時
//         if(error){
//             console.log("send failed");
//             console.log(error.message);
//             return;
//         }
        
//         // 送信成功
//         console.log("send successful");
//         console.log(info.messageId);
//     });
// }catch(e) {
//     console.log("Error",e);
// }