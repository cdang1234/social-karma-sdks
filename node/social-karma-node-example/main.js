const Client = require('socialkarma');

let client = new Client("22f30b08-b169-11ec-b909-0242ac120002");

client.submitReport(
  "123",          // reported user id
  "20",           // reporting user id
  "",             // title
  "node sdk test" // description
).then(function(val) {
  console.log(val);
  // response: { data: '', error: '', succeeded: true }
}).catch(function(err) {
  console.err(err);
});

client.getBanStatus("123").then(function(val) {
  console.log(val);
  // response: { data: { warningCount: 1 }, error: '', succeeded: true }
}).catch(function(err) {
  console.err(err);
});

client.getWarningCount("123").then(function(val) {
  console.log(val);
  // response: { data: { banStatus: true }, error: '', succeeded: true }
}).catch(function(err) {
  console.err(err);
});
