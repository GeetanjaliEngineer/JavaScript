const accountId = 144553
let accountEmail = "geetanjali@gmail.com"
let accountPassword = "12345"
accountCity =  "Jaipur"

// accountId = 2   //not allowed


accountEmail= "hc@hc.com"
accountPassword ="2121312"
accountCity = "Bengluru"

let accountState;

console.log(accountId);
//table
/*
prefer not to use var 
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


