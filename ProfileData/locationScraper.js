const getLocation = async ($) => {
  
    let location = $("[itemprop = 'location']").text().trim();
  
    console.log(location);
    return location;
}

module.exports = {
    getLocation
};