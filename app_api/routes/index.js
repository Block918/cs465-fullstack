var express = require('express');
const { post } = require('request');
var router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});
const ctrlMain = require('../../app_server/controllers/main');
const authController = require('..controllers/authentication');
const tripsController = require('../controllers/trips');

router
    .route('/login')
    .post(authController.login);

router  
    .route('/register')
    .post(authController.register);

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindCode);
    .put(auth, tripsController.tripsUpdateTrip);

/* GET home page. */
router.get('/', ctrlMain.index);

module.exports = router;
