'use strict';

const Cheerio                 = require('cheerio');

const scrapeTitle             = require('./ProfileData/titleScraper.js');
const scrapeUrl               = require('./ProfileData/urlScraper.js');
const scrapeLocation          = require('./ProfileData/locationScraper.js');

const repositoriesListHandler = require('./Repositories/repositoriesListHandler.js');

const requestController       = require('./RequestHandler/requestController');

(async () => {

    var dto = {};

    let body = await requestController.getBody();
    let $ = Cheerio.load(body);

    dto.title = await scrapeTitle.getTitle($);
    dto.url = await scrapeUrl.getUrl($);
    dto.location = await scrapeLocation.getLocation($);
    var obj = await repositoriesListHandler.getRepositoriesList($, Cheerio);
    dto.repos = obj;
    console.log(dto);
})();

