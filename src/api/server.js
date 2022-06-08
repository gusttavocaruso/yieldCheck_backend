const express = require('express');
const router = require('./routes/routes');
const cors = require('cors');
const err = require('./middlewares/erroMiddleware');

const app = express();
app.use(express.json());
app.use(cors())

app.use(router);
app.use(err);

const PORT = 3001;
app.listen(PORT, () => console.log(`On at: ${PORT}`));
