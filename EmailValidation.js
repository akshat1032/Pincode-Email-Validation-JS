let emailExpression = RegExp('^[a-z]{3,}(.)?(@[a-z]{2,})(.([a-z]{2,}))$');
let sampleMandatory1 = "abc.@bridgelabz.co";

// UC_7 Validate email, third mandatory part
isEmailValid1(sampleMandatory1);

function isEmailValid1(sample){
    let isEmailValid = emailExpression.test(sample);
    console.log(sample," is valid : ",isEmailValid);
}
