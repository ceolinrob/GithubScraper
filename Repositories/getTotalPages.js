const getTotalPages = async ($) => {
    let numberOfPagesDto = $('.current').attr('data-total-pages');
    return numberOfPagesDto;
}

module.exports = {
    getTotalPages
};