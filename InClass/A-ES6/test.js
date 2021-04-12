 /*  por cada iteraccion la variable t que es var esta entrando a la funcion 
    setTimeout (que no deberia) y esta modificando la variable dentro 
    del console log  */

/* for(let  i = 0; i < 10; i++) {
  
    var t = 556566 
    console.log('iterador variable t ' +  t++);
  
    setTimeout(function() {
      console.log('- ' +  t++);
      console.log('iterador variable i ' +  i);

    },1000);
  } */




/*   La otra diferencia entre var y let es que este último se inicializa a
     un valor sólo cuando un analizador lo evalúa
 */  /*  for(let i5 = 0; i5 < 10; i5++) {
    setTimeout(function() {
      console.log('The number is i5 ' + i5);
    },1000);
  }  */  
 

  /* function f ( ){
    let  x = 1
  
  
      if (true){
       let  x = 34
          console.log(x )     
    }
    console.log(x);  
  }
  f() */


  
  var fg = 0
// se ejecutará inmediatamente y hará referencia a lo que sea d. Eso se ejecuta inmediatamente en console.log
//Tiene alcance de bloque. Tenemos llaves 
// Sin embargo, después de un segundo, todo este ciclo ya ha pasado por cada iteración que necesita y la variable d aquí se sobrescribe cada vez.

 // tomar en toma en cuenta que el for no va a  let fg = 0 si no al resultado de let d = fg ++ 
 // es decir  let fg = 0 lo obvia 
  for(var i5 = 0; i5 < 10; i5++) {
    // El problema con eso es que para cuando el setTimeout() runs, d ya está en 10, y no tenemos ninguna forma de referenciarlo.
    //en resumen en esta del codigo gracias al for d = 9 
   var numdebug = p => { setTimeout(function() {
   //  console.log('----------------a ' +  p);  // IMPORTANTE si colocamos d parametro  declarado fuera de la funcion se repetiran los numeros "9"
     // Para solucionar lo anterior solo se debe declarar la variable d con LET y no con var
   },0000000000001);}
   // lo primro que hara se hara es buscar la declaracion de la variable d ya que sin el var d = fg ++ diera error
   numdebug(d)
   numdebug(d)
   if (d == 9  ){
     console.log( ` este es el ultimo numero. asignacion para d ----------------  ${d}`   );    
   }  
   console.log(' d =  ' +  d);       
   //numdebug(d)
   var d = fg ++ 
  } 
  
 

// before 
/* var chicken = {
  name: 'Maggie', 
  age: 2
}

var name = chicken.name;
var age = chicken.age;
 */

// in ES6
const chicken = {
  name: 'Maggie', 
  age: 2
}

const { name, age } = chicken;



///
const numbers = [1, 2];

const [firstNumber, secondNumber] = numbers;


class User {
        constructor (name, age){
          this.name = name
          this.age = age
        }
        increaseAge = () =>  this.age += 1

        conditionAge(){
         if ( this.age >= 50 ) {
          console.log( "es mayor de 50")
         } else{
          console.log( "es menor")
         }
        }
        get name(){
          return this._name
        }

        set name(newName){
          this._name = newName

        }
}

class Administrator extends User {
  constructor (name, age, role){
  super (name, age)
  this._role = role
  }
  get role(){
    return this._role
  }
  set role(newRole){
    this._role = newRole
  }
}

const adriancrr = new User ( "adrian",45 )
adriancrr.increaseAge()
adriancrr.increaseAge()
adriancrr.increaseAge()
adriancrr.increaseAge()
adriancrr.increaseAge()
console.log( adriancrr.age)
adriancrr.conditionAge()
adriancrr.name = "lolo"
console.log( adriancrr.name)
adriancrr.role = "admin"
console.log( adriancrr)
const ff = new Administrator ( "adrian",45 )
console.log( ff)


/* class Shape {
  constructor(data) {
      this.x = data.x;
      this.y = data.y;
  }

  getArea() {...}
}

function CircleDecorator(shape) {
  shape.radius = 3;
  shape.getArea = function() {...};
  return shape;
}

let shape = new Shape({x:1,y:2});
let circle = new CircleDecorator(shape); */

class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ' + this.name);
  }
}

let p = new Polygon(300, 400);
p.sayName();

class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
    this.sides = 4;
    //this.area = this.height * this.width;
  }
  get area() {return this.width * this.height;}
  sayName() {
    console.log('Hi I am a polygon and my name is ' + this.name + '.');
  }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);

arr123= [1,2,3,6,8,7,9,3]

//  let result = arr123.filter(p => p == 3   ).map( p => p = "tres")


let lk = [ ]
function fholl(p){
  
    p.push(100)
    return p
}

let ghg =100
fholl(lk)
fholl(lk)
fholl(lk)
console.log(fholl(lk).map( p =>p )  ) 
