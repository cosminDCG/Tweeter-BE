const fs = require("fs");

function processFile() {
    var text = fs.readFileSync('C:/Users/cosmi/OneDrive/Desktop/Tweeter-BE/exercises/exercise_1/input.txt', "utf8", err => {
        if(err) {
            console.log(err);
        }
    });
    
    console.log(text);

    var date = new Date();
    text = text + " " + date.toLocaleDateString();
    console.log(text);

    fs.writeFile(
        "C:/Users/cosmi/OneDrive/Desktop/Tweeter-BE/exercises/exercise_1/output.txt",
        text,
        "utf8",
        err => {
          if (err) {
            console.log(err);
          }
        }
      );
}

processFile();