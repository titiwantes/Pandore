module.exports = {
    login: require('./login').login,
    register: require('./register').register,
    refreshToken: require('./token').refreshToken,
    auth: require('./token').auth,
    googleLogin: require('./googleHandle').googleLogin,
    googleRegister: require('./googleHandle').googleRegister
}