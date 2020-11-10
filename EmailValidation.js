let emailExpression = RegExp('^[a-z]{3,}(.)([a-z_+-.]{3,})?(@[a-z]{2,})(.([a-z]{2,}))$');
let sampleMandatory1 = "abc.xy+z@bridgelabz.co";

// UC_8 Validate email, optional part
isEmailValid1(sampleMandatory1);

function isEmailValid1(sample){
    let isEmailValid = emailExpression.test(sample);
    console.log(sample," is valid : ",isEmailValid);
}
