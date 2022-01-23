const getLocation = async ($) => {
  
    let location = $("[itemprop = 'location']").text().trim();
  
    return location;
}

module.exports = {
    getLocation
};