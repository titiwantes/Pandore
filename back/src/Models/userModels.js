const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { Schema } = mongoose;
const SATL_WORK_FACTOR = 10;


//Données stockées dans la db User
const UserSchema = new Schema({
    mail: { type: String, required: true, index: {unique: true}},
    password: { type: String, required: true},
    fullname: { type: String, required: true},

    authProvider: {type: String, required: true},
    verified: { type: Boolean, default: false},
    confirmCode: { type: String},

    refreshToken: { type: String}
});

//executé avant chaque enregistrement dans la base de donnée
UserSchema.pre('save', function (next) {
    const user = this;

    //si le mot de passe n'a pas été mofifié passer
    if (!user.isModified('password')) return next();

    //generation du salt
    bcrypt.genSalt(SATL_WORK_FACTOR, (e, salt) => {
        //si erreur renvoyer l'erreur
        if(e) return next(e)

        // generation du hash avec le salt 
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            return next();
        });
    });
});

//conparaison des mots de passe
UserSchema.methods.comparePassword = function(candidate, cb){
    bcrypt.compare(candidate, this.password, (err, isMatch) => {
        if (err) return cb(err);
        return cb(null, isMatch);
    });
};

module.exports = mongoose.model('Users', UserSchema)