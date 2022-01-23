const getTotalPages = async ($) => {
    let numberOfPages = $('.current').attr('data-total-pages');
    return numberOfPages;
}

module.exports = {
    getTotalPages
};