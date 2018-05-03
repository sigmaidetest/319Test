let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);
exports.handler = function (event, context, callback) {


    // sqs.receiveMessage({
    //     QueueUrl: 'https://sqs.us-east-1.amazonaws.com/318300609668/319TestQueue',
    //     AttributeNames: ['All'],
    //     MaxNumberOfMessages: '1',
    //     VisibilityTimeout: '30',
    //     WaitTimeSeconds: '0'
    // }).promise()
    //     .then(receivedMsgData => {
    //         if (receivedMsgData !== null) {
    //             let receivedMessages = receivedMsgData.Messages;
    //             receivedMessages.forEach(message => {
    //                 console.log(message);
    //             });
    //             callback(null, 'Message processing finished');
    //         } else {
    //             console.log('No messages to process');
    //             callback(null, 'No messages to process');
    //         }
    //     })
    //     .catch(err => {
    //         console.log('Error occurred', err);
    //         callback(err);
    //     });

    sqs.receiveMessage({
        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/318300609668/319TestQueue',
        AttributeNames: ['All'],
        MaxNumberOfMessages: '1',
        VisibilityTimeout: '30',
        WaitTimeSeconds: '0'
    }, (err, receivedMsgData) => {
        if (err) {
            console.log('Error occurred', err);
            callback(err);
        } else {
            if (receivedMsgData !== null) {
                let receivedMessages = receivedMsgData.Messages;
                receivedMessages.forEach(message => {
                    console.log(message);
                });
                callback(null, 'Message processing finished');
            } else {
                console.log('No messages to process');
                callback(null, 'No messages to process');
            }
        }
    });





}