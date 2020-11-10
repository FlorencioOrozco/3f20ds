//Orozco Valdez Florencio Miguel 3E
let dia=new Date();
let mes=new Date();

const con=11;
dia=dia.getDate();
mes=mes.getMonth()+1;
console.log("El dia es: "+dia);
dia=dia+con;
if(mes==0 || mes==1 || mes==3 || mes==5 ||mes==5 || mes==7||mes==8||mes==10){
    mes=31;
}
else if(mes==2 || mes==4 || mes==6 || mes==9 ||mes==11){
    mes=30;
}
if(dia>mes){
    dia=dia-mes; 
    console.log("Dia despues de 11 dias es: "+dia);
}
else if(dia<mes){ 
    console.log("Dia hace 11 dias es: "+dia);
}


