const cheerio = require("cheerio"),
  request = require("request-promise").defaults({
    baseUrl: "https://1337x.to",
    proxy: "http://xnanrwba-rotate:q8hy6j6klga0@p.webshare.io:80"
  });

const scrapeTorrents = async route => {
  try {
    const torrents = [],
      html = await request.get(route),
      $ = cheerio.load(html),
      trs = $("table tbody tr");

    trs.each((i, tr) => {
      const torrent = {
        se: $(tr)
          .find(".seeds")
          .html(),

        le: $(tr)
          .find(".leeches")
          .html(),

        ico: $(tr)
          .find("td i")
          .attr("class"),

        name: $(tr)
          .find('td a[href^="/torrent"]')
          .text(),

        link: $(tr)
          .find('td a[href^="/torrent"]')
          .attr("href"),

        size: $(tr)
          .find(".size")
          .clone()
          .children()
          .remove()
          .end()
          .text()
      };
      torrents.push(torrent);
    });

    return torrents;
  } catch (err) {
    return err;
  }
};

module.exports = scrapeTorrents;
