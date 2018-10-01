const express = require('express');
const bodyParser = require('body-parser');
const Story = require('./services/story');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/story', Story);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
