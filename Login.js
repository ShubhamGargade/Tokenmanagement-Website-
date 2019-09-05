function validation() {
  var user = document.getElementById('username').value;
  // console.log(username);
  if(user == "")
  {
    document.getElementById('user').innerHTML="*Username should not be empty";
    return false;
  }

  var userpass = document.getElementById('password').value;
  // console.log(username);
  if(userpass == "")
  {
    document.getElementById('pass').innerHTML="*Password should not be empty";
    return false;
  }
  // console.log(userpass.length);
  if(userpass.length < 8)
  {
    document.getElementById('pass').innerHTML="*Password should be atleast 8 character long";
    return false;
  }

  var usertype = document.getElementById('hide').value;
  // console.log(usertype);
  if(usertype == "")
  {
    document.getElementById('whologin').innerHTML="*Select Student or Teacher";
    return false;
  }
}

function usertype(user){
  document.getElementById("hide").value = user;
}
