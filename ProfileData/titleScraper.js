const getTitle = async ($) => {
    
    let titleDto = $('h1').text().trim();
  
    return titleDto;
}

module.exports = {
    getTitle
};