//Orozco Valdez Florencio Miguel 3E

let n = [];
let x = 10; 
let inversiones = 0;

for(z = 0; z < x; z++) {
    n.push(Math.round(Math.random()*Math.pow(10,6)))
}
console.log("Como viene por defecto :") 
for(x = 0; x < n.length; x++)
{
   console.log( "Ubicación [",x,"] =",n[x] )
   
   inversiones++;
}
function funcionOrdenar ()
{
 for(i = 0; i < n.length; i++)
   for(j = 0; j< n.length ; j++)
   {
      if(n[j]>n[j+1])
      {
          let a = n[j]        
          n[j] = n[j + 1];    
          n[j + 1] = a        
      
          inversiones++;
        }
    }
 console.log("\nOrdenado : ")
 for(i = 0; i < n.length; i++)
{
   console.log( "Ubicación [",i,"] =",n[i] )
}
}
console.time()
console.timeEnd();
funcionOrdenar();
console.log("inversiones necesarias:", inversiones)

//El resultado final de el promedio fue de 32 inversiones.
//tiempo promedio 0.624ms
//¿Se puede mejorar el tiempo?
//Se pueden mejorar realizando diferentes métodos al que yo realicé y también depende de la potencia de la computadora, 
//de como se haga el proceso de las funciones y for.