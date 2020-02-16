    function createFetch() {
      'use strict';

        fetch("data/1290.json")
        //fetch('https://api.scb.se/UF0109/v2/skolenhetsregister/sv/kommun/1290')
           .then((response) => {
          return response.json();
         })
         .then((myJson) => {
           console.log(myJson);
           let fetchSchool = myJson.Skolenheter


               //Values for HTML-header
               var col = [];
               for (var i = 0; i < fetchSchool.length; i++) {
                   for (var key in fetchSchool[i]) {
                       if (col.indexOf(key) === -1) {
                           col.push(key);
                       }
                   }
               }

               //Creates a dynamic table
               var table = document.createElement("table");

               //Creates HTML-table header row
               var tr = table.insertRow(-1);                   // Table row

               for (var i = 0; i < col.length; i++) {
                   var th = document.createElement("th");      // Table header
                   th.innerHTML = col[i];
                   tr.appendChild(th);
               }

               //Adds json to the rows
               for (var i = 0; i < fetchSchool.length; i++) {

                   tr = table.insertRow(-1);

                   for (var j = 0; j < col.length; j++) {
                       var tabCell = tr.insertCell(-1);
                       tabCell.innerHTML = fetchSchool[i][col[j]];
                   }
               }

               // Adds created table with json-data to a container
               var divContainer = document.getElementById("showData");
               divContainer.innerHTML = "";
               divContainer.appendChild(table);
           });
       }
    /*   function tableCreate(){
           var body = document.body,
               tbl  = document.createElement('table');
           tbl.style.width  = '100px';
           tbl.style.border = '1px solid black';

           for(var i = 0; i < 3; i++){
               var tr = tbl.insertRow();
               for(var j = 0; j < 2; j++){
                   if(i == 2 && j == 1){
                       break;
                   } else {
                       var td = tr.insertCell();
                       td.appendChild(document.createTextNode('Cell'));
                       td.style.border = '1px solid black';
                       if(i == 1 && j == 1){
                           td.setAttribute('rowSpan', '2');
                       }
                   }
               }
           }
           body.appendChild(tbl);
       }
       tableCreate();
 */
