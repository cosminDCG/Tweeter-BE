var jsonHandler = require("./jsonHandler");

function processJson() {
    var json = jsonHandler.readJsonFile();
    console.log(json);

    json["nume"] = "Cosmin Dimisca"
    //puteti scrie si json.nume = ...

    json.dataNastere = "18.08.1997";
    json["facultate"].nume = "FMI";
    json["facultate"].oras = "Bucuresti";
    json.cursuri.push("Node");

    console.log(json);
    
    jsonHandler.writeJsonFile(json);
}

processJson();