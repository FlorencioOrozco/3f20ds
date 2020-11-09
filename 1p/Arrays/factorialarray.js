//Orozco Valdez Florencio Miguel 3°E
let array=new Array(10); //definimos el array de 10 

for(let e=1;e<=10;e++){
    
    array[e]=factorial(e);                                                                           

}
    
function factorial(num){                                                                           
    
    var resultado=1;
    
    for(let e=1;e<=num;e++){                                                                     
        resultado=resultado*e;                                                                          
    }
    
    return resultado;                                                                             
}
for(let e=1;e<=10;e++){
        
    console.log("En la posicion de ["+e+"]se encuentra el factorial de "+e+"!="+array[e]);   

}