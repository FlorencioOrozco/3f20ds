let N=1;                                // Declaramos variable 
for(let s=0;;s++){                     // cree un ciclo for 
    if(s%2==1){                       //la condicion para los numeros impares
        if(N%2==1){                  
            console.log(s*-1);
        }
        else if (N%2==0){           // Condicion que imprimira cuando "N" sea par.
            console.log(s);
        }
    N++;                          // Incremento de "N".
    }
    if(N>10){
        break;                  // cortara el ciclo cuando llegue a 10 repeticiones.
    }
}