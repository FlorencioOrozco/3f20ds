function PriorityQueue() {
    let items = [];
    function QueueElement (Element, priority){
        this.Element = Element;
        this.priority = priority;
    }
    this.enqueue = function(Element, priority){
        let queueElement = new QueueElement(Element, priority);
        let added = false;
        for (let i=0; i<items.length; i++){
            if (queueElement.priority < items[i].priority){
                items.splice(i,0,queueElement);
                added = true;
                break; // {4}
            }
        }
        if (!added){
            items.push(queueElement); //{5}
        }
    };
    this.dequeue= function (Element, priority) {
        var priority = this.items[0].priority;
        for (var i = 1; i < this.dataStore.length; ++i) {
            if (this.dataStore[i].code < priority) {
                priority = i;
            }
        }
        return this.dataStore.splice(priority,1);
    }
    this.quitar = function () {
        return this.items[1];
    }
    this.print = function(){
        for (let i=0; i<items.length; i++){
            console.log(`${items[i].Element} -
            ${items[i].priority}`);
        }
    }
}
let prioriti= new PriorityQueue();
prioriti.enqueue("2008",1)
prioriti.enqueue("Florencio", 2)
prioriti.enqueue(2,2)
prioriti.enqueue("19",1)
prioriti.print()
prioriti.dequeue()
prioriti.print()
class ColaPendiente{
    constructor() {
        this.esto=[];
    }
    agregar(Element){
        this.esto.push(Element)
        return this.esto;
    }
    quitar(){
        return this.esto.shift();
    }
    size(){
        return this.esto.length;
    }
    primero(){
        return this.esto[0];
    }
    mostrar(){
        return this.esto;
    }
}
let cosa = new ColaPendiente();
cosa.agregar("Orozco");
cosa.agregar("Lince");
cosa.agregar("Elfo");
console.log(cosa.mostrar());
console.log(cosa.primero());
console.log(cosa.mostrar());
cosa.quitar();
console.log(cosa.mostrar());
console.log(cosa.mostrar())
console.log(cosa.size())