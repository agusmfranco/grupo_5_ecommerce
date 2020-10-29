const fs = require('fs');
const path = require('path');

exports.leerJSON = (DB)=> {
    let varjson = fs.readFileSync(path.resolve(__dirname + '/../../data/' + DB);
    return JSON.parse(varjson);
}; //leer JSON

exports.escribirJSON = function(DB, dato){
    let varjson = leerJSON(DB);

    let nuevoArray = [...DB, dato]; //nuevo array con nuevo dato

    varjson = JSON.stringify(nuevoArray, null, ' '); //transaformo a json

    fs.writeFileSync(path.resolve(__dirname + '/../../data/'+ DB), dato);
}; //escribir JASON

exports.buscarJSON = function
