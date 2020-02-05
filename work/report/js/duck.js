/**
 * A function to wrap it all in.
 */
(function () {

var element = docoment.getElementById("duck")
element.innerHTML = element.innerHTML + "<p>MOPED</p>";
// ?? element.innerHTML = ""<p>
//fetch json data obj, create HTML table
element.addEventListner("click", function() {
  console.log("Duck clicked");

});element.addEventListner("mouseover", function() {
  element.style.left = element.offsetleft + 20 + "px";


  console.log(element.style.left);
  console.log(element.offsetleft)
  console.log("mouse over ");
});

  // ?? console.log(element);
    console.log("Duck ready.");
}());

//DIV CLASS PART 1-2-3 FOR COLOR THE FLAG
// kolla exempel
