const getUrl = async ($) => {
  
    let url = $("[itemprop = 'url']").text().trim();
  
    return url;
}

module.exports = {
    getUrl
};