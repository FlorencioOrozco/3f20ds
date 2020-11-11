//Orozco Valdez Florencio Miguel 3E
const x=10;
const r=10;
let resultado;

resultado=FactorialR((x+r-1))/(FactorialR(r)*FactorialR((x-1)));

console.log("Repeticiones posibles con repeticiones en la formula (x+r-1)!/r!(x-1)! son: "+resultado);

function FactorialR (x) { 
	
	if (x == 0 || x==1){ 
		
		return 1; 
	}
	
	return x * FactorialR (x-1); 
}