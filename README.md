# crawler-in-browser

Crawling content for the search-index search engine in the browser.

## Main use cases

* You're having a small site with static files and want to add a search engine without any backend programming.
* I just need a working search for my site, ASAP.
* Easy to showcase different search-index use-cases through the [search-index-norch-cookbook](https://github.com/eklem/search-index-norch-cookbook)
* Get the focus for search-index to be in-browser and not server.

The idea is to have something better than Google Custom Search with the same (little) amount of work. Almost no programming to get going. Just add the JavaScript files and you have a search running. And if you add extra energy, then you'll get an even better search for your site.

WIP


## To build

```console
browserify -t brfs lib/main.js --standalone cib -o dist/bundle.js
```

`main.js` should contain all required libraries and code for the "stuff" to run in the web page.
