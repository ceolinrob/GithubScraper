const repositoriesLinkFinder  = require('./getRepositoriesLink');
const repositoriesList        = require('./getRepositoriesInPage');
const nextPage                = require('./goToNextPage.js');
const totalPages              = require('./getTotalPages.js');

const requestController       = require('../RequestHandler/requestController');


const getRepositoriesList = async ($, Cheerio) => {
    var objectDto = [];

    let repositoriesLink = await repositoriesLinkFinder.getRepositoriesLink($);
    let repositoriesBody = await requestController.getRepositories(repositoriesLink);
    $ = Cheerio.load(repositoriesBody);

    let nrOfPages = await totalPages.getTotalPages($);
    for (let i = 0; i < nrOfPages; i++) {
        let repoList = await repositoriesList.getRepos($);
        let newLink = await nextPage.getNextPage($);
        repositoriesBody = await requestController.getRepositories(newLink);
        $ = Cheerio.load(repositoriesBody);
        objectDto.push(...repoList);
    }
  
    return objectDto;
}

module.exports = {
    getRepositoriesList
};