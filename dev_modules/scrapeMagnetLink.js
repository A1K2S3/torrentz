const cheerio = require('cheerio')
		, request = require('request-promise').defaults({
				baseUrl: "https://1337x.to",
				proxy: "http://xnanrwba-rotate:q8hy6j6klga0@p.webshare.io:80"
			})

const scrapeMagnetLink = async link => {
  const html = await request.get(link)
      , $ = cheerio.load(html);
    
  return $('[href^="magnet:?xt=urn:btih:"]').attr('href');
}

module.exports = scrapeMagnetLink;