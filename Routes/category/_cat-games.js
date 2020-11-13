const router = require("express").Router(),
  scrapeTorrents = require("../../dev_modules/scrapeTorrents");

const routes = {
  ds: "/45/1/",
  pc: "/10/1/",
  "3ds": "/72/1/",
  ps1: "/15/1/",
  ps2: "/11/1/",
  ps3: "/43/1/",
  ps4: "/77/1/",
  psp: "/12/1/",
  wii: "/44/1/",
  xbox: "/13/1/",
  switch: "/82/1/",
  xbox360: "/14/1/",
  gamecube: "/46/1/",
  dreamcast: "/16/1/"
};

router.get("/:route", async (req, res) => {
  const route = routes[req.params.route];
  const torrents = route
    ? await scrapeTorrents("/sub" + route)
    : "Invalid route => " + req.params.route;
  res.send(torrents);
});

router.get("/", async (req, res) => {
  const torrents = await scrapeTorrents("/cat/Games/1/");
  res.send(torrents);
});

module.exports = router;
