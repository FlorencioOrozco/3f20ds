//Orozco Valdez Florencio Miguel 3E
let total=0;
console.log("teclea cuanta serie de numeros tendra: ");
let N = process.openStdin();
N.addListener("data", function(L) {
    console.log("Numero que elevará: ");
    let z=process.openStdin();
    z.addListener("data",function(z2){
        for(let e=1;e<=L;e++){
            total=Math.pow(z2,e);                                            
            console.log("El numero "+z2+" se elevado a la "+e+" = "+total);
        }
    });
});
