 function start()
{	var array1=[[1,2,3],[4,5,6]];
	var array2=[[1,2],[3],[4,5,6]];

	outputArray("values in array1 by row",array1,document.getElementById("output1"));
	outputArray("values in array2 by row",array2,document.getElementById("output2"));
}

function outputArray(heading,theArray,output)
{	var results="";
	for(var row in theArray)
	{
		results+="<ul style='list-style-type:none'>";
		for(var column in theArray[row])
		{
			results+="<li style='margin-right:15px'>"+theArray[row][column]+"</li> ";
		}//end of inner for loop for columns
	results+="</ul>";
	}//end of outer for loop for rows

output.innerHTML=results;
}
window.addEventListener("load",start,false);


