'use strict';

const Cheerio   = require('cheerio');
const scrapeTitle = require('./ProfileData/titleScraper.js');
const scrapeUrl = require('./ProfileData/urlScraper.js');
const scrapeLocation = require('./ProfileData/locationScraper.js');
const requestController = require('./RequestHandler/requestController');

(async () => {

  var obj = [];

  var body = await requestController.getBody();
  let $ = Cheerio.load(body);

  var title = await scrapeTitle.getTitle($);
  var url = await scrapeUrl.getUrl($);
  var location = await scrapeLocation.getLocation($);
})();







// (async () => {

//   let response = await Request({
//     url: 'https://github.com/facebook',
//     method: "GET",
//     headers: { 'Cache-Control': 'no-cache' },
//     timeout: 10000
//   })

//   console.log(response.statusCode);

//   let $ = Cheerio.load(response.body);
//   let title = $('h1').text().trim();
//   let url = $("[itemprop = 'url']").text().trim();
//   let location = $("[itemprop = 'location']").text().trim();
//   // let numberOfRepositories = $("[class = 'repo']").length;
//   // [0].children.map(e => e.nodeValue).join('');



//   console.log(title);
//   console.log(url);
//   console.log(location);
//   // console.log(repo);

// })()

// (async () => {
//   let title = await scrapeTitle.getTitle(requestUrl, requestMethod, requestHeaders, Cheerio, Request);
//   console.log(title);
// })();
