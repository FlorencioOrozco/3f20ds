console.log("teclee el numero de series que desee: ");
let N=process.openStdin();
N.addListener("data",function(N){
    console.log("-------------------------------X");
    for(let e=2;e<=n;e++){
        if(e%2==1){
            console.log("-X^"+e+"/"+e);
        }
        if(e%2==0){
            console.log("+X^"+e+"/"+e);
        }
    }
});

