const request = require('request');

request('http://www.boredapi.com/api/activity', (err, res, body) => {
  if (err) {
    return console.log('ERROR:', err)
  }

  // if (res) {
  //   return console.log('RES object +++++++++++++>', res);
  // }
    return console.log('body', JSON.parse(body));

});