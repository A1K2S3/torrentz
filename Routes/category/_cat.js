const router = require("express").Router(),
  scrapeTorrents = require("../../dev_modules/scrapeTorrents");

router.use("/tv", require("./_cat-tv"));
router.use("/apps", require("./_cat-apps"));
router.use("/anime", require("./_cat-anime"));
router.use("/games", require("./_cat-games"));
router.use("/music", require("./_cat-music"));
router.use("/other", require("./_cat-other"));
router.use("/movies", require("./_cat-movies"));

router.get("/docs", async (req, res) => {
  const torrents = await scrapeTorrents("/cat/Documentaries/1/");
  res.send(torrents);
});

module.exports = router;
