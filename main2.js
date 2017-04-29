var BTCE = require('btc-e'),
    btceTrade = new BTCE("", ""),
    // No need to provide keys if you're only using the public api methods. 
    btcePublic = new BTCE();
 
// Public API method call. 
// Note: Could use "btceTrade" here as well.
var ltc_btc;
var btc_usd;
var btc_rur;
var btc_eur;
var ltc_usd;
var ltc_rur;
var ltc_eur;
var nmc_usd;
var nmc_btc;
var nvc_btc;
var nvc_usd;
var usd_rur;
var eur_usd;
var eur_rur;
var ppc_btc;
var ppc_usd;
var dsh_usd;
var dsh_btc;
var dsh_eur;
var dsh_rur;
var dsh_ltc;
var dsh_eth;
var dsh_usd;
var dsh_btc;
var dsh_ltc;
var dsh_eur;
var dsh_rur;
var priceObjectArry = [];
var priceObject = new Object();

btcePublic.ticker("btc_usd", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    btc_usd = data.ticker.buy;
}); 
btcePublic.ticker("ltc_btc", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    ltc_btc = data.ticker.buy;
}); 
btcePublic.ticker("btc_rur", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    btc_rur=data.ticker.buy;
}); 
btcePublic.ticker("btc_eur", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    btc_eur=data.ticker.buy;
}); 
btcePublic.ticker("ltc_usd", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    ltc_usd=data.ticker.buy;
}); 
btcePublic.ticker("ltc_rur", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    ltc_rur=data.ticker.buy;
}); 
btcePublic.ticker("ltc_eur", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    ltc_eur=data.ticker.buy;
}); 
btcePublic.ticker("nmc_btc", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    nmc_btc=data.ticker.buy;
}); 
btcePublic.ticker("nmc_usd", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    nmc_usd=data.ticker.buy;
}); 
btcePublic.ticker("nvc_btc", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    nvc_btc=data.ticker.buy;
}); 
btcePublic.ticker("nvc_usd", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    nvc_usd=data.ticker.buy;
}); 
btcePublic.ticker("usd_rur", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    usd_rur=data.ticker.buy;
}); 
btcePublic.ticker("eur_usd", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    eur_usd=data.ticker.buy;
}); 
btcePublic.ticker("eur_rur", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    eur_rur=data.ticker.buy;
}); 
btcePublic.ticker("ppc_btc", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    ppc_btc=data.ticker.buy;
}); 
btcePublic.ticker("ppc_usd", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    ppc_usd=data.ticker.buy;
}); 
btcePublic.ticker("dsh_btc", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    dsh_btc=data.ticker.buy;
}); 
btcePublic.ticker("dsh_usd", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    dsh_usd=data.ticker.buy;
}); 
btcePublic.ticker("dsh_rur", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    dsh_rur=data.ticker.buy;
}); 
btcePublic.ticker("dsh_eur", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    dsh_eur=data.ticker.buy;
}); 
btcePublic.ticker("dsh_ltc", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    dsh_ltc=data.ticker.buy;
}); 
btcePublic.ticker("dsh_eth", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    dsh_eth=data.ticker.buy;
}); 
btcePublic.ticker("eth_btc", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    eth_btc=data.ticker.buy;
}); 
btcePublic.ticker("eth_usd", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    eth_usd=data.ticker.buy;
}); 
btcePublic.ticker("eth_rur", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    eth_rur=data.ticker.buy;
}); 
btcePublic.ticker("eth_eur", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    eth_eur=data.ticker.buy;
}); 
btcePublic.ticker("eth_ltc", function (err,data){
    console.log(data);
    console.log(data.ticker.buy);
    eth_ltc=data.ticker.buy;
}); 

// Trade API method call. 
btceTrade.getInfo(function(err, info) {
  console.log(err, info);
});
var millisecondsToWait = 2000;
setTimeout(function() {
priceObject['eth_ltc'] = eth_ltc;
priceObject['eth_eur'] = eth_eur;
priceObject['eth_rur'] = eth_rur;
priceObject['eth_usd'] = eth_usd;
priceObject['eth_btc'] = eth_btc;
priceObject['dsh_eth'] = dsh_eth;
priceObject['dsh_ltc'] = dsh_ltc;
priceObject['dsh_eur'] = dsh_eur;
priceObject['dsh_rur'] = dsh_rur;
priceObject['dsh_usd'] = dsh_usd;
priceObject['dsh_btc'] = dsh_btc;
priceObject['ppc_usd'] = ppc_usd;
priceObject['ppc_btc'] = ppc_btc;
priceObject['nmc_usd'] = nmc_usd;
priceObject['eur_rur'] = eur_rur;
priceObject['eur_usd'] = eur_usd;
priceObject['usd_rur'] = usd_rur;
priceObject['nvc_usd'] = nvc_usd;
priceObject['nvc_btc'] = nvc_btc;
priceObject['nmc_btc'] = nmc_btc;
priceObject['ltc_eur'] = ltc_eur;
priceObject['ltc_rur'] = ltc_rur;
priceObject['ltc_usd'] = ltc_usd;
priceObject['btc_eur'] = btc_eur;
priceObject['btc_rur'] = btc_rur;
priceObject['ltc_btc'] = ltc_btc;
priceObject['btc_usd'] = btc_usd;
console.log(priceObject);
}, millisecondsToWait);

