const Auth = require('../Controllers/Auth')
const Mail = require('../Controllers/Mails');

//Listes des routes
module.exports =  function(app) { 
    //Route welcome
    app.get('/', (req, res) => {res.send('Welcome to Pandore Api')});
    //Route de connexion avec mail et mot de passe
    app.route('/login').post(Auth.login);
    //Route d'inscription avec mail
    app.route('/register').post(Auth.register);
    //Route d'obtention du refresh token
    app.route('/refreshToken').post(Auth.refreshToken)
    //Route d'envoie de mail
    app.route('/sendmail').post(Mail.sendmail)
    //Route de connexion avec google
    app.route('/googleLogin').post(Auth.googleLogin)
    //Route d'inscription avec google
    app.route('/googleRegister').post(Auth.googleRegister)
};