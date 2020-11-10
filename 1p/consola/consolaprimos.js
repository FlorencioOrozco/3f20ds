//Orozco Valdez Florencio Miguel 3E
let s=0;
console.log("teclea el numero que desees: ");
let N=process.openStdin();
N.addListener("data",function(N){
    for(let e=2;;e++){              //  Utilizamos un for para generar numeros de 2 hasta que n alcance las 10 iteraciones.
        if(primo(e)){           //  Utilizamos una condicion para verificar que el valor que le demos a la funcion es primo.
            console.log("numeros primos ["+s+"] es "+e);
        }   
        if(s>=N){          //  Rompe el ciclo for cuando conseguimos nuestras 10 iteraciones.
            break;
        }
    }
});

function primo(numero){            // Funcion para saber si el numero es primo.
    for(let e=2;e<num;e++){     
        if(numero%e===0){          //Comprueba si el numero es primo.
            return false;       //En caso de que no lo sea retorno un false.
        }
    }
    s++;
    return numero !==1;            // En caso de que si sea se retorno el valor inicial que usamos en la funcion.
}

