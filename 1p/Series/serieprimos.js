//Orozco Valdez Florencio Miguel 3E
let c=0;

for(let e=2;;e++){              
    
    if(primo(e)){           
        console.log("numeros primos de la sucesion ["+c+"] es "+e);
    }   
    
    if(c>=10){          
        break;
    }

}

function primo(numero){            
    
    for(let e=2;e<numero;e++){     
        
        if(numero%e===0){         
            
            return false;       
        }
    
    }
    
    c++;
    
    return numero !==1;            
}

