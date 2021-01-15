//Orozco Valdez Florencio Miguel 3°E
function Hanoi(Discos, Actual, Final){

    if(Discos>0)

    {
        Hanoi(Discos-1, Actual, 6-Actual-Final); //Auxiliar Actual

        console.log(" Mueve los Discos "+ Discos + " de la torre " + Actual + " a la torre "+ Final);

        Hanoi(Discos-1, 6-Actual-Final, Final); //Auxiliar Final

    }
}
Hanoi(4,1,3);