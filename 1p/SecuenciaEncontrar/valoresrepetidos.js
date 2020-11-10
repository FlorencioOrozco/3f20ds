//Orozco Valdez Florencio Miguel 3E
let s = [3,1,4,2,3];
console.log("Complejidad Computacional: Exponencial")
console.log("mi conjunto de numeros");
for(let i = 0; i<s.length; i++){
    console.log(s[i]);
}
console.log("numeros repetidos:");

for(let x = 0; x < s.length; x++){
    for(let z = x + 1; 1<s.length; z++){
        if(s[x] == s[z]){
            console.log(s[z]);
        }
    }
}