let F=0,f2=1,resultado=1;                  
let array=new Array(10);               
array[1]=F;                                          
for(let i=2;i<=10;i++){              
    array[i]=resultado;                
    resultado=F+f2;                  
    F=f2;                        
    F=resultado;                    
}
for(let c=1;c<=10;c++){
    console.log("el array se encuentra en la posicion ["+c+"] es "+array[c]);   
}
