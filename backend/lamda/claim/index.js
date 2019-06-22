/* 
This is a Lamda Function for Claiming an CTYPE
Some Parameters are hard coded for testing
Steps:
- The mnemonic is fetched from the Secrets Manager of AWS based of the JWT Token from the Authentification Process from Cognito (will be replaced by the KMS for more security)
- A Claim will be generated
- The Claim is used to generated an encryped Message witch is send to the KILT Messaging Service (will be replaced by the SQS Service)
- The Function returns the Claim to the API User
*/
var AWS = require('aws-sdk');
var Kilt = require('@kiltprotocol/sdk-js');
var axios = require('axios');
const region = "us-east-1";
var secret, decodedBinarySecret;

exports.handler = (event, context, callback) => {


    getSecret(event, (secret) => {
        // const data = JSON.parse(event.body);
        // const ctype = data.ctype;
        // console.log('CTYPE', ctype);

        const rawClaim = {
            over_eighteen: true,
        };

        axios.get('https://services.kilt.io/ctype/0x351357607e77a4dfe7f4f84cf60fcaeb8fac18dca561526fba06d71b3fa48adc').then((res) => {
            //Kilt.connect('wss://full-nodes.kilt.io:9944'); 
            const claimer = Kilt.Identity.buildFromMnemonic(secret.mnemonic);
            const claim = new Kilt.Claim(res.data.cType, rawClaim, claimer);
            console.log('Mnemonic', secret.mnemonic);
            console.log('claimer:', claimer.address);
            const requestForAttestation = new Kilt.RequestForAttestation(claim, [], claimer);
            const messageBody = {
                content: requestForAttestation,
                type: "request-attestation-for-claim",
            };
            const attester = Kilt.Identity.buildFromMnemonic('filter mother share quality mystery box cabin wood promote suit tourist provide')
            let message = new Kilt.Message(messageBody, claimer, attester);
            message = message.getEncryptedMessage();
            console.log('attester:', attester.address);
            console.log('Message: ', message);

            const messageObject = {
                createdAt: message.createdAt,
                hash: message.hash,
                message: message.message,
                nonce: message.nonce,
                receiverAddress: message.receiverAddress,
                senderAddress: message.senderAddress,
                signature: message.signature,
            };
            axios.post(
                'https://services.kilt.io/messaging',
                messageObject
            ).then((res) => {
                console.log('Message Response:', res);
                const response = {
                    statusCode: 200,
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify({ claim }),
                };
                callback(null, response);
            });

            
        });


    })


};



function getSecret(event, cb) {
    let sub = event.requestContext.authorizer.claims.sub;

    var client = new AWS.SecretsManager({
        region: region,
    });
    client.getSecretValue({ SecretId: sub }, function (err, data) {
        if (err) {
            throw err;

        }
        else {
            console.log('TEST: ', data);
            if ('SecretString' in data) {
                secret = data.SecretString;
            } else {
                let buff = new Buffer(data.SecretBinary, 'base64');
                decodedBinarySecret = buff.toString('ascii');
            }
            console.log(secret);
            cb(JSON.parse(secret));
        }

    });
}
