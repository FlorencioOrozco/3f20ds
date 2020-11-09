let Fi=0,F=1,resultado=1;

for(let I=1;I<4;I++){ 

    resultado=Fi+F;                   
    Fi=F;                       
    F=resultado;                    
    if(I==3){

        console.log(resultado);

    }
}
