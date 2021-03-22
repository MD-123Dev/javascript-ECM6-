
//**function return  */
function pow(x , y){

    let  tot = 1,
        result ="";

    let i = 0
    for(i;i<y;i++){
        tot *= x;
    }
   return result = "pow "+x +"^"+y+ " = " +tot;
}

//**function passer array  */
function totatPrix(array){
    
     let  total = 0 ;

    for( x in array ){

    total += array[x];
    }

    return total;
}

//**function void  */
function personne(){
    let name = "ali",
        age = 120;

    console.log("persones info : "+ name+' ' + age);
}

console.log(pow(2,15));


var prix  = [12.5,40,45.21,63,78,110,13655];
console.log(totatPrix(prix));


personne();