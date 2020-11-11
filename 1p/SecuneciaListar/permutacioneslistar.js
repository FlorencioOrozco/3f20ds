//Orozco Valdez Florencio Miguel 3E
let s = [3,1,4,2,3];

function Permutaciones (s) 
{
    const permutaciones = [];
    const p = (ajax, perm = []) => {
        if (!ajax.length)
        {
            permutaciones.push(perm)
            return
        }
        for(let x in ajax)
        {
            let jax = ajax.slice();
            let oro = jax.splice(x,1)
            p(jax, perm.concat(oro))
        }
    } 
    p(s);
    return permutaciones;
}
console.log("Complejidad Cuadrática")
console.time()
Permutaciones(s)
console.timeEnd()
console.log(Permutaciones(s))