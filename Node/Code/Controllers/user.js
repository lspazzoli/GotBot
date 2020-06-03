const User = require('../Models/user');

exports.email = function (req,res) {
  var email = req.body.email;
  User.update({_id:id}, {email: email}, function(err, numberAffected, rawResponse) {
      if (err) return res.send({success: false,error: err });
      return res.send({success: true});
    });
}
//Step1 Create db object with blank email and mobile and return id to complete step 2 and 3
exports.fullName = function (req,res) {
  var name = req.body.name;
  User.create({ name: name, email: " ", cell: " ",}, function (err, awesome_instance) {
      if (err) {  res.send({success:false, message:err}); return this.handleError(err);}
      else res.send({success:true});//TODO Return ID
    });
}

exports.mobileNumber = function (req,res) {//ToDo get ID from step 1
  var cell = req.body.cell;
  User.update({_id:id}, {cell: cell}, function(err, numberAffected, rawResponse) {
      if (err) return res.send({success: false,error: err });
      return res.send({success: true});
    });
}


handleError = (err) => {
  console.log(err);
}
