const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const PORT = 8000;

const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
