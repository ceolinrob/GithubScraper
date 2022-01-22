const getTitle = async ($) => {
    
    let title = $('h1').text().trim();
  
    console.log(title);
    return title;
}

module.exports = {
    getTitle
};