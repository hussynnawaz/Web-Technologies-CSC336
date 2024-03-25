 function start()
{	var a=[1,2,3,4,5];//initialize
	outputArray("OriginalArray",a,document.getElementById("originalArray"));//passing by reference
	modifyArray(a);//passing by reference
	outputArray("modifiedArray",a,document.getElementById("modifiedArray"));
 // passing by value---pass a copy of value
	document.getElementById("originalElement").innerHTML="a[3] before modify element:"+a[3];
	modifyElement(a[3]);//passing copy of value of a[3]---8 to function modifyElement()
	document.getElementById("modifiedElement").innerHTML="a[3] after modify element:"+a[3];
}

function outputArray(heading,theArray,output)
{	output.innerHTML= heading + theArray.join(",");	}

function modifyArray(theArray)//using in place of a
{	for (var j in theArray)
	{	theArray[j]*=2;}//theArray[j]=theArray[j]*2;---2,4,6,8,10
}
function modifyElement(e)//e=8
{	e*=2;//e=16
	document.getElementById("inModifyElement").innerHTML="value in modifyElement():"+e;
}
window.addEventListener("load",start,false);


