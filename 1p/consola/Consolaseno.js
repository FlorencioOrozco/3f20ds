let total=0;                                                 
console.log("teclea la serie de numeros : ");
let N=process.openStdin();
N.addListener("data",function(N){
    for(let e=1;e<=N;e++){
        total=e;                                                 
        total=Math.sin(total);                                   
        console.log("El seno de "+e+" es "+total);
    }
});