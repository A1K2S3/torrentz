const router = require("express").Router(),
  scrapeTorrents = require("../../dev_modules/scrapeTorrents");

const routes = {
  other: "/40/1/",
  comics: "/39/1/",
  ebooks: "/36/1/",
  images: "/37/1/",
  sounds: "/35/1/",
  tutorials: "/34/1/",
  emulation: "/33/1/",
  audiobooks: "/52/1/",
  mobilephone: "/38/1/",
  nulledscripts: "/47/1/"
};

router.get("/:route", async (req, res) => {
  const route = routes[req.params.route];
  const torrents = route
    ? await scrapeTorrents("/sub" + route)
    : "Invalid route => " + req.params.route;
  res.send(torrents);
});

router.get("/", async (req, res) => {
  const torrents = await scrapeTorrents("/cat/Other/1/");
  res.send(torrents);
});

module.exports = router;
