//Orozco Valdez Florencio Miguel 3E

console.log("teclee la serie de numeros: ");

let N=process.openStdin();

N.addListener("data",function(N){
    
    for(let e=1;e<=N;e++){
        console.log(e+"!="+factorial(e));        
    }
})
    
function factorial(numero){               
        
    var resultado=1;
        
    for(let e=1;e<=numero;e++){        
            resultado=resultado*e;              
        }
        
        return resultado;                  
    }
