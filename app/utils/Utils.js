const fs = require("fs");
var UUIDGenerator = require('uuid');
var Config = require("../env/Config");

module.exports.readJSONFileByTableName = async (table) => {
  var result = JSON.parse(fs.readFileSync("D:/Projects/Tweeter-BE/app/utils/db.json"))[table];
  return result ? result : [];
}

module.exports.readJSONFile = async () => {
  var result = JSON.parse(fs.readFileSync("D:/Projects/Tweeter-BE/app/utils/db.json"));
  return result ? result : [];
}

module.exports.writeJSONFile = async (table, content) => {
  var json = await this.readJSONFile();
  json[table] = content;
  fs.writeFileSync(
    "D:/Projects/Tweeter-BE/app/utils/db.json",
    JSON.stringify(json, null, 4),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}

module.exports.generateUUID = (data) => {
    return UUIDGenerator.v5(data, Config.namespaceUUID);
  }