
function validation()
{
var f=document.signup;

if(!f.cname.value)
{
	alert("Please enter the Name");
	f.cname.focus();
	return false;
}

if(!f.clastn.value)
{
	alert("Please enter the last name");
	f.clastn.focus();
	return false;
}

if(!f.cphone.value)
{
	alert("Please enter your Phone number");
	f.cphone.focus();
	return false;
}

if(!f.cemail.value)
{
	alert("Please enter your email id");
	f.cemail.focus();
	return false;
}



if(!f.ctextarea.value)
{
  alert("Please type the message or feedback");
  f.ctextarea.focus();
  return false;
}

function greeting()
{
alert("YOUR REGISTRATION FORM IS SUBMIT & THANKS FOR VISITING FORM OUR WEBSITE");
}
}