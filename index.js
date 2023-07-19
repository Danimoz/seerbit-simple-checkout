function paywithSeerbit() {
  SeerbitPay({
    //replace with your public key
    "public_key": "SBPUBK_DQ24K6T5TI1WOAOYPWWYMGMHKDRVEGPW",
    "tranref": new Date().getTime(),
    "currency": "NGN",
    "country": "NG",
    "amount": getAmount(),
    "email": "test@emaildomain.com",
    //optional field. Set to true to allow customer set the amount
    "setAmountByCustomer": true,
    "full_name": "John Doe", //optional
    "tokenize" : false, // set to true to allow token capture
    "callbackurl": "http://yourdomain.com",
    },
    function callback(response, closeModal) {
      console.log(response) //response of transaction
    },
    function close(close) {
      console.log(close) //transaction close
  })
}

function getAmount() {
  return document.getElementById('donation-amount').value;
}

