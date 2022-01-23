const getTitle = async ($) => {
    
    let title = $('h1').text().trim();
  
    return title;
}

module.exports = {
    getTitle
};