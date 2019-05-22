const sgMail = require('@sendgrid/mail')
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.handler = function (event, context, callback) {
  const { to, from, subject, text, html } = JSON.parse(event.body)

  const msg = {
    to: to,
    from: from,
    subject: subject,
    text: text,
    html: html
  }

  sgMail.send(msg)

  callback(null, {
    statusCode: 200,
    body: 'success'
  })
}
