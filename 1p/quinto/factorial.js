for(let J=1;J<=6;J++){
    if(J==4){
        console.log(J+"!="+factorial(J));       
    }        
    }
    
    function factorial(num){               
        var resultado=1;
        for(let J=1;J<=num;J++){         
            resultado=resultado*J;              
        }
        return resultado;                  
    }