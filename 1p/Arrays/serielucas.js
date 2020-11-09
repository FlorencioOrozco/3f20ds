//Orozco Valdez Florencio Miguel 3°E
let L=2,l=1,t=1; 

let array=new Array(10);                                                         

array[1]=L;

for(let i=2;i<=10;i++){                                                        
    array[i]=t;                                                               
    t=L+l;                                                                 
    L=l;                                                                  
    l=t;                                                                 
}
for(let i=1;i<=10;i++){
    console.log("el array se encuentra en la posicion ["+i+"] es "+array[i]);   
}