
let persone = [
      {id:1,ville:"rabat",adress:"lot 12"},
      {id:3,ville:"casa",adress:"lot 16"},
      {id:4,ville:"marakeche",adress:"lot 36"},
      {id:2,ville:"k",adress:"lot 22"},
];

//**sort with id  */
persone.sort(function (a, b) {
  return a.id - b.id;
});
console.log(persone);


//**sort with ville  */

persone.sort(function(a, b) {
  var vaille1 = a.ville.toUpperCase();
  var vaille2 = b.ville.toUpperCase();
  if (vaille1 < vaille2) {
    return -1;
  }
  if (vaille1 < vaille2) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(persone);



//****sort array simple  */

let numbers = [120,12,1023,582,3369,190];

numbers.sort((a, b) => a - b);

console.log(numbers);