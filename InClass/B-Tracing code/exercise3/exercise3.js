/*
para probar directamnete desde el node:
La API de recuperación no está implementada en Node.

Necesita usar un módulo externo para eso, como node-fetch .

Instálelo en su aplicación Node así

npm i node-fetch --save

npm uninstall node-fetch

const fetch = require("node-fetch");

*/


const getRepos = function(repoName) {
  return fetch('https://api.github.com/users/' + repoName + '/repos')  
    .then(data => data.json())
    .then(function(response) {
      return response.map(function(rep) {
        var myElement = document.querySelector("#main");
        var paragraph = document.createElement("p"); 
        paragraph.innerText = rep.name;
        myElement.appendChild(paragraph);
        return rep.name;
      });
    });
};



const migracodeRepos = getRepos('migracode-barcelona');
console.log("Loading...");


//Task1. Fix the code
//Task2. Create a <p> for each repository
