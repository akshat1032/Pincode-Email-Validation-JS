let pinCodeExpression = RegExp('^[1-9]{1}[0-9]{5}$');
let samplePINCode = "400088";
let samplePINCode2 = "A400088";
let samplePINCode3 = "400088B";

// UC_1 Validate pincode digit pattern and length
isPINCodeValid1(samplePINCode);

// UC_2 Validate pincode, no special character or alphabet at the beginning
isPINCodeValid1(samplePINCode2);

// UC_3 Validate pincode, no special character or alphabet at the end
isPINCodeValid1(samplePINCode3);

function isPINCodeValid1(sample) {
    let isPINCodeValid = pinCodeExpression.test(sample);
    console.log(sample,"PIN Code is valid : ", isPINCodeValid);
}

