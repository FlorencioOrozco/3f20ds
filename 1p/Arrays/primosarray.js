//Orozco Valdez Florencio Miguel 3E

let c=0;   // definimos las variables                                                                         

let array=new Array(10);     // definimos el array                                                      

for(let e=2;;e++){                                                                
    if(primo(e)){                                                                
        array[c]=e;                                                            
    }   
    if(c>10){                                                                 
        break;
    }
}

function primo(numero){            // funcion para saber si es primo el numero
    
    for(let e=2;e<numero;e++){     
        if(numero%e===0){          
            return false;    // en caso de que no lo sea.   
        }
    }
    c++;
    return numero !==1;            

}

for(let e=1;e<=10;e++){
    console.log("el array se encuentra en la posicion numero ["+e+"] es "+array[e]);  //mostrar en que posicion numerica se encuentra el array.
}
