var ps;
for(E=0;E<=5;E++){
    ps=1;
    if(E==5){
        for(C=0;C<=E;C++){
            console.log(ps+".");
            ps=ps*(E-C)/(C+1);
        }
    }
}
