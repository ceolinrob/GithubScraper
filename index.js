'use strict';

const Bluebird  = require('bluebird');
const Cheerio   = require('cheerio');
const Request   = Bluebird.promisify(require('request'));

(async () => {

  let response = await Request({
    url: 'https://github.com/facebook',
    method: "GET",
    headers: { 'Cache-Control': 'no-cache' },
    timeout: 10000
  })

  console.log(response.statusCode);

  let $ = Cheerio.load(response.body);
  let title = $('h1').text().trim();
  let url = $("[itemprop = 'url']").text().trim();
  let location = $("[itemprop = 'location']").text().trim();
  // let numberOfRepositories = $("[class = 'repo']").length;
  // [0].children.map(e => e.nodeValue).join('');



  console.log(title);
  console.log(url);
  console.log(location);
  // console.log(repo);

})()

