 var a = new Array(15);
var num;
for(var i=0;i<a.length;++i)
{	document.writeln("<h1>Javascript Arrays</h1>");
num=window.prompt("enter the number to put at index-"+i+" in array: ");
    num=parseInt(num);
    a[i]=num;	}
function buttonPressed()
{	var inputVal=document.getElementById("inputVal");
	var result=document.getElementById("result");
	var searchkey=parseInt(inputVal.value);
	var element = a.indexOf(searchkey);
	if(element!=-1)
	{	result.innerHTML="found value in element"+element;	}
	else
	{	result.innerHTML="value not found";	}
}
function start()
{	var searchButton= document.getElementById("searchButton");
	searchButton.addEventListener("click",buttonPressed,false);
}
window.addEventListener("load",start,false);

