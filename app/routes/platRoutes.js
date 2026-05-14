const express = require('express');
const router = express.Router();
const platController = require('../controllers/platController');

router.get('/plats', platController.getPlats);

module.exports = router;