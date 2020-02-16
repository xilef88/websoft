(function() {

  'use strict';

  //var myContent = document.getElementById('content');
  var flagTarget = document.getElementById('flag');
  var flagLink1 = document.getElementById('draw-sweden');
  var flagLink2 = document.getElementById('draw-denmark');
  var flagLink3 = document.getElementById('draw-finland');


  function drawFlagSweden() {
    var flagSweden = '<div class="flag sweden"><div class="part1"></div>' +
      '<div class="part2"></div></div>';

    console.log("Drawing flag");
    flagTarget.innerHTML = flagSweden;
  }

  function drawFlagFinland() {
    var flagFinland = '<div class="flag finland"><div class="part1"></div>' +
      '<div class="part2"></div></div>';

    console.log("Drawing flag");
    flagTarget.innerHTML = flagFinland;
  }

  function drawFlagDenmark() {
    var flagDenmark = '<div class="flag denmark"><div class="part1"></div>' +
      '<div class="part2"></div></div>';

    console.log("Drawing flag");
    flagTarget.innerHTML = flagDenmark;
  }


  flagLink1.addEventListener("click", function() {
    console.log("Event for clicking link sweden.");
    drawFlagSweden();
  });
  flagLink3.addEventListener("click", function() {
    console.log("Event for clicking link finland.");
    drawFlagFinland();
  });
  flagLink2.addEventListener("click", function() {
    console.log("Event for clicking link denmark.");
    drawFlagDenmark();
  });
  flagTarget.addEventListener("click", function() {
    flagTarget.classList.toggle("fade")
    console.log("hide/show")

  });
  flagTarget.addEventListener("click", function() {



    if (flagTarget.style.visibility === 'hidden') {
      flagTarget.style.visibility = 'visible';
    } else {
      flagTarget.style.visibility = 'hidden';
    }
  });



  console.log('Flags is ready!');
})();
