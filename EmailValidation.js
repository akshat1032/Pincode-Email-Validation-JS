let emailExpression = RegExp('^(abc)');
let sampleMandatory1 = "abc.xyz@bridgelabz.co.in";

// UC_5 Validate email, first mandatory part
isEmailValid1(sampleMandatory1);

function isEmailValid1(sample){
    let isEmailValid = emailExpression.test(sample);
    console.log(sample," is valid : ",isEmailValid);
}
