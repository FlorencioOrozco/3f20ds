//Orozco Valdez Florencio Miguel 3E
let s = [3,1,4,2,3]

function mezclar (s)
{
    let resultado = [];
 
    const combinacion = (ajax, x= []) => {
       
        if (ajax.length === 0) 
        {
            resultado.push(x)
        }
        
        else 
         {
           
            for (let z = 0; z < ajax.length; z++) 
            {
                let jax = ajax.slice();
                let oro = jax.splice(z, 1);
                combinacion(jax, x.concat(oro))
            }
        }
    }
 
    combinacion(s)
    return resultado;
}

console.log("Complejidad Exponencial")

console.time()

mezclar(s)

console.timeEnd()

console.log(mezclar(s))
