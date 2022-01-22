const getTitle = async (Cheerio, body) => {
  
    let $ = Cheerio.load(body);
    let title = $('h1').text().trim();
  
    console.log(title);
    return title;
}

module.exports = {
    getTitle
};