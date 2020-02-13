

"use strict";
(function() {
  var element = document.getElementById("duck");
  var hidden = false;
  var elem = document.getElementById("duck").onclick = myMove;





  setInterval(function() {
    document.getElementById("duck").style.visibility = hidden ? "visible" : "hidden";
    hidden = !hidden;
  }, 3500);
  // Attach som event to part of your page Hides/shows duck

  //element.addEventListener("mouseover", function() {
  //element.style.left = element.offsetleft + 20 + "px";

  console.log(element);
  console.log("Duck ready.");

}());

function myMove() {
  var elem = document.getElementById("duck");

  var pos = 0;
  var id = setInterval(frame, 3);

  function frame() {
    if (pos == 650) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

function myMove2() {

  var duck = document.getElementById('duck');

  if (duck.style.visibility === 'hidden') {
    duck.style.visibility = 'visible';
  } else {
    duck.style.visibility = 'hidden';

  }
}


//DIV CLASS PART 1-2-3 FOR COLOR THE FLAG
// kolla exempel
//FETCH-->
//USE INNER HTML create HTML TABLE AS A STRING
//Fetch PART
