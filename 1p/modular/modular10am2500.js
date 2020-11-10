//Orozco Valdez Florencio Miguel 3E

let hora=new Date();
const mod=2500;
hora=hora.getHours();
console.log("la hora es: "+hora);
hora=hora+mod%24;
console.log("hora después de 2500 horas es: "+hora);