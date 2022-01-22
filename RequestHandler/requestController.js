const Bluebird  = require('bluebird');
const Request   = Bluebird.promisify(require('request'));

const getBody = async () => {

  let response = await Request({
    url: 'https://github.com/facebook',
    method: "GET",
    headers: { 'Cache-Control': 'no-cache' },
    timeout: 10000
  });
    if (response.statusCode != 200) throw new Error (`Request failed with code ${response.statusCode}, abborting operation.`);

    return response.body;
}

const getNextPage = async (url) => {

  let response = await Request({
    url: url,
    method: "GET",
    headers: { 'Cache-Control': 'no-cache' },
    timeout: 10000
  });

    return response.body;
}

module.exports = {
    getBody, getNextPage
};