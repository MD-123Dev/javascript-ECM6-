
function clc(){
    //**get value from element html  */
    var x = document.getElementById("numberx").value;
    var y = document.getElementById("numbery").value;
    var dis = document.getElementById("display");
    var elem = document.getElementById("divelemt");
    var createhtm;

    //**set value to element html  */
  
    dis.innerHTML = parseInt(x) + parseInt(y);

    ///**add class  */
    var elm = document.getElementById("display");
    elm.classList.add("colorcls");

    ///************************************ craete elemnt dynamiqe and add value */

    /*var arry = [
               {
                   id:1,
                   nom:"ali",
                   prenom:"alio"
                },
               {
                   id:2,
                   nom:"ali1",
                   prenom:"alio2"},
               {
                id:3,
                nom:"ali3",
                prenom:"alio3"},
               ]*/
    var arry = [
               {
                   id:1,
                   nom:"ali",
                   prenom:"alio"
                },
              
               ]

    
  for(k in arry){
     createhtm = `<table class="table table-bordered">
    <thead>
      <tr>
        <th>tab1</th>
        <th>tab2</th>
        <th>tab3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${arry[k].id}</td>
        <td>${arry[k].nom}</td>
        <td>${arry[k].prenom}</td>
      </tr>
     
    </tbody>
  </table>`

   elem.innerHTML=createhtm;
   
  }
   
  //*** */

  
  
}