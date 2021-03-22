
//***var let   */

var x = 10 , //number 
    y = 26 , 
    z = 70 ,
    nom = "Ali", // string 
    age = 43 ,
    prix = 12.25, // float 
    jeune = true ;  // boolean 

    let calc = age - (x + y + z );
 if ( calc >= 18 && calc <= 50  ){
     console.log("value betwene 18 and 50 ");
     console.log("value is :"+calc);
 }
 else {
     console.log(" value plus 50 or moins 18  ");
     jeune = false;
     console.log(" Jeune " + jeune);
 }
