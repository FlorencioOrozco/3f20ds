//Orozco Valdez Florencio Miguel 3°E 
class seleccionado {
    siguiente = null;
    valor = null;
    constructor(valor) {
        this.valor = valor;
    }
}
class Enlazada {
    primero = null;
    ultimo = null;
    agregar = (valor) => {
        const elemento = new seleccionado(valor);
        if (!this.primero) {
            this.primero = elemento;
            this.ultimo = elemento;
            return;
        }
        this.ultimo.next = elemento;
        this.ultimo = elemento;
        //primero 
    }
    mostrar = (valor) => {
        return this.primero
}
}
const lista = new Enlazada();
lista.agregar('a');
lista.agregar('b');
lista.agregar('s');
console.log(lista);