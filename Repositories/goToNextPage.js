const getNextPage = async ($) => {
  
    let nextPage = $(".next_page");
    var repositoriesLink = null;

    nextPage.each((index, value) => {
        let link = $(value).attr('href');
        if ($(value).text().trim() == "Next"){
            repositoriesLink = link;
        }
    });

    return repositoriesLink;
}

module.exports = {
    getNextPage
};