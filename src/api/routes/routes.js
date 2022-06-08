const { Router } = require('express');
const { register, login } = require('../controllers/signInUpController');
const cntrll = require('../controllers/userInController');

const router = Router();

router.get('/', (_req, res) => res.send('vai'));

router.post('/sign-up', register);
router.post('/sign-in', login);

router.post('/supply/first-setup', cntrll.firstIn);
router.put('/supply/:id', cntrll.newInputs);
router.get('/current-status/:id', cntrll.currentStatus);

module.exports = router;
