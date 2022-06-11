var express = require('express');
const { post } = require('request');
var router = express.Router();
const ctrlMain = require('../controllers/main');

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode);
    .put(tripsController.tripsUpdateTrip);

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
