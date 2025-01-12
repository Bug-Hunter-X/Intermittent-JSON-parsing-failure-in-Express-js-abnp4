const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line to handle url-encoded data
app.post('/data', (req, res) => {
  if (req.is('application/json')) {
    console.log(req.body);
    res.send('Data received');
  } else {
    res.status(400).send('Invalid request content type');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});