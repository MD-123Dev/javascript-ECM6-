
//***run with cmd :   node collection\arrayCRUD.js  */

function create(){
    let books =[];

    let value = {Author: 'hell', title:"tit14hgh", prix: 120};
    let value2 = {Author: 'hell1', title:"tit1524hgh", agprixe: 120};

    //**add value */
    books.push(value);
    books.push(value2);

    console.log(books);

}

function delect(){
     let books =[];

    let value = {Author: 'hell', title:"tit14hgh", prix: 120};
    let value2 = {Author: 'hell1', title:"tit1524hgh", agprixe: 120};

    //**add value */
    books.push(value);
    books.push(value2);

    console.log(books);

    //**delect element */
    let index = books.indexOf(value);
    books.splice(index, 1);
    console.log(books);

}


delect();

function getTitlesBooks(){
    //***get  title books  */
    let books =[
        {Author: 'hell', title:"tilt1", prix: 120},
        {Author: 'hell1', title:"titl2", prix: 250},
        {Author: 'hell2', title:"titl3", prix: 68},
    ];

    let titleBooks = books.map((book) => book.title);
    console.log(titleBooks);

}

function getPrixBooks(){
    //***get  prix books * 2  and plus 100   */
    let books =[
        {Author: 'hell', title:"tilt1", prix: 120},
        {Author: 'hell1', title:"titl2", prix: 250},
        {Author: 'hell2', title:"titl3", prix: 68},
    ];

    let prixBooks = books.map((book) => book.prix * 2);
    let prixBooks2 = books.filter((book) => book.prix > 100);//**get which is >100 "filter" */
    console.log(prixBooks);
    console.log(prixBooks2);

}

//getPrixBooks();