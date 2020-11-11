//Orozco Valdez Florencio Miguel 3E
let s = [3,1,4,2,3]

function P(archivos) 
{
    return archivos.reduce((x, z) => x.concat(x.map(y => [z].concat(y))), [[]]);
}

console.log("Exponencial")
console.time()
P(s)
console.timeEnd()
console.log(P(s))