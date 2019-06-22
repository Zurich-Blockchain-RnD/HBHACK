var Kilt = require('@kiltprotocol/sdk-js');
var axios = require('axios');
var AWS = require('aws-sdk');

var sqs = new AWS.SQS({region: 'us-east-1'});
const params = {QueueName: 'KiltMessagingQueue'};
sqs.listQueues(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.QueueUrls);
    }
  });
  
return;

const url = 'https://services.kilt.io/messaging/inbox/5FLgDeZ3EcEKHetPPsb8PEM3nyy8gLVpd7EFwi9J153d1qh3';
axios.get(url)
    .then((response) => {
        Kilt.default.connect('wss://full-nodes.kilt.io:9944');
        const message = response.data[response.data.length-1];
        console.log(message);
        //const claimer = new Kilt.PublicIdentity(message.senderAddress, '0xe810c9922ad7b65d283c3845e1eff3f7a55bdfaad16d9f821173a5d3ba516918');
        const claimer = Kilt.Identity.buildFromMnemonic('gloom total paper devote cream alien aerobic endorse step soon wood cement');
        // const claimer = {
        //     address: '5CcM6pNpEdPLzA4aQHUmCns56ubrbyasNpZdrkkyBXSH6kZR',
        //     boxPublicKeyAsHex: '',
        // };
        const attester = Kilt.Identity.buildFromMnemonic('filter mother share quality mystery box cabin wood promote suit tourist provide');
        console.log(claimer);
        console.log(attester.address);
        const decrypted = Kilt.Message.createFromEncryptedMessage(
            message,
            claimer,
            attester
        );
        console.log(decrypted.body.content.claim);
        const attestation = new Kilt.Attestation(decrypted.body.content, attester);
        console.log(attestation);
        attestation.store(attester).then((res) => {
            console.log('Attestation ready', res);
            const attestedClaim = new Kilt.AttestedClaim(decrypted.body.content, attestation);
            const messageBodyBack = {
                content: attestedClaim,
                type: Kilt.MessageBodyType.SUBMIT_ATTESTATION_FOR_CLAIM,
              }
              const messageBack = new Kilt.Message(messageBodyBack, attester, claimer);
              console.log(messageBack.body.content);
              axios.post(
                'https://services.kilt.io/messaging',
                messageBack
            ).then((res) => {
                console.log('Message Response:', res);
            });
        })

    });

