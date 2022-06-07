const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const response = require('../res').msg;

require('../../Models/userModels')
const User = mongoose.model('Users')

//création de tokens basés sur l'id
exports.createToken = function(id){return jwt.sign({userID: id},process.env.TOKEN_ENCODE_STRING)}
exports.createRefreshToken = function(id){return jwt.sign({userID: id},process.env.TOKEN_ENCODE_STRING)}

//verification des tokens grace aux codes
exports.verifyToken = (token) => jwt.verify(token, process.env.TOKEN_ENCODE_STRING);
exports.verifyrefreshToken = (token) => jwt.verify(token, process.env.REFRESH_TOKEN_ENCODE_STRING);

//creation d'un nouveau token
exports.refreshToken = (req, res) => {
    //recherche du user grace au refreshtoken fournit
    User.findOne({refreshToken: req.body.refreshToken}, (err, usr) => {
        if (err)
            return res.status(response.internal_server_error).send(response.internal_server_error_m)
        //si le user est trouvé renvoie du nouveau token
        if (usr)
            return res.status(response.ok).json({accessToken: this.createToken(usr._id)})
        //sinon bad request
        res.status(response.bad_request).send(response.bad_request_m)
    })
}

exports.auth = async (req, res) => {
    try {
        const token = req.header.authorization;
        const id = req.headers.id;
        const decode = this.verifyToken(token)

        if (id == deconde.userID) {
            console.log('auth ok')
            next()
        } else 
            return res.status(response.unauthorized).send(response.unauthorized_m)


    } catch (err) {
        console.log(err)
        return res.status(response.unauthorized).send(response.unauthorized_m)
    }
} 