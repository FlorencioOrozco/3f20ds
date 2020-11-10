//Orozco Valdez Florencio Miguel 3E

let hora=new Date();
const mod=-2500;
hora=hora.getHours();
console.log("La hora es: "+hora);
hora=hora-mod%24;
console.log("Hora antes de -2500 horas es: "+hora);