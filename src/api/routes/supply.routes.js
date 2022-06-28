const router = require('express').Router();
const auth = require('../middlewares/authentication');
const ctrll = require("../controllers/supplyController");

router.post('/first-setup', auth, ctrll.firstIn);
router.put('/:id', auth, ctrll.newInputs);
router.get('/current-status', auth, ctrll.currentStatus);

module.exports = router;
