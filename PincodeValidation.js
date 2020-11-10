let pinCodeExpression = RegExp('^[1-9]{1}[0-9]{5}$');
let samplePINCode = "400088";

// UC_1 Validate pincode digit pattern and length 
let isPINCodeValid = pincodeExpression.test();
console.log("PIN Code is valid : ",isPINCodeValid);