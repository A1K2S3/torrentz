const router = require("express").Router(),
  scrapeTorrents = require("../../dev_modules/scrapeTorrents");

const routes = {
  "3d": "/66/1/",
  hd: "/42/1/",
  dvd: "/1/1/",
  mp4: "/55/1/",
  uhd: "/76/1/",
  svcd_vcd: "/3/1/",
  dualaudio: "/4/1/",
  divx_xvid: "/2/1/",
  bollywood: "/73/1/",
  hevc_x265: "/70/1/",
  h264_x264: "/54/1/"
};

router.get("/:route", async (req, res) => {
  const route = routes[req.params.route];
  const torrents = route
    ? await scrapeTorrents("/sub" + route)
    : "Invalid route => " + req.params.route;
  res.send(torrents);
});

router.get("/", async (req, res) => {
  const torrents = await scrapeTorrents("/cat/Movies/1/");
  res.send(torrents);
});

module.exports = router;
