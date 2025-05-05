const accountId = 144553
let accountEmail = "parv@google.com"
var accountPassword = "parv123"
accountCity = "delhi"
let accountState;

// accountId = 2 // not allowed 

accountEmail = "parv@hc.com"
accountPassword = "hc123"
accountCity = "karnal"

console.log(accountId);


/*
prefer not to use var
becoz of issue of block scope and functional scope 
*/


console.table([accountId , accountEmail, accountPassword, accountCity, accountState ])
