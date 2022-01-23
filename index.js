'use strict';

const Cheerio                 = require('cheerio');

const scrapeTitle             = require('./ProfileData/titleScraper.js');
const scrapeUrl               = require('./ProfileData/urlScraper.js');
const scrapeLocation          = require('./ProfileData/locationScraper.js');

const repositoriesLinkFinder  = require('./Repositories/getRepositoriesLink');
const repositoriesList        = require('./Repositories/getRepositoriesInPage');
const nextPage                = require('./Repositories/goToNextPage.js');
const totalPages              = require('./Repositories/getTotalPages.js');

const requestController       = require('./RequestHandler/requestController');

(async () => {

    var obj = [];

    let body = await requestController.getBody();
    let $body = Cheerio.load(body);

    let title = await scrapeTitle.getTitle($body);
    let url = await scrapeUrl.getUrl($body);
    let location = await scrapeLocation.getLocation($body);

    let repositoriesLink = await repositoriesLinkFinder.getRepositoriesLink($body);
    let repositoriesBody = await requestController.getRepositories(repositoriesLink);
    let $repo = Cheerio.load(repositoriesBody);

    let nrOfPages = await totalPages.getTotalPages($repo);
    for (let i = 0; i < nrOfPages; i++) {
        let repoList = await repositoriesList.getRepos($repo);
        let newLink = await nextPage.getNextPage($repo);
        repositoriesBody = await requestController.getRepositories(newLink);
        $repo = Cheerio.load(repositoriesBody);
        obj.push(...repoList);
    }
    console.log(obj.length);
})();

