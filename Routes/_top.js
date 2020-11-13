const router = require("express").Router(),
  scrapeTorrents = require("../dev_modules/scrapeTorrents");

const routes = {
  movies: "/top-100-movies",
  tv: "/top-100-television",
  games: "/top-100-games",
  apps: "/top-100-applications",
  music: "/top-100-music",
  docs: "/top-100-documentaries",
  anime: "/top-100-anime",
  other: "/top-100-other"
};

router.get("/", async (req, res) => {
  const torrents = await scrapeTorrents("/top-100");
  res.send(torrents);
});

router.get("/:route", async (req, res) => {
  const route = routes[req.params.route];
  const torrents = route
    ? await scrapeTorrents(route)
    : "Cannot get Route  => " + req.params.route;
  res.send(torrents);
});

module.exports = router;
