const { Router } = require('express');
const { register, login } = require('../controllers/signInUpController');
const { firstIn, newInputs, currentStatus } = require('../controllers/userInController');
const auth = require('../middlewares/authentication');

const router = Router();

router.get('/', (_req, res) => res.json({ message: "yieldCheck landinpage" }));

router.post('/sign-up', register);
router.post('/sign-in', login);

router.post('/supply/first-setup', auth, firstIn);
router.put('/supply/:id', auth, newInputs);
router.get('/current-status/:id', auth, currentStatus);

module.exports = router;
