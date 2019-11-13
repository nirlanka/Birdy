// @flow

const express = require('express');
const app = express();
const port = 4000;

app.get('/ping', (req, res) => {
    console.log('pong-ed');
    res.send({'pong':'pong'});
});

app.listen(port, () => console.log(`API listening on port ${port}!`));