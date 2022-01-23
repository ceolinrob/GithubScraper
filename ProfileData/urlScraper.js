const getUrl = async ($) => {
  
    let url = $("[itemprop = 'url']").first().text().trim();
  
    return url;
}

module.exports = {
    getUrl
};