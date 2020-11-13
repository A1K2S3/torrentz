const router = require("express").Router(),
  scrapeTorrents = require("../../dev_modules/scrapeTorrents");

const routes = {
  android: "/56/1/",
  ios: "/57/1/",
  linux: "/20/1/",
  mac: "/19/1/",
  other: "/21/1/",
  windows: "/18/1/"
};

router.get("/:route", async (req, res) => {
  const route = routes[req.params.route];
  const torrents = route
    ? await scrapeTorrents("/sub" + route)
    : "Invalid route => " + req.params.route;
  res.send(torrents);
});

router.get("/", async (req, res) => {
  const torrents = await scrapeTorrents("/cat/Apps/1/");
  res.send(torrents);
});

module.exports = router;
