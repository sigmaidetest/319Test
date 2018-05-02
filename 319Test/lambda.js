let AWS = require('aws-sdk');
let SL_AWS = require('slappforge-sdk-aws');
const sqs = new SL_AWS.SQS(AWS);
exports.handler = function (event, context, callback) {

	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/318300609668/319TestQueue',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '1',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0'
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			console.log(message);
		});
		callback(null, 'Successfully executed');
	}, function (error) {
		console.log('An error occurred', error);
		callback(error, null);
	});
}