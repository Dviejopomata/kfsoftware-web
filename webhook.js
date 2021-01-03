const express = require("express");
const axios = require("axios").default;
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.post("/", async function (req, res) {
  console.log(req.url, JSON.stringify(req.body));
  try {
    await axios.get("http://localhost:3002");
    res.status(200).send("123");
  } catch (e) {
    res.status(500).send(e.toString());
  }
});
app.listen(3090, "0.0.0.0");
