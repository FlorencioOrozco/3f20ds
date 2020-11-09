let l=2,l2=1,te=1;                      // Declaramos las variables.
for(let i=1;i<=4;i++){               
    if(i==4){
        console.log(te);
    }
    te=l+l2;                            
    l=l2;                             
    l2=te;                             
}