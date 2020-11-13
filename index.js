const express = require("express"),
  cors = require("cors"),
  logger = require("morgan"),
  scrapeTorrents = require("./dev_modules/scrapeTorrents"),
  scrapeMagnetLink = require("./dev_modules/scrapeMagnetLink");

const app = express();
app.use(cors());
app.use(logger("dev"));

//  Routes
app.use("/top", require("./Routes/_top"));
app.use("/popular", require("./Routes/_pop"));
app.use("/category", require("./Routes/category/_cat"));
app.use("/trending", require("./Routes/_trending"));

// Err handling
app.use((err, req, res, next) => res.send(err));

app.get("/search/:term", async (req, res) => {
  const { term, page } = req.params;
  torrents = await scrapeTorrents(`/search/${term}/${page}/`);
  res.send(torrents);
});

app.get("/torrent", async (req, res) =>
  res.send(await scrapeMagnetLink(req.query.link))
);

const port = process.env.PORT || 8000;
app.listen(port, err => console.log(err ? err : `Running on ${port}...`));
