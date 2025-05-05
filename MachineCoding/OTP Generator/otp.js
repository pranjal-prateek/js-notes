function otpGenerator(length = 6){
  let otp='';

  for(let i=0;i<length;i++){
    otp += Math.floor(Math.random())
  }
  console.log('otp:',otp);
};

otpGenerator()