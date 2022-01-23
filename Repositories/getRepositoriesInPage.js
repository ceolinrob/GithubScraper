const getRepos = async ($) => {
    let arrayDto = [];
    $("[itemprop = 'name codeRepository']").each((key, value) => {
        let object = {};
        object.name = $(value).text().trim();
        arrayDto.push(object);
    });
  
    return arrayDto;
}

module.exports = {
    getRepos
};