const Bluebird  = require('bluebird');
const Request   = Bluebird.promisify(require('request'));

const getBody = async () => {

  let response = await Request({
    url: 'https://github.com/facebook',
    method: "GET",
    headers: { 'Cache-Control': 'no-cache' },
    timeout: 10000
  });

    return response.body;
}

module.exports = {
    getBody
};