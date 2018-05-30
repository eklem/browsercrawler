const cheerio = require('cheerio')

var CrawlArray = function (urls) {
}

var CrawlUrl = function (url) {
  fetch(url)
    .then(function(response) {
      return response.text()
    })
    .then(function(html) {
      //console.log(html)
      const $ = cheerio.load(html)
      var title = $('title').text()
      var body = $('body').text()
      // TODO: Find URLs and add to array
      let item = {"id": url, "url": url, "title": title, "body": body}
      //console.dir(item)
      crawlHook([item])
    })
}

var AddToQueue = function (urls) {
  
}


module.exports.crawl = CrawlUrl
