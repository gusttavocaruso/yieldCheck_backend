const express = require('express');
const router = require('./routes/routes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())
app.use(router);

const port = 3001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
