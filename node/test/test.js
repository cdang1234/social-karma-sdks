var request = require('request');

function test() { 
  var options = {
    'method': 'POST',
    'url': 'https://api.socialkarma.xyz/api/v1/tracker/warning',
    'headers': {
      'Auth': "22f30b08-b169-11ec-b909-0242ac120002",
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "UserId": "123",
    })
  };
  
  return new Promise(function(resolve, reject){
    request(options, function (err, response, body) {
        if (err) return reject(err);
        try {
            // JSON.parse() can throw an exception if not valid JSON
            resolve(JSON.parse(body).data);
        } catch(e) {
            reject(e);
        }
    });
  });
}

test().then(function(val) {
  console.log(val);
}).catch(function(err) {
  console.err(err);
});
