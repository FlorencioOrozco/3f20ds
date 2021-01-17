//Orozco Valdez Florencio Miguel 3°E
class Pendiente{
    constructor() {
        this.pendiente=[]
    }
    Poner(si){
        this.pendiente.push(si)
        return this.pendiente
    }
    Final(){
        console.log(this.pendiente[this.Tamaño()-1])
    }
    Eliminar(){
        return this.pendiente.pop()
    }
    Tamaño(){
        return  this.pendiente.length;
    }
    Enseñar(){
        console.log(this.pendiente)
    }
}

let pendiente=new Pendiente()

pendiente.Poner(" Florencio ")
pendiente.Poner(" Miguel ")
pendiente.Poner(" Orozco ")
pendiente.Poner(" Valdez ")
pendiente.Poner(" Arismendy ")
pendiente.Enseñar()
pendiente.Final()
pendiente.Eliminar()
pendiente.Enseñar()
pendiente.Tamaño()