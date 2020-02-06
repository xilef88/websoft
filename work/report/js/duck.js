/**
 *
 var area = document.body,
     areaHeight = window.innerHeight,
     areaWidth = window.innerWidth;

     area.appendChild(duck);
 */
 "use strict";

(function () {
var element = document.getElementById("duck");
var hidden = false;


element.addEventListener("click", function() {
  element.style.left = element.offsetLeft + 70 + "px";
  console.log(element.style.left);
  console.log(element.offsetLeft);
  console.log("Duck clicked");
});
setInterval(function(){
    document.getElementById("duck").style.visibility= hidden ? "visible" : "hidden";
    hidden = !hidden;
},2500);
// Attach som event to part of your page Hides/shows duck

//element.addEventListener("mouseover", function() {
  //element.style.left = element.offsetleft + 20 + "px";

    console.log(element);
    console.log("Duck ready.");

}());

//DIV CLASS PART 1-2-3 FOR COLOR THE FLAG
// kolla exempel
//FETCH-->
//USE INNER HTML create HTML TABLE AS A STRING
//Fetch PART
