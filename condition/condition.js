
//*** if - else and for and array  */

var word = ["google","Rediit","wwww","pc"];
for(let i=0;i<word.length;i++){

    if( word[i]=="googl"){
            console.log("valide");
        }
        else if(word[i]=="Rediit"){
                console.log("valide");
        }
        else if(word[i]=="web"){
                console.log("valide");
        }
        else if(word[i]=="pc"){
                console.log("valide");
        }
        else{
            console.log("not exist");
        }
}

 console.log("///////////////////////////");

 //*** switch cas  */
 var word2 = "book";

    switch(word2){
        
        case "google": 
         console.log("valide");
        break;

        case "Rediit":  
        console.log("valide");
        break;

        case "book":  
        console.log("valide");
         break;

         case "wwww": 
         console.log("valide");
         break;

        default :  console.log("not exist");


    }
 
 