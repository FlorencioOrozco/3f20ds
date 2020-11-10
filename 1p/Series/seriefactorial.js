//Orozco Valdez Florencio Miguel 3E

for(let e=1;e<=10;e++){

    console.log(e+"!="+factorial(e));        //cuantas posiciones va a tener se va a repetir mas !. 10

}

function factorial(numero){              
    var resultado = 1;
    
    for(let e=1;e<=numero;e++){         //funcion factorial para realizar el resultado
        
        resultado=resultado*e;              
    
    }
    
    return resultado;                  
}