//Orozco Valdez Florencio Miguel
class Conversion{
    constructor() {
        this.creacion=[];
    }
    Poner(elemento){
        this.creacion.push(elemento)
        return this.creacion;
    }
    Quitar(){
        return this.creacion.shift();
    }
    Tamaño(){
        return this.creacion.length;
    }
    Lugar(){
        return this.creacion[0];
    }
    Enseñar(){
        return this.creacion;
    }
    pop(){
        return this.pop();
    }
}
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}

function fact(n) {
    var s = new Conversion();
    while (n > 1) {
        s.Poner(n--);
    }
    var producto = 1;
    while (s.Tamaño() > 0) {
        producto *= s.pop();
    }
    return producto;
}
console.log(factorial(5)); 
console.log(fact(5)); 
//Pantalla 120