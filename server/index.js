const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8000;
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen( PORT, () => {
    console.log(`listening on ${PORT}...`);
});


app.get('/redditthread', (req, res) => {
  
})

