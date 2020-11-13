const router = require("express").Router(),
  scrapeTorrents = require("../../dev_modules/scrapeTorrents");

const routes = {
  dualaudio: "/78/1/",
  dubbed: "/79/1/",
  raw: "/81/1/",
  subbed: "/80/1/"
};

router.get("/:route", async (req, res) => {
  const route = routes[req.params.route];
  const torrents = route
    ? await scrapeTorrents("/sub" + route)
    : "Invalid route => " + req.params.route;
  res.send(torrents);
});

router.get("/", async (req, res) => {
  const torrents = await scrapeTorrents("/sub/28/1/");
  res.send(torrents);
});

module.exports = router;
