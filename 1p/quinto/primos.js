let s=0;

for(let i=2;;i++){              
    if(primo(i)){ 

        if(s>=5){
            console.log("Los numeros primos es "+i);
        }

    }   
    
    if(s>=5){         
        break;
    }
}

function primo(num){

    for(let i=2;i<num;i++){     
        if(num%i===0){          
            return false;      
        }
    }

    s++;

    return num !==1;            
}

