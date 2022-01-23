const getNextPage = async ($) => {
    let nextPage = $(".next_page");
    var repositoriesLinkDto = null;

    nextPage.each((index, value) => {
        let link = $(value).attr('href');
        if ($(value).text().trim() == "Next"){
            repositoriesLinkDto = link;
        }
    });

    return repositoriesLinkDto ?? null;
}

module.exports = {
    getNextPage
};