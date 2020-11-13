const router = require("express").Router(),
  scrapeTorrents = require("../dev_modules/scrapeTorrents");

const routes = {
  tv: "/tv/",
  apps: "/apps/",
  music: "/music/",
  other: "/other/",
  games: "/games/",
  anime: "/anime/",
  movies: "/movies/",
  docs: "/documentaries/"
};

router.get("/", async (req, res, next) => {
  const torrents = await scrapeTorrents("/trending").catch(next);
  res.send(torrents);
});

router.get("/all/w", async (req, res, next) => {
  const torrents = await scrapeTorrents("/trending-week").catch(next);
  res.send(torrents);
});

router.get("/:route/d", async (req, res) => {
  const route = routes[req.params.route];
  const torrents = route
    ? await scrapeTorrents("/trending/d" + route)
    : "Cannot Get " + req.params.route;
  res.send(torrents);
});

router.get("/:route/w", async (req, res) => {
  const route = routes[req.params.route];
  const torrents = route
    ? await scrapeTorrents("/trending/w" + route)
    : "Cannot Get " + req.params.route;
  res.send(torrents);
});

module.exports = router;
