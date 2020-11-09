//Orozco Valdez Florencio Miguel 3°E

let e=1; 

let array=new Array(10);            

for(let r=1;;r++){                 
    if(e>10){                     
        break;
    }              
    else if(r%2==1){            
        array[e]=r;            
        e++;
    }
}

for(let r=1;r<=10;r++){
    
    console.log("el array se encuentra en la posicion numero ["+r+"] es "+array[r]);   

}