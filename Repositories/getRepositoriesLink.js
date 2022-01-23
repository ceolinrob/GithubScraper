const getRepositoriesLink = async ($) => {
  
    let repositoriesSearcher = $("a");
    var repositoriesLink = null;

    repositoriesSearcher.each((index, value) => {
        let link = $(value).attr('href');
        if ($(value).text().trim() == "Repositories"){
            repositoriesLink = link;
        }
    });
  
    return repositoriesLink;
}

module.exports = {
    getRepositoriesLink
};