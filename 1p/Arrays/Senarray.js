//Orozco Valdez Florencio Miguel 3E
let sen=0;                                                                             
let array=new Array(10);

for(let e=1;e<=10;e++){
    
    sen=e;                                                                           
    array[e]=Math.sin(sen);                                                        

}

for(let e=1;e<=10;e++){
    console.log("el array se encuentra en la posicion numero ["+e+"] seno de "+e+"="+array[e]);   
}