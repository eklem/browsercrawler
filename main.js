const cheerio = require('cheerio')
url = 'https://eklem.github.io/norch-zapier-bookmarklet/'
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
    console.dir(item)
  })
