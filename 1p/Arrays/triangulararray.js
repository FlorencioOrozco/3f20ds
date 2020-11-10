//Orozco Valdez Florencio Miguel 3E
//serie array triangular
let triangular=1,L=1;                //declaramos las variables                                                  
let array=new Array(10);             //declaramos el array a 10 

for(let e=1;e<=10;e++){              //for para comenzar la operacion triangular 
    
    L=e;
    triangular=((L)*(L+1))/2;                                                       
    array[e]=triangular;                                                           

}

for(let e=1;e<=10;e++){               // for para enseñar en que posicion se encuentra el array
    
    console.log("el array se encuentra en la posicion numero ["+e+"] es "+array[e]);   

}
