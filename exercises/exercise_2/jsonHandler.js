const fs = require("fs");

module.exports.readJsonFile = function () {
    var result = JSON.parse(fs.readFileSync("/home/cosmin/workspace/Tweeter-BE/exercises/exercise_2/data.json"));
    return result;
}

module.exports.writeJsonFile = function (json) {
  fs.writeFileSync(
    "/home/cosmin/workspace/Tweeter-BE/exercises/exercise_2/data.json",
    JSON.stringify(json, null, 4),
    "utf8",
    err => {
      if (err) {
        console.log(err);
      }
    }
  );
}