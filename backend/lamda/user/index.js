var AWS = require('aws-sdk');
//import Kilt from '@kiltprotocol/sdk-js';
var Kilt = require('@kiltprotocol/sdk-js');
const region = "us-east-1";
var secret, decodedBinarySecret;

exports.handler =  (event, context, callback) => {

    getSecret(event, (secret) => {
        console.log('secret: ',secret);
        const response = {
        statusCode: 200,
        headers : {
            "Access-Control-Allow-Origin":"*"
        },
        body: JSON.stringify({address: secret.address}),
    };
    callback(null,response);
    })
    
     
};
    


function getSecret(event, cb) {
    let sub = event.requestContext.authorizer.claims.sub;
    console.log('SUB: ', sub);
    
     var client = new AWS.SecretsManager({
    region: region,
    });
        client.getSecretValue({SecretId: sub}, function(err, data) {
    if (err) {
        console.log('error', err)
        if (err.code === 'DecryptionFailureException')
         
            throw err;
        else if (err.code === 'InternalServiceErrorException')
           
            throw err;
        else if (err.code === 'InvalidParameterException')
            
            throw err;
        else if (err.code === 'InvalidRequestException')
            
            throw err;
        else if (err.code === 'ResourceNotFoundException') {
      
            const mnemonic = Kilt.Identity.generateMnemonic();
            const claimer = Kilt.Identity.buildFromMnemonic(mnemonic); 
            const address = claimer.address;

            let secrets = {
                sub,
                mnemonic,
                address
            };
    
            
            var params = {
                Name: sub, 
                SecretString: JSON.stringify(secrets)
               };
               client.createSecret(params, function(err, data) {
                 if (err) console.log(err, err.stack); // an error occurred
                 else     console.log('DATA: ', data);           // successful response
               });
            getSecret(event, cb); 
        }
            
    }
    else {
        console.log('TEST: ',data);
        if ('SecretString' in data) {
            secret = data.SecretString;
        } else {
            let buff = new Buffer(data.SecretBinary, 'base64');
            decodedBinarySecret = buff.toString('ascii');
        }
        cb(JSON.parse(secret));
    }
    
});
        }
