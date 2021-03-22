

function isValidJSON(text) {

  try {

    //JSON.parse(text);

    console.log( JSON.parse(text));

  } catch(err) {

    console.log("eroor message :"+err);

  }
}

isValidJSON("hhhj lkdkmlkf mmk");

let json = '{"name":"John", "age": 30}';

isValidJSON(json);
