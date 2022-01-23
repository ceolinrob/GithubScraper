const Bluebird  = require('bluebird');
const Request   = Bluebird.promisify(require('request'));

const baseUrl = "https://github.com/";

const getBody = async () => {

  let response = await Request({
    url: baseUrl + 'facebook',
    method: "GET",
    headers: { 'Cache-Control': 'no-cache' },
    timeout: 10000
  });
    if (response.statusCode != 200) throw new Error (`Request failed with code ${response.statusCode}, abborting operation.`);

    return response.body;
}

const getNextPage = async (url) => {
  let response = await Request({
    url: baseUrl + url,
    method: "GET",
    headers: { 'Cache-Control': 'no-cache' },
    timeout: 10000
  });

    return response.body;
}

const getRepositories = async (url) => {
  let response = await Request({
    url: baseUrl + url,
    method: "GET",
    headers: { 'Cache-Control': 'no-cache' },
    timeout: 10000
  });

    return response.body;
}

module.exports = {
    getBody, getNextPage, getRepositories
};