const mail = require('@sendgrid/mail');
const path = require('path')
const dotenv = require('dotenv').config({path: path.resolve(__dirname,'../../../.env')})

mail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'thierry.masumbuko@epitech.eu',
    from: 'contact@fleepi',
    subject: 'Verification test',
    html: 'COUCOU',

  };

exports.sendMail = function (msg){
    mail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode);
        console.log(response[0].headers.body);
      })
      .catch((error) => {
        console.error(error);
      });
  };