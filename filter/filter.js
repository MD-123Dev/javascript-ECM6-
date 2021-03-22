
function filterWithPrix(){

    let books =[
        {Author: 'hell', title:"tilt1", prix: 120,date:"12/03/2030"},
        {Author: 'hell1', title:"titl2", prix: 250,date:"12/03/2230"},
        {Author: 'hell2', title:"titl3", prix: 350,date:"12/06/2230"},
        {Author: 'hell3', title:"titl4", prix: 68,date:"18/03/2830"},
    ];

   
    let prixBooks = books.filter((book) => book.prix > 100);
    console.log(prixBooks);

}

function filterWithTitle(){

    let books =[
        {Author: 'hell', title:"Math Learn ", prix: 120,date:"12/03/2030"},
        {Author: 'hell1', title:"Pyhsic learn", prix: 250,date:"12/03/2230"},
        {Author: 'hell2', title:"ktitle", prix: 350,date:"12/06/2230"},
        {Author: 'hell3', title:"mtitle", prix: 68,date:"18/03/2830"},
    ];

   
    let prixBooks = books.filter((book) => book.title.startsWith('P'));
    console.log(prixBooks);

}

function filterWithDate(){
    
    let books =[
        {Author: 'hell', title:"Math Learn ", prix: 120,date:"12/03/2030"},
        {Author: 'hell1', title:"Pyhsic learn", prix: 250,date:"12/03/2030"},
        {Author: 'hell2', title:"ktitle", prix: 350,date:"12/06/2230"},
        {Author: 'hell3', title:"mtitle", prix: 68,date:"18/03/2830"},
    ];

   
    let prixBooks = books.filter((book) => book.date === "12/03/2030");
    console.log(prixBooks);

}

//filterWithPrix();

//filterWithTitle();

filterWithDate();