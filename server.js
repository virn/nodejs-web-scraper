const express = require('express');
const scrape = require('./scrape');
const frontend = require('./form');

const app = express();

app.get('/', frontend);
app.get('/scrape', scrape);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));