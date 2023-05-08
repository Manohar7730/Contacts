const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/',homeController.home);
router.post('/create_contact',homeController.create);

module.exports = router;