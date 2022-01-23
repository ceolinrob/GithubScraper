const getLocation = async ($) => {
  
    let locationDto = $("[itemprop = 'location']").text().trim();
  
    return locationDto;
}

module.exports = {
    getLocation
};