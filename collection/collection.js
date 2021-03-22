//**cmd for run code :>> node collection\collection.js */

//**Multidimensional array */



let arry = [[1,10,15,12,52],[34,2,96,74,63]];
let arry2 = [[41,2,23,41,23], [1,3,63,42,28]];
let tot = [[], []];
//console.log(arry[1][2]);

for(let i =0;i<arry.length;i++){
    for(let j=0;j<arry[i].length;j++){
      // console.log(arry[i][j]);
    }
}

for(let i =0;i<arry.length;i++){
    for(let j=0;j<arry[i].length;j++){
     tot[i][j] = arry[i][j] + arry2[i][j] ;   
       
    }
   
 
}
  //console.log(tot);
    

for(let i =0;i<arry.length;i++){
    for(let j=0;j<arry[i].length;j++){
     tot[i][j] = arry[i][j] *2 ;   
       
    }
   
 
}
  //console.log(tot);
    






