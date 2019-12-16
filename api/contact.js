const express = require("express");
const validator = ("validator");
const nodemailer = ("nodemailer");
const xssFilters = ("xss-filters");
const serverless = ("serverless-http");

const app = express();
app.use(express.json());

app.post("/contact_form", (req, res) => {
    const attributes = ["name", "email", "subject", "message"];
    const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]));
    console.log("sanitized :" + sanitizedAttributes);
    const someInvalid = sanitizedAttributes.some(r => !r);
    console.log("invalid :" + someInvalid);

    if (someInvalid) {
        return res.status(422).json({ "error": "Girilen veriler düzgün değil!" })
    }
    sendMail(...sanitizedAttributes);
    res.status(200).json({ "message": "Gönderim başarılı." });

});

const rejectFunctions = new Map([
    ["name", val => val.length < 3],
    ["email", val => validator.isEmail(val)],
    ["message", val => val.length < 10]
]);

const validateAndSanitize = (key, value) => {
    return rejectFunctions.has(key) && !rejectFunctions.get(key)(value) && xssFilters.inHTMLData(value);
}

const sendMail = (name, email, subject, message) => {
    const transporter = nodemailer.createTransport({
        // sendmail: true,
        // newline: "unix",
        jsonTransport: true

        // path: "/usr/sbin/sendmail"

        // function dependant so create for use case
    });
    transporter.sendMail({
        from: email,
        to: "enes.cagliyan@gmail.com",
        subject: subject,
        text: message
    }, (err, info) => {
        // console.log(info.envelope);
        // console.log(info.messageId);
        // console.log(info.message);
    });
    console.log("is okay")
}

module.exports = {
    // path: '/api/contact',
    handler: app
}
