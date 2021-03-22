
//** 13 Rue lots aggg => resul : 13_Rue_lots_aggg */
var adress = "13 Rue lots aggg";

 
 var v = adress.replace(/ /g,'_');

console.log(v);


//****************************solve  2x+3 = 0 => result x ?? */

var equa = "2x+3=0";

var arry1 = equa.split('=');

var val1="",
    valfirst="",
    valone="",
    valtwo="";

for(let i =0;i<arry1.length;i++){
 val1 = arry1[0];
}

var arry2 = val1.split('+');
for(let i =0;i<arry2.length;i++){
 valfirst = arry2[0];
 valtwo = arry2[1];
}

var arry3 = valfirst.split('x');
for(let i =0;i<arry3.length;i++){
 valone = arry3[0];
 
}

let clc = -valtwo / valone;
let result = " x = "+clc;

console.log(result);


//********************************search word in text or string or cracter */


const stringword = "Do you like code ?  ";

var valurSearch = "you"; 
//var valurSearch = "o"; 


if(stringword.indexOf(valurSearch) !=-1){
    console.log(" exist ");
}
else{
        console.log(" not exist ");
}

