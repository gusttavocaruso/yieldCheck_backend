const router = require('express').Router();
const ctrll = require("../controllers/accountController");

router.post('/sign-up', ctrll.register);
router.post('/sign-in', ctrll.login);

module.exports = router;
