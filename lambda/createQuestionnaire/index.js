const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({
    region: 'ap-northeast-1'
});

exports.handler = (event) => {
    const params = {
        TableName: 'questionnaire',
        Item: event
    };
    docClient.put(params, (err, data) => {
        if (err) {
            console.error('Failed to add item: ', JSON.stringify(err, null, 2));
        } else {
            console.log('Added.', JSON.stringify(data, null, 2));
        }
    });
    console.log('kicked put.');
};
