//**npm i node-fetch --save */
//**run code with : node FetchApi\Fetchapi.js */

const fetch = require("node-fetch");

async function fetchApi(){
    try{
        
        let response = await fetch("https://api.github.com/users/octocat/repos?type=owner"); //**with api githup  */
        let json = await response.json();
        console.log(json);
    }
    catch(error){
       console.log("eroor :"+error)
    }
  

}

fetchApi();