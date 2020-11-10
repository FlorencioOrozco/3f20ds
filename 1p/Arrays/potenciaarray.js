//Orozco Valdez Florencio Miguel 3E

let Potencia=0,Ele=0;                                                               
let array=new Array(10);                                                       

for(let e=1;e<=10;e++){
    
    Ele=Math.round(Math.random()*(1-10)+10);

    Potencia=Math.round(Math.random()*(10-20)+20);                                
    
    array[e]=Math.pow(Potencia,Ele);                                           

}

for(let i=1;i<=10;i++){
    
    console.log("el array sen encuentra en la posicion numero ["+i+"] es "+array[i]);   

}