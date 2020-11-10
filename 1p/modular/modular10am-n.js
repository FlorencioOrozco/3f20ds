//Orozco Valdez Florencio Miguel 3E
let hora=new Date();
const n=20;
hora=hora.getHours();
console.log("La hora es: "+hora);
hora=hora+n%24;
console.log("Hora despues de "+n+" horas es: "+hora);