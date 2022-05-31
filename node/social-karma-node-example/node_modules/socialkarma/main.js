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

    var respBody;
    
    request(options, function (error, response) {
      if (error) throw new Error(error);
      respBody = response.body
    });

    return respBody
  }
}

module.exports = Client;
