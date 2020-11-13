const router = require("express").Router(),
  scrapeTorrents = require("../../dev_modules/scrapeTorrents");

const routes = {
  aac: "/69/1/",
  dvd: "/24/1/",
  mp3: "/22/1/",
  radio: "/26/1/",
  video: "/25/1/",
  other: "/27/1/",
  album: "/53/1/",
  boxset: "/58/1/",
  single: "/60/1/",
  lossless: "/23/1/",
  concerts: "/68/1/",
  discography: "/59/1/"
};

router.get("/:route", async (req, res) => {
  const route = routes[req.params.route];
  const torrents = route
    ? await scrapeTorrents("/sub" + route)
    : "Invalid route => " + req.params.route;
  res.send(torrents);
});

router.get("/", async (req, res) => {
  const torrents = await scrapeTorrents("/cat/Music/1/");
  res.send(torrents);
});

module.exports = router;
