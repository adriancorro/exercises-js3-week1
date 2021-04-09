// Turn this function into an arrow function
/* function arrow() {
  return "es6 is awesome!";
} */

// solucion
const arrow = () =>  "es6 is awesome!";  
// prueba
console.log( arrow())


//Use the es6 syntax for default parameter
/* function defaultParameter(name) {
  var name = name || "sam";
  return name;
} */

// solucion 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
function defaultParameter ( name = "sam"){
  return name;
}
console.log( defaultParameter())
console.log( defaultParameter("adrian"))

// Use the spread operator to combine arr1 and arr2
/* function combineArrays(arr1, arr2) {
  return arr1.concat(arr2);
} */

function combineArrays(arr1, arr2) {
   let result12 = [ ...arr1, ...arr2]
   return  result12
}
//solucion 
arr10 = [ 1,2,3,4,5]
arr20 = [ 100,200,300,400,500]

console.log(combineArrays(arr10,arr20 ) )



//use destructuring to return the object's cyf property
 function destructuring(obj) {
  return obj.cyf;
} 

//solucion:
/* function destructuring ({cyf}){
  return cyf
} */
console.log( destructuring({cyf: 'cyfcyf'}))

// use template literal to return a string with the sum of a and b
function templateString(a, b) {
  return "The sum is equal to " + (a + b).toString();
}

//solucion:
function templateString(a, b) {
  return `The sum is equal to  ${( a + b )} `
}
console.log( templateString("adrian","ray" ))
