//Orozco Valdez Florencio Miguel 3°E 
let Matriz = [
    [2,4,6],
    [8,10,12],
    [14,16,18],
    [20,22,24]
];
let matriz= [];
for(let i=0; i<3; i++) {
    matriz[i]=[]
}

for (let i=0; i<Matriz.length; i++){
    console.log(Matriz[i]);
}

class Transponer{
    static traspon(){
        for (let i=0; i<4; i++) {
            for (let j = 0; j < 3; j++) {
                matriz[j][i] = Matriz[i][j];
            }
        }
        console.log("Transpuesta")
        for (let i=0; i<matriz.length; i++){
            console.log(matriz[i]);
        }
    }
}
Transponer.traspon()