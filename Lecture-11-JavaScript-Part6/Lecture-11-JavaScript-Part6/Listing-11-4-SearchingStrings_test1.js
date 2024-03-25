 //  SearchingStrings.js
 // Searching strings with indexOf and lastIndexOf.
 var letters="It is nice to be important but it is most important to be nice";

function buttonPressed()
 {
 var inputField = document.getElementById( "inputField" );

document.getElementById( "results" ).innerHTML =
 "<p>First occurrence is located at index " +
 letters.indexOf( inputField.value )+ "</p>" +
 "<p>Last occurrence is located at index " +
 letters.lastIndexOf( inputField.value )+ "</p>" +
 "<p>First occurrence from index 28 is located at index " +
 letters.indexOf( inputField.value, 28 )+ "</p>" +
 "<p>Last occurrence from index 28 is located at index " +
 letters.lastIndexOf( inputField.value, 28 )+ "</p>";
 } // end function buttonPressed

// register click event handler for searchButton
 function start()
 {
 var searchButton = document.getElementById( "searchButton" );
 searchButton.addEventListener( "click", buttonPressed, false );
 } // end function start

 window.addEventListener( "load", start, false );