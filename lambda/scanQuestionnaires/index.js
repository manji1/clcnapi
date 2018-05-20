const AWS = require('aws-sdk');
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const params = {
    TableName: 'questionnaire',
    Limit: 5
};
exports.handler = (event, context, callback) => {
    dynamoClient.scan(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            callback(null, data);
        }
    });
};
