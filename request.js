const request = require('request');

request('http://www.boredapi.com/api/activity', (err, res, body) => {
  // if (err) {
  //   return console.log(err);
  // }
  // if(res) {
  //   // return console.log('res',res);
  // }
  if(body) {
    return console.log('body', JSON.parse(body));
  }
})