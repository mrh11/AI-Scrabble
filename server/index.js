const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const port = 3000;
const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, ()=> {
  console.log('listening on port 3000');
})

app.get('/api/dictionary', (req, res) => {
  validWord(req.body, (err, results) => {
    if (err) {
      res.status(500).send('Error Occured');
    } else {
      res.status(200).send(results);
    }
  })
})