var AWS = require("aws-sdk");

class AWSObj {
    constructor(){

        if(!!AWSObj.instance){
            return AWSObj.instance;
        }

        //DynamoDB configuration
       
        AWS.config.update({
            accessKeyId: "",
            secretAccessKey: "",
            region: "eu-central-1",
            endpoint: "http://localhost:4566"
        });
            
        
        this.dynamodb = new AWS.DynamoDB()
        this.docClient = new AWS.DynamoDB.DocumentClient();
        
        AWSObj.instance = this;
        return this;
    }


    getDynamoDb(){
        return this.dynamodb;
    }

    getDocClient(){
        return this.docClient;
    }
}

module.exports = AWSObj;

module.exports.getInstance = () => {
    conf = new AWSObj();
    return AWSObj.instance;
}