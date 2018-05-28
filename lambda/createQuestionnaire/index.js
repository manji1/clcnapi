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

// sample
const item = {
    id: 3,
    title: 'Sample Title',
    author: 'Bob',
    questions: [
        {
            no: 1,
            type: 1,
            question: 'AとBどっちが好きですか',
            choices: [
                {
                    id: 1,
                    answer: 'A',
                    img: null
                },
                {
                    id: 2,
                    answer: 'B',
                    img: null
                }
            ]
        },
        {
            no: 2,
            type: 1,
            question: '1から4の中で好きなものを選んでください',
            choices: [
                {
                    id: 1,
                    answer: '1',
                    img: null
                },
                {
                    id: 2,
                    answer: '2',
                    img: null
                },
                {
                    id: 3,
                    answer: '3',
                    img: null
                },
                {
                    id:4,
                    answer: '4',
                    img: null
                }
            ]
        }
    ]
};