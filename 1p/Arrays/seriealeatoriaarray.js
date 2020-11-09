//Orozco Valdez Florencio Miguel 3°E 
let array=new Array(10);     

for(let e=1;e<=10;e++){  

    array[e]=Math.round(Math.random()*(1-10)+10);             

}

for(let e=1;e<=10;e++){
    
    console.log("esta en la posicion["+e+"] es "+array[e]);

}