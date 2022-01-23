'use strict';

const Cheerio   = require('cheerio');
const scrapeTitle = require('./ProfileData/titleScraper.js');
const scrapeUrl = require('./ProfileData/urlScraper.js');
const scrapeLocation = require('./ProfileData/locationScraper.js');
const repositoriesScraper = require('./Repositories/repositoryScraper');
const requestController = require('./RequestHandler/requestController');

(async () => {

  var obj = [];

  let body = await requestController.getBody();
  let $body = Cheerio.load(body);

  let title = await scrapeTitle.getTitle($body);
  let url = await scrapeUrl.getUrl($body);
  let location = await scrapeLocation.getLocation($body);

  let repositoriesLink = await repositoriesScraper.getRepositoriesLink($body);
  let repositoriesBody = await requestController.getRepositories(repositoriesLink);
  let $repo = Cheerio.load(repositoriesBody);

  console.log($repo);
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
