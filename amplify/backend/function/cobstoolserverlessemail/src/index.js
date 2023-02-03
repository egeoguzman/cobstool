const aws = require('aws-sdk')
const ses = new aws.SES()
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    
    const obj = JSON.parse(event.body)
    const customerName = obj.customer_name;
    const customerEmail = obj.customer_email;
    await ses
        .sendEmail({
            Destination: {
            ToAddresses: [customerEmail],
            },
            Source: "eoguzman@amazon.com",
            Message: {
            Subject: { Data: '[REMINDER] Please fill out our Survey!' },
            Body: {
                Text: { Data: `Hi ${customerName} \n Your feedbacks are important for us. Please fill out the survey for our Solution Architects. \n This is the survey link here: https://dev.d2z7h9t7m3t599.amplifyapp.com` },
            },
            },
        })
        .promise()
      
    return { 

        'statusCode': 200,
        'headers': 
            {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST'
            },
        
        'body': JSON.stringify("Email has been sent!")
  };
}