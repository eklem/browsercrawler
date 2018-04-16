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
      var item = {url: url, title: title, body: body}
      //console.dir(item)
      indexData([item])
    })
}

var Testing = function (url) {
  return 'This is the url you wanted me to crawl ' + url
}

module.exports.crawl = Crawl
module.exports.testing = Testing
