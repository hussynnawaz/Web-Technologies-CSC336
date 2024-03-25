 var a = new Array(100);
for(var i=0;i<a.length;++i)
{	a[i]=2*i;	}//0,2,4,8,10....200

function buttonPressed()
{	var inputVal=document.getElementById("inputVal");
	var result=document.getElementById("result");
	var searchkey=parseInt(inputVal.value);
	var element = a.indexOf(searchkey);//returns the first index number at which it finds the value 
	if(element!=-1)
	{	result.innerHTML="found value in element: "+element;	}
	else
	{	result.innerHTML="value not found hence index return is: "+element;	}
}

function start()
{	var searchButton= document.getElementById("searchButton");
	searchButton.addEventListener("click",buttonPressed,false);
}

window.addEventListener("load",start,false);

