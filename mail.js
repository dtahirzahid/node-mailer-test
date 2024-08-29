const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: process.env.MAIL_PORT,
	secure: false,
	auth: {  // it is going to take 2 fields
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASSWORD,
	},
});

const sendEmail = async ({ receipients, subject, message }) => {
	return await mailTransport.sendMail({
		from: 'no-reply@example.com', // sender address
		to: receipients, // list of receivers
		subject: subject, // Subject line
		text: message, // plain text body
		html: message, // valid text body
	});
}

module.exports = { sendEmail };