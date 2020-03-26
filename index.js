const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");

const app = express();
const port = 8080;

//app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.post('/hmac', (req, res) => {
  const body = req.body;
  res.json({
    result: hmac(body.algorithm, body.key, body.text)
  });
});

function hmac(algorithm, key, text) {
  return crypto.createHmac(algorithm, key).update(text).digest("base64");
}

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
