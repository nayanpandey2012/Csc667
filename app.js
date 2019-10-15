const express = require('express');
const news = require("./news");
const logger = require("./logger");
const router = express.Router();
const port =  process.env.PORT_NUMBER || 80;

const app = express();

app.use(router);
//app.use(news);
//app.use(weather);
app.use(news);

app.listen(port);