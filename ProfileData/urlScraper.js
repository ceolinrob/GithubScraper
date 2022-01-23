const getUrl = async ($) => {
    let urlDto = $("[itemprop = 'url']").first().text().trim();
  
    return urlDto;
}

module.exports = {
    getUrl
};