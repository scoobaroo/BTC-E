//
//var BTCE = require('btc-e'),
//    HttpsAgent = require('agentkeepalive').HttpsAgent,
//    btceTrade = new BTCE("KXB6KT0F-4AJM5O2A-3ZRSF5L1-2X0VNBLS-B9BXAK8N", 
//        "f1d24fd6adc2ff1f2b8a8b5a03c1a87d34133e4f248a5eab32fb755539c3b696", {
//      agent: new HttpsAgent()
//    });
//  
var BTCE = require('btc-e'),
fs = require('fs'),
currentNonce = fs.existsSync("nonce.json") ? JSON.parse(fs.readFileSync("nonce.json")) : 0,
// Provide a nonce generation function as the third parameter if desired. 
// The function must provide a number that is larger than the one before and must not 
// be larger than the 32-bit unsigned integer max value of 4294967294. 
btce = new BTCE("KXB6KT0F-4AJM5O2A-3ZRSF5L1-2X0VNBLS-B9BXAK8N", 
"f1d24fd6adc2ff1f2b8a8b5a03c1a87d34133e4f248a5eab32fb755539c3b696", {
  nonce: function() {
    currentNonce++;
    fs.writeFile("nonce.json", currentNonce);
    return currentNonce;
  }
});
 
btce.getInfo(function(err, info) {
  console.log(err, info);
});

btce.ticker("btc_usd", displayPrice);
btce.ticker("ltc_btc", displayPrice);
btce.ticker("btc_rur", displayPrice);
btce.ticker("btc_eur", displayPrice);
btce.ticker("ltc_usd", displayPrice);
btce.ticker("ltc_rur", displayPrice);
btce.ticker("ltc_eur", displayPrice);
btce.ticker("nmc_btc", displayPrice);
btce.ticker("nmc_usd", displayPrice);
btce.ticker("nvc_btc", displayPrice);
btce.ticker("nvc_usd", displayPrice);
btce.ticker("usd_rur", displayPrice);
btce.ticker("eur_usd", displayPrice);
btce.ticker("eur_rur", displayPrice);
btce.ticker("ppc_btc", displayPrice);
btce.ticker("ppc_usd", displayPrice);
btce.ticker("dsh_btc", displayPrice);
btce.ticker("dsh_usd", displayPrice);
btce.ticker("dsh_rur", displayPrice);
btce.ticker("dsh_eur", displayPrice);
btce.ticker("dsh_ltc", displayPrice);
btce.ticker("dsh_eth", displayPrice);
btce.ticker("eth_btc", displayPrice);
btce.ticker("eth_usd", displayPrice);
btce.ticker("eth_rur", displayPrice);
btce.ticker("eth_eur", displayPrice);
btce.ticker("eth_ltc", displayPrice);


function displayPrice(err, data){
    console.log(err, data);
}
console.log("In btc-e application");