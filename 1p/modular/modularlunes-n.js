let dia=new Date();
let mes=new Date();
const n=28;
dia=dia.getDate();
mes=mes.getMonth()+1;
console.log("El dia de hoy es: "+dia);
dia=dia+n;
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
    console.log("Dia antes de 11 dias es "+dia);
}
