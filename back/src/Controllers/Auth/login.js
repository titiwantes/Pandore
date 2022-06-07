const mongoose = require('mongoose');
require('../../Models/userModels');

const token = require('./token')
const response = require('../res').msg;
const User = mongoose.model('Users')

exports.login = async (req, res) => {
    const user = new User(req.body);
    //ident est égal au username ou au password

    //si il manque le mail ou le mot de passe retourner une erreur
    if (!user.mail || !user.password)
        return res.status(response.bad_request).send(response.bad_request_m)

    //chercher le user dans la base de données
    await User.findOne({mail:user.mail}).then((dbUser, err) => {
        if (err)
            //si erreur retourner une erreur de serveur
            return res.status(response.internal_server_error).send(response.internal_server_error_m)

        //si l'utilisateur n'est pas trouvé dans la base de donnée renvoyer une erreur
        if (!dbUser) return res.status(response.bad_request).send(response.user_not_found)
        else {
            //sinon vérifier si le user est verifié
            if (!dbUser.verified)
                return res.status(response.bad_request).send(response.user_not_verified)
            else {
                //comparer le mot de passe fournit avec celui de la base de donnée
                dbUser.comparePassword(user.password, (err, cmp) => {
                    if (err)
                        //si erreur retourner erreur de mot de passe
                        return res.status(response.bad_request).send(response.wrong_password)
                    else {
                        //sinon créer un refreshToken et le sauvegarder dans la base de données
                        dbUser.refreshToken = token.createRefreshToken(user._id)
                        dbUser.save((err) =>{
                            if (err)
                                return res.status(response.internal_server_error).send(response.internal_server_error_m)
                        })
                        //si aucune erreur envoyer les données du user et ses tokens
                        res.status(response.ok).json({
                            data: {
                                fullname: dbUser.fullname,
                                id: dbUser._id,
                                mail: dbUser.mail,
                            },
                            accessToken: token.createToken(dbUser._id),
                            refreshToken: dbUser.refreshToken
                        })
                    }
                })
            }
        }
    })
}

