const User = require('../Models/user');

//Step1 Create db object with blank email and mobile and return id to complete step 2 and 3
exports.email = function (req,res) {
  var email = req.body.email;
  console.log(email);
  User.create({ name: "", email: email, cell: " "}, function (err, awesome_instance) {
      if (err) {  res.send({success:false, message:err}); return this.handleError(err);}
      else res.send({success:true});//TODO Return ID
    });

}
exports.fullName = function (req,res) {
  var name = req.body.name;
  var email = req.body.email;
  console.log(name);
  User.update({email:email}, {name: name}, function(err, numberAffected, rawResponse) {
      if (err) return res.send({success: false,error: err });
      return res.send({success: true});
  });
}

exports.mobileNumber = function (req,res) {
  var mobile = req.body.mobile;
  var email = req.body.email;
  console.log(mobile);
  User.update({email:email}, {mobile: mobile}, function(err, numberAffected, rawResponse) {
      if (err) return res.send({success: false,error: err });
      return res.send({success: true});
    });
}


handleError = (err) => {
  console.log(err);
}
