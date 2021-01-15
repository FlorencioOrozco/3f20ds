//Orozco Valdez Florencio Miguel 3°E 
let Matriz = [
    [2,4,6],
    [8,10,12],
    [14,16,18],
    [20,22,24]];
let columna = [];
let x=0;

for (let i=0; i<Matriz.length; i++){
    console.log(Matriz[i]);
}

class SacaColumna {
    static columna() {
        for (let i = 0; i < Matriz.length; i++){
            console.log(Matriz[i][x]);
        }
        return columna
    }
}
    process.exit();