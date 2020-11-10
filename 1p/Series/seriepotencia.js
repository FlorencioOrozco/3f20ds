//Orozco Valdez Florencio Miguel 3E
let potencia=0;
let elevar=0;
let total=0;

for(let e=0;e<10;e++){
    
    elevar=Math.round(Math.random()*(1-10)+10);                                  
    
    potencia=Math.round(Math.random()*(10-20)+20);                                  
    
    total=Math.pow(potencia,elevar);                                                  
    
    console.log(""+potencia+" es elevado a la "+elevar+" = "+total);

}