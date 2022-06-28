const router = require('express').Router();
const supplyRoute = require('./supply.routes');
const accountRoute = require('./account.routes');
const landingPage = require('../middlewares/landingPage');

router.get('/', landingPage);
router.use('/account', accountRoute);
router.use('/supply', supplyRoute);

module.exports = router;
