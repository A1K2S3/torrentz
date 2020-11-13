const router = require("express").Router(),
  scrapeTorrents = require("../../dev_modules/scrapeTorrents");

const routes = {
  hd: "/4/1/",
  dvd: "/5/1/",
  sd: "/75/1/",
  svcd_vcd: "/7/1/",
  cartoon: "/74/1/",
  divx_xvid: "/6/1/",
  hevc_x256: "/71/1/"
};

router.get("/:route", async (req, res) => {
  const route = routes[req.params.route];
  const torrents = route
    ? await scrapeTorrents("/sub" + route)
    : "Invalid route => " + req.params.route;
  res.send(torrents);
});

router.get("/", async (req, res) => {
  const torrents = await scrapeTorrents("/cat/TV/1/");
  res.send(torrents);
});

module.exports = router;
