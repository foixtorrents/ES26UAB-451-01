const plats = require('../models/platModel');

exports.getPlats = (req, res) => {
    res.render('plats', { llistatPlats: plats });
};