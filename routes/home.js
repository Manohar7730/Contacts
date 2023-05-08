const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/',homeController.home);
router.post('/create_contact',homeController.create);
router.get('/delete_contact/:id',homeController.delete);
router.get('/update_contact/:id',homeController.update_contact);
router.post('/update_contact/:id',homeController.update);

module.exports = router;