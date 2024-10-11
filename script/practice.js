let address = "Skibidi Street 69 Blk 69 #09-69 123456";
const nric = "T1234567A";
console.log(address);
console.log(nric);

// old way
function calIncome() {
    console.log("$50,000");
}

// new way
let calTax = () => {
    console.log("$1,000")
}
// call functions
calIncome()
calTax()