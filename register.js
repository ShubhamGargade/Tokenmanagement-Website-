//---------------------------------------------------------------------------------------- TO KNOW TEACHER OR STUDENT------------------------------------------------------------------------------

function usertype(s){
  var usertype = s;
}



// -----------------------------------------------------------------------------------------STUDENT VALIDATION--------------------------------------------------------------------------------

function validation1(){
  // alert("submitted");
  var sname = document.getElementById("sName").value;
  var semail = document.getElementById('sEmail').value;
  var syear = document.getElementById('sYear').value;
  var sbranch = document.getElementById('sBranch').value;
  var spassword  = document.getElementById('sPassword').value;
  var srollno = document.getElementById('sRollNo').value;

  // console.log(syear);
  // console.log(sbranch);
  console.log(srollno);

  if(!sname){
    document.getElementById('sn').innerHTML="Username should not be empty";
    return false;
  }

  if(!semail){
    document.getElementById('se').innerHTML="Email should not be empty";
    return false;
  }

  if(semail.length < 10 ){
    document.getElementById('se').innerHTML="Email should not be atleast 10 character long";
    return false;
  }

  if(!syear){
    document.getElementById('sy').innerHTML="Select year";
    return false;
  }

  if(!sbranch){
    document.getElementById('sb').innerHTML="Select branch";
    return false;
  }

  if(!spassword){
    document.getElementById('spass').innerHTML="Password should not be empty";
    return false;
  }

  if(spassword.length < 8){
    document.getElementById('spass').innerHTML="Password should not be atleast 8 character long";
    return false;
  }

  if(!srollno){
    document.getElementById('srn').innerHTML="RollNo should not be empty";
    return false;
  }

  if(isNaN(srollno)){
    document.getElementById('srn').innerHTML="RollNo should not be in No.";
    return false;
  }

  alert("Successfully created an account");
}


// ------------------------------------------------------------- TEACHER VALIDATION------------------------------------------------------------------------------------------


function validation2(){
  var tname = document.getElementById("tName").value;
  var temail = document.getElementById('tEmail').value;
  var tbranch = document.getElementById('tBranch').value;
  var tpassword  = document.getElementById('tPassword').value;

  if(!tname){
    document.getElementById('tn').innerHTML="Username should not be empty";
    return false;
  }

  if(!temail){
    document.getElementById('te').innerHTML="Email should not be empty";
    return false;
  }

  if(temail.length < 10 ){
    document.getElementById('te').innerHTML="Email should not be atleast 10 character long";
    return false;
  }

  if(!tbranch){
    document.getElementById('tb').innerHTML="Select branch";
    return false;
  }

  if(!tpassword){
    document.getElementById('tpass').innerHTML="Password should not be empty";
    return false;
  }

  if(tpassword.length < 8){
    document.getElementById('tpass').innerHTML="Password should not be atleast 8 character long";
    return false;
  }

  alert("Successfully created an account");

}
