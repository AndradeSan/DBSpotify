const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');


router.get('/', customerController.list);
  ///res.send('Hola Mundo');
//});



module.exports = router;
