const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const PORT = 8000;
const url = "https://www.theguardian.com/uk";

const scrape = async () => {
  const res = await axios(url);
  //   console.log(res.data);
  const html = res.data;
  const $ = cheerio.load(html);
  const articles = [];

  $(".fc-item__title", html).each(function () {
    const title = $(this).text();
    const url = $(this).find("a").attr("href");
    articles.push({
      title,
      url,
    });
  });

  console.log(articles);
};
scrape().catch((err) => console.log(err));

const app = express();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
