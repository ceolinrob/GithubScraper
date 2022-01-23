const getRepositoriesLink = async ($) => {
  
    let repositoriesSearcher = $("a");
    var repositoriesLinkDto = null;

    repositoriesSearcher.each((index, value) => {
        let link = $(value).attr('href');
        if ($(value).text().trim() == "Repositories"){
            repositoriesLinkDto = link;
        }
    });
  
    return repositoriesLinkDto;
}

module.exports = {
    getRepositoriesLink
};