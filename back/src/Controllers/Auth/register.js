const mongoose = require('mongoose');
const response = require('../res').msg
const randomize = require('randomatic')
const mail = require('../Mails/index')

require('../../Models/userModels')

const User = mongoose.model('Users');
const min_pass_len = 6;


exports.register = async (req, res) => {
    const user = new User(req.body)
    // Si un des paremètres est manquant retourner une erreur
    if (!user.fullname || !user.mail || !user.password) {
        res.status(response.bad_request).send(response.bad_request_m)
        return
    };

    // Si le mot de passe est trop court
    if (user.password.length < min_pass_len){
        res.status(response.bad_request).send(response.to_short_password)
        return
    }

    user.authProvider = 'Pandore'

    //recherche du mail dans la base de donnée
    await User.findOne({mail: user.mail}).then(value=>{
        //si les mail est deja présent retourner une erreur
        if (value)res.status(response.bad_request).send(response.mail_already_used)

        else {
            //sinon l'enregistrer dans la base de données
            user.save((err, user) => {
                if (err)
                    return res.status(response.internal_server_error).send(response.internal_server_error_m)
                else {
                    //création du code de vérification
                    user.confirmCode = randomize('A0', 10);
                    //envoie mail de confirmation
                    const msg = {
                        to: user.mail,
                        from: 'contact@Pandore',
                        subject: 'Verification test',
                        html: 'COUCOU',
                    
                      };
                    
                    //mail.sendmail(msg)
                    console.log(msg)
                    //si aucun problème retour message inscription
                    res.status(response.ok).send(response.registered)
                }
            })
        }
    })

}