const getRepos = async ($) => {
    let arr = [];
    $("[itemprop = 'name codeRepository']").each((key, value) => {
        arr.push($(value).text().trim());
    });
  
    return arr;
}

module.exports = {
    getRepos
};