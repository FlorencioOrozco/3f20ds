let l=2,l2=1,te=1;                      //  Declaramos las variables que usaremos.
for(let i=1;i<=4;i++){               //    Comenzamos con el ciclo for para conseguir las 10 series de Lucas.
    if(i==4){
        console.log(te);
    }
    te=l+l2;                            //  Sumamos las variables.
    l=l2;                             //   Sustituimos el valor de L1 por el L2 para guardar el valor pasado de la primera sucesion.
    l2=te;                             //    Sustituimos el valor L2 que era es primer valor por el T que es el valor de la siguiente sucesion.
}