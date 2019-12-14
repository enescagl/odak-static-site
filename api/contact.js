import express from "express";
import validator from "validator";
import nodemailer from "nodemailer";
import xssFilters from "xss-filters";
const app = express();
app.use(express.json());

app.post("/", (req, res) => {
    const attributes = ["name", "email", "subject", "message"];
    const sanitizedAttributes = attributes.map(n => validateAndSanitize(n, req.body[n]));
    const someInvalid = sanitizedAttributes.some(r => !r);

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
        sendmail: true,
        newline: "unix",
        path: "/usr/sbin/sendmail"

        // function dependant so create for use case

    });
    transporter.sendMail({
        from: email,
        to: "enes.cagliyan@gmail.com",
        subject: subject,
        text: message
    });
}

export default {
    path: "/api/contact",
    handler: app
}
