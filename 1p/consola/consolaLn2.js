console.log("teclee la serie de numeros que desee: ");
let N=process.openStdin();
N.addListener("data",function(N){
    console.log("-------------------------------\n1");
    for(let e=2;e<=N;e++){
        if(e%2==1){
            console.log("-1/"+e);
        }
        if(e%2==0){
            console.log("+1/"+e);
        }
    }
});