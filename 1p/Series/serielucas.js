//Orozco Valdez Florencio Miguel 3E
let Lucas1=2
let Lucas2=1                         //definimos las variables
let total=1; 

console.log(Lucas1);                      

for(let e=1;e<=9;e++){               //for para realizar la serie lucas hasta el numero 8

    console.log(total);

    total=Lucas1+Lucas2;                            

    Lucas1=Lucas2;                             

    Lucas2=total;                             
}