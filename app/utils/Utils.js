const fs = require("fs");
var UUIDGenerator = require('uuid');
var Config = require("../env/Config");

module.exports.promisify = (object, func) => {
  return function (...args) { // return a wrapper-function
    return new Promise((resolve, reject) => {
      function callback(err, result) { // our custom callback for f
        if (err) {
          return reject(err);
        } else {
          resolve(result);
        }
      }

      args.push(callback); // append our custom callback to the end of f arguments

      func.call(object, ...args); // call the original function
    });
  };
};


module.exports.invokeCallbackFunction = async (object, func, ...args) =>{
    let promisAwareFunction = this.promisify(object, func);
    return await promisAwareFunction(...args);
}


module.exports.generateUUID = (data) => {
    return UUIDGenerator.v5(data, Config.namespaceUUID);
  }