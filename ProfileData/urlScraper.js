const getUrl = async ($) => {
  
    let url = $("[itemprop = 'url']").text().trim();
  
    console.log(url);
    return url;
}

module.exports = {
    getUrl
};