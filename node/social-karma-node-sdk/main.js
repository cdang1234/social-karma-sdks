var request = require('request');

class Client {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  submitReport(reportedUserId, reportingUserId, title, description) {
    var options = {
      'method': 'POST',
      'url': 'https://api.socialkarma.xyz/api/v1/report',
      'headers': {
        'Auth': this.apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "ReportedUserId": reportedUserId,
        "ReportingUserId": reportingUserId,
        "Title": title,
        "Description": description,
        "Queue": 1
      })
    };
    
    return new Promise(function(resolve, reject){
      request(options, function (err, response, body) {
          if (err) return reject(err);
          try {
              // JSON.parse() can throw an exception if not valid JSON
              resolve(JSON.parse(body));
          } catch(e) {
              reject(e);
          }
      });
    });
  }

  getBanStatus(userId) {
    var options = {
      'method': 'POST',
      'url': 'https://api.socialkarma.xyz/api/v1/tracker/ban',
      'headers': {
        'Auth': this.apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "UserId": userId,
      })
    };
    
    return new Promise(function(resolve, reject){
      request(options, function (err, response, body) {
          if (err) return reject(err);
          try {
              // JSON.parse() can throw an exception if not valid JSON
              resolve(JSON.parse(body));
          } catch(e) {
              reject(e);
          }
      });
    });
  }

  getWarningCount(userId) {
    var options = {
      'method': 'POST',
      'url': 'https://api.socialkarma.xyz/api/v1/tracker/warning',
      'headers': {
        'Auth': this.apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "UserId": userId,
      })
    };
    
    return new Promise(function(resolve, reject){
      request(options, function (err, response, body) {
          if (err) return reject(err);
          try {
              // JSON.parse() can throw an exception if not valid JSON
              resolve(JSON.parse(body));
          } catch(e) {
              reject(e);
          }
      });
    });
  }
}

module.exports = Client;
