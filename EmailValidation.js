let emailExpression =  RegExp('^(abc)+(((\\.[0-9])|(\\+[0-9])|(\\-[0-9])|[0-9]){0,})@[a-z0-9]{1,}(.)(([a-z]{2,}(.))|([a-z]{2,}(,)))[a-z]{0,}');
let sampleMandatory1 = "abc+100@1.com";

// UC_9 Validate email, close email with optional part
isEmailValid1(sampleMandatory1);

function isEmailValid1(sample){
    let isEmailValid = emailExpression.test(sample);
    console.log(sample," is valid : ",isEmailValid);
}
