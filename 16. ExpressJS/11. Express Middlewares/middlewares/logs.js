function userCredential(req,res,next) {
  console.log('usename: (alex)');
  console.log('email: (alex@gmail.com)');
  console.log('password: (alex1234)');
  console.log('age: (18)');
  next();
}

export default userCredential;