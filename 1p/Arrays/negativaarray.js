let e=1;                               
let array=new Array(10);               
for(let r=0;;r++){                    
    if(r%2==1){                      
        if(e%2==1){                
            array[e]=r*-1;
        }
        else if (e%2==0){           
            array[e]=r;
        }
    e++;                          
    }
    if(e>10){
        break;                 
    }
}
for(let r=1;r<=10;r++){
    console.log("el array se encuetra en la posicion numero ["+r+"] es "+array[r]);   
}