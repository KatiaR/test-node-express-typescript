const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use('/api', router);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
