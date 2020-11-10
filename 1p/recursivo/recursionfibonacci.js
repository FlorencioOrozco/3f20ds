//Orozco Valdez Florencio Miguel 3E

let fib = function(num) {
    if (num == 1){
        return 0;
    }
    if (num == 2){
        return 1;
    }
    return fib(num-1) + fib(num-2);
   
};
console.log (fib(5))