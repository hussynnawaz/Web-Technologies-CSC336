 // Listing-11-17-RandomPicture.js
// Random image selection using arrays
var iconImg;
var pictures = [ "CPE", "EPT", "GPP", "LFO", "POT", "PT", "SEO" ];
var descriptions = [ "Common Programming Error",
"Error-Prevention Tip", "Good Programming Practice",
"Look-and-Feel Observation",  "Portability Tip","Performance Tip",
"Software Engineering Observation" ];

// pick a random image and corresponding description, then modify
// the img element in the document's body
 function pickImage()
 {
    var index = Math.floor( Math.random() * 7 );//0 to 6
     iconImg.setAttribute( "src", pictures[ index ] + ".png" );//pictures[4]+".png"
     iconImg.setAttribute( "alt", descriptions[ index ] );
 } // end function pickImage

 // registers iconImg's click event handler
function start()
 {
    iconImg = document.getElementById( "iconImg" );
    iconImg.addEventListener( "click", pickImage, false );
 } // end function start

 window.addEventListener( "load", start, false );