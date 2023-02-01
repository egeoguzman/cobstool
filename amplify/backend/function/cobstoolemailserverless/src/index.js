/* Amplify Params - DO NOT EDIT
	API_COBSCOGNITO2DDB_GRAPHQLAPIENDPOINTOUTPUT
	API_COBSCOGNITO2DDB_GRAPHQLAPIIDOUTPUT
	AUTH_COBSAMPLIFIED_USERPOOLID
	ENV
	FUNCTION_COBSAMPLIFIEDPOSTCONFIRMATION_NAME
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};
