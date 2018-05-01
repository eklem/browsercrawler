const cheerio = require('cheerio')

var Crawl = function (url) {
  fetch(url)
    .then(function(response) {
      return response.text()
    })
    .then(function(html) {
      //console.log(html)
      const $ = cheerio.load(html)
      var title = $('title').text()
      var body = $('body').text()
      var item = {id: url, url: url, title: title, body: body}
      //console.dir(item)
      crawlHook([item])
    })
}




module.exports.crawl = Crawl
