const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

//récupération de la fonction des routes

const routes = require('./src/Routes/routes');
require('./src/Models/userModels')


const port = process.env.PORT || 3000;
//création de l'app
const app = express();
//configuration du fichier .env
dotenv.config();
mongoose.Promise = global.Promise;
//connexion à la base de données
mongoose.connect(process.env.DB_PATH);

app.use('/',
express.static(path.join(__dirname, 'static')),
cors(),
express.json(),
express.urlencoded({extended: true})
);

routes(app);

app.listen(port, () => {console.log(`Api started on port : ${port}`);})

