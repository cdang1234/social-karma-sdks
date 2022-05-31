const Client = require('socialkarma');

let client = new Client("22f30b08-b169-11ec-b909-0242ac120002");

client.submitReport(
  "123",          // reported user id
  "20",           // reporting user id
  "",             // title
  "node sdk test" // description
)
