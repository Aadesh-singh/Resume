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




// fucntion through which skills section will shrink or grow..

var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



const percentLabel = document.querySelector("#perc");   //selecting the element where we want to show percentage.
//Event listener to handle scroll event for percentage
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;                                   //it gives the no. of pixel a value is scrolled and this value can or cannot be a whole number.
  let docHeight = document.body.offsetHeight;                       // it gives the offset height of the body
  let winHeight = window.innerHeight;                               // gives innerheight if the body.    
  let scrollPercent = scrollTop / (docHeight - winHeight);          //this determines the scroll percentage using given formula    
  let scrollPercentRounded = Math.round(scrollPercent * 100);       //since the value can or cannot be rounded hence we round it.
  percentLabel.innerHTML = `Scrolled ${scrollPercentRounded}%`;    //we render the value to screen.
    
});

window.addEventListener("scroll", checkScroll);


// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);

//back to top button animation portion starts here


var backTotop = document.getElementById('scrtop');
backTotop.addEventListener('click', function(event){
    event.preventDefault();
    
    var homeCoord = document.getElementById('home').getBoundingClientRect().top;
    let cur = backTotop.getBoundingClientRect().top;
    let top_id = setInterval(function(){
        if( cur <= homeCoord){
            
            clearInterval(top_id);
        }
        cur -= 30;
        window.scrollBy(0,-30);
    },15);
});

const sendButton = document.querySelector('.sub-btn');
console.log(sendButton);

function mail(e) {
    // e.preventDefault();
}