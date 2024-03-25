 function valCheck()
	{
		var mobNum=document.getElementById("mobileNumber").value;
		if(mobNum=="")
		{document.getElementById("message").innerHTML="**Please fill the mobile number";
		 return false;}
		
		if(isNaN(mobNum))
		{document.getElementById("message").innerHTML="** only number is required to input";
		 return false;}
			
		if(mobNum.length<11)
		{document.getElementById("message").innerHTML="** mobile number must be 11 digits long";
		 return false;}

		if(mobNum.length>11)
		{document.getElementById("message").innerHTML="** mobile number must be 11 digits long";
		 return false;}	
		if((mobNum.charAt(0)!=0)&&(mobNum.charAt(0)!=9))
		{document.getElementById("message").innerHTML="** mobile number must be either start with 0 or 9";
		 return false;} 
}
