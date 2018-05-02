// the variable that will become the search index
var mySearchIndex = {}

// display search results in a div
const paintResultDiv = function(result) {
  var node = document.createElement('div')
  node.innerHTML = '<h2>' + result.document.title + '</h2>'
    + '<code>' + JSON.stringify(result) + '</code>'
  document.getElementById('result').appendChild(node)
}

const search = function (q) {
  document.getElementById('result').innerHTML = ''
  mySearchIndex.search(q).on('data', paintResultDiv)
}

const initIndex = function (err, index) {
  if (err) console.error(err)
  mySearchIndex = index
  search()
}

// index some data
const indexData = function (data) {
  mySearchIndex.concurrentAdd({}, data, function(err) {
    // and then show search results (defaults to everything)
    search()
  })
}

// initialize search-index
SearchIndex({
  indexPath: 'si-demo',
  keySeparator: '~' // this is a websafe separator for most languages- change if weirdness occurs
}, initIndex)

// PAGE CONTROLLERS

// Add a crawled doc to the index
document.getElementById("c").onmousedown = function() {
  cib.crawl('https://eklem.github.io/crawler-in-browser/')
}

// do a search
document.getElementById("s").onkeyup = function() {
  search(document.getElementById("s").value)
}


// crawler hook for crawled items
// What to do with 
function crawlHook(item) {
  indexData(item)
  console.log('item(s) indexed: ')
  console.dir(item)
  // TODO: A - Add item.urls to pouchDB URL-queue. The function for this needs to:
  //         --> Check if it's a valid URL and if yes
  //         --> Check if it's within the boundaries (domain + path, like eklem.github.io/crawler-in-browser/)
  //         --> Check if it's already added
  //       B - When item is crawled, returned and indexed:
  //         --> Mark as crawled in puchDB URL-queue
  //       C - Pick up next URL to crawl and send to cib.crawl()
  //       D - Clear the crawled-flag for re-crawling.
  //       E - Possibility to start with adding an array to pouchDB URL-queue if you know all the URLs to be crawled
  //         --> cib.crawl() should also have a followURLs-flag, which if set to false, doesn't pick up new URLs to be added to URL-queue
  //       F - Wrap each part of the crawlHook as a promise?
}
