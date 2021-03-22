
//**for with array  */
var prix  = [12.5,40,45.21,63,78,110,13655];

var  total = 0 ;
for( x in prix ){

  total += prix[x];
}
console.log("total is : "+total);


//*** for with object */

var personne = { 
  name :"ali ",
  prenom :"aliw",
  age:120
};

for(  pers in personne){
   var info = "information personne : "+ personne['name']+ personne['prenom']+personne['age'];
}
console.log(info);