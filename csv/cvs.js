//** use npm = $ npm install csv-parser */
//** */


const csv = require('csv-parser')
const fs = require('fs')
var results = [];

fs.createReadStream('csv/Produit.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {

     console.log(results);
   
  });

