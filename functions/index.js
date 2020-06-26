const functions = require('firebase-functions');
const {email, password} = require("./config");
const nodemailer = require("nodemailer");
const htmlToText = require("nodemailer-html-to-text").htmlToText;

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
});

const APP_NAME = "Slice Line";
mailTransport.use("compile", htmlToText());

exports.sendUserEmail = functions.database
  .ref('/orders/{pushId}')
  .onCreate((order) => {
    sendOrderEmail(order.val());
  });


function sendOrderEmail(order) {
  const mailOptions = {
    from: `${APP_NAME} <no_reply@sliceline.com`,
    to: order.email,
    subject: `Your order from ${APP_NAME}`,
    html: `
      <table style="width: 500px; margin: auto;">
        <tr>
            <th>${order.displayName}</th>
            <th>You ordered some food, here's the confirmation of that order.</th>
        </tr>
        ${order.order.map(({name, quantity, price}) => `
          <tr>
            <td>${quantity}</td>
            <td>${name}</td>
            <td>${price}</td>
          </tr>
        `).join("")}
      </table>
    `
  };

  mailTransport.sendMail(mailOptions);

}