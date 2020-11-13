const router = require("express").Router(),
  scrapeTorrents = require("../dev_modules/scrapeTorrents");

router.get("/:category/d", async (req, res) => {
  const torrents = await scrapeTorrents(`/popular-${req.params.category}`);
  res.send(torrents);
});

router.get("/:category/w", async (req, res) => {
  const torrents = await scrapeTorrents(`/popular-${req.params.category}-week`);
  res.send(torrents);
});

module.exports = router;
