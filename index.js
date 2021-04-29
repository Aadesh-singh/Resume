// Navbar hamburger 
function dropdownmenu(){
    var x = document.getElementById("dropdownclick");
    if(x.className==="nav"){
        x.className += " responsive";
        /* change class topnav to topnav.responsive*/
    }
    else
        x.className = "nav";
}

//in case we dont want to pass a function in html code with id then we can use this method

var navMenuAnchorTagId = document.querySelectorAll('.nav a');
console.log(navMenuAnchorTagId);

for(var i=0 ; i< navMenuAnchorTagId.length; i++){    //this line is only adding this event to every targeted anchor tag
    navMenuAnchorTagId[i].addEventListener('click', function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();  //this line says take the text content of the current anchor tag and trim it for extra spaces and transform to lowercase
        var targetSection = document.getElementById(targetSectionId);
        console.log(targetSection);

        var targetCoordinates = targetSection.getBoundingClientRect().top;  //this function is returnning positon of the target element.
        var current = 0;
        var intervalId = setInterval(function(){
            if(current >= targetCoordinates - 39) clearInterval(intervalId);

            current += 30;
            window.scrollBy(0,30);
        },15)
    });
}




/*
in case when we intent to pass function in html then we can use this code it will work exactly same as above..

internal links will be removed to prevent default behaviour.

html code will be 

<ul class="nav" id="dropdownclick">
                    <li><a href="./index.html">home</a></li>
                    <li><a href="#" onclick="scrolld('skills')" >skills</a></li>
                    <li><a href="#" onclick="scrolld('experience')" >Experience</a></li>
                    <li><a href="#" onclick="scrolld('education')" >education</a></li>
                    <li><a href="#" onclick="scrolld('portfolio')" >portfolio</a></li>
                    <li><a href="#" onclick="scrolld('contact')" >contact</a></li>
                    <li class="dropdownicon"><a href="javascript:void(0);" onclick="dropdownmenu()"> &#9776;</a></li>
                </ul>

*/


// function scrolld (id){
//     var ele = document.getElementById(id);
//     console.log(ele);
//     var coordinate = ele.getBoundingClientRect().top;
//     console.log(coordinate);
//     var current = 0;
//     var f_id = setInterval(function(){
//         if(current >= coordinate-39){
//             clearInterval(f_id);
//         }
//         current += 30;
//         window.scrollBy(0,30);
//     },15)
// }