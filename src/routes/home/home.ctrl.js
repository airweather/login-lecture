'use strict';

const home = (req, res) => {
    res.render('home/index')
};

const login =  (req, res) => {
    res.render('home/login')
};

module.exports = {
    //key가 없으면 hello : hello형태
    home,
    login,
};