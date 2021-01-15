//Orozco Valdez Florencio Miguel 3°E 
function ColaPrioridad(){
    this.dato = Array.prototype.slice.call(arguments, 0);
    this.enqueue=enqueue;
    this.dequeue=dequeue;
    this.primero=primero;
    this.longitud= longitud;
    
    function enqueue (element){
        this.dato.push(element);
    }
    function dequeue(){
        let priority= this.dato[0].priority;
        let pItem=0;
        this.dato.forEach(function (item, ind){
            if(item.priority < priority){
                priority=item.priority;
                pItem=ind;
            }
        });
        return this.dato.splice(pItem, 1)[0]
    }
    function primero(){
        return this.dato[0];
    }
    function longitud(){
        return this.dato.length
    }
}
function paciente(nombre, priority){
    this.nombre=nombre;
    this.priority=priority;

}

let n = new ColaPrioridad()
n.enqueue(new paciente("Orozco", 1));
n.enqueue(new paciente("Valdez", 7));
n.enqueue(new paciente("jimenez", 2));
n.enqueue(new paciente("Adame", 3));
n.enqueue(new paciente("luis", 5));

console.log(n.longitud())
console.log(n.primero())
console.log(n.dequeue())
console.log(n.dequeue())
console.log(n.dequeue())
console.log(n.dequeue())