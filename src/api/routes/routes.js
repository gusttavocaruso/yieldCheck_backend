const { Router } = require('express');
const { register, login } = require('../controllers/signInUpController');
const cntrll = require('../controllers/userInController');
const auth = require('../middlewares/authentication');

const router = Router();

router.get('/', (_req, res) => res.send('vai'));

router.post('/sign-up', register);
router.post('/sign-in', login);

router.post('/supply/first-setup', auth, cntrll.firstIn);
router.put('/supply/:id', auth, cntrll.newInputs);
router.get('/current-status/:id', auth, cntrll.currentStatus);

module.exports = router;
