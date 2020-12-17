const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    usr: process.env.DB_USERNAME,
    psw: process.env.DB_PASSWORD
};