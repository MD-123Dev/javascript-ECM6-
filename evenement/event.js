


function select(){
         //**if click in dropdown select affichier  */
         var f = document.getElementById("selectinput");
         var d = document.getElementById("colordd");

         d.innerHTML = f.value;
}

function getdata(){
         var f = document.getElementById("numberx");
         var d = document.getElementById("colordd");

         d.innerHTML = f.value;
}

function focusout(){

     var f = document.getElementById("numbery").value;
     var errorDs = document.getElementById("errordispl");
    var colordde2 = document.getElementById("colordd");

     
     if(f.length > 0){
         errorDs.innerHTML = "valide"
     }
     else{
          errorDs.innerHTML = "error !!!";
          document.getElementById("errorDs").style.color = "red";
        
     }

      

}
