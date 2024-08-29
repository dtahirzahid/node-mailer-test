const express = require('express')
const app = express()
const {sendEmail}=require('./mail');

app.use(express.json())

// post request to the end point 
app.post('/send-email', (req, res) => {

    // receipt of the email we going to send
	const { name, email } = req.body;
    
    const subject= 'Welcome to our website';
    message="Testing messageeeeeeeeeee!!";


    const receipients = ` ${name} <${email}>`;


    res.json({ message : 'sending email in moment'})
    sendEmail({ receipients, subject, message })
		
});


module.exports=app;


