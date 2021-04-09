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
 

  function f ( ){
    let  x = 1
  
  
      if (true){
       let  x = 34
          console.log(x )     
    }
    console.log(x);  
  }
  f()


  
  let fg = 0
// se ejecutará inmediatamente y hará referencia a lo que sea d. Eso se ejecuta inmediatamente en console.log
//Tiene alcance de bloque. Tenemos llaves en el forloop
// Sin embargo, después de un segundo, todo este ciclo ya ha pasado por cada iteración que necesita y la variable d aquí se sobrescribe cada vez.

 // tomar en toma en cuenta que el for no va a  let fg = 0 si no al resultado de let d = fg ++ 
 // es decir  let fg = 0 lo obvia 
  for(let i5 = 0; i5 < 10; i5++) {
    let d = fg ++   
    if (d === 9 ){
      console.log(' eto es  9---------------- ' );       
    }
    setTimeout(function() {
       // con var se sobrescribe y tomara el ultimo valor de d 
       //con let hace referencia de que d es  let d = fg ++  y no 9 porque no se sobreescribe gracias al scope
      console.log('---------------- ' +  kilo);  
    
    },1000);
    let kilo = d
    console.log(' ultimo  ' +  d);       

  } 

