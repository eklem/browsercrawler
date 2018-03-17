const cheerio = require('cheerio')
fetch('https://eklem.github.io/norch-zapier-bookmarklet/')
  .then(function(response) {
    return response.text()
  })
  .then(function(html) {
    //console.log(html)
    const $ = cheerio.load(html)
    console.log('Title: ' + $('title').text())
    console.log('Body: ' + $('body').text())
  })
