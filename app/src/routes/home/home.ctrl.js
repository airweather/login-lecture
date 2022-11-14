'use strict';

const User = require('../../models/User');

const output = {
    home: (req, res) => {
        res.render('home/index')
    },
    
    login: (req, res) => {
        res.render('home/login')
    },

    register: (req, res) => {
        res.render('home/register');
    }
}



const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        return res.json(response);

    }
}
module.exports = {
    //key가 없으면 hello : hello형태
    output,
    process,
};