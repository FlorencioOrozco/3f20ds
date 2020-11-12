//Orozco Valdez Florencio Miguel 3E
let map=new Map();
var clave1={};
var clave2={};
console.log("El Map nos permite relacionar (mapear) unos valores con otros como si fuera un diccionario\n");
map.set(clave1,'Hola');
map.set(clave2,{nombre:'Ana'});
clave1=null;
clave2=null;
console.log(map);
let weakmap=new WeakMap();
console.log(".............................INICIA WEAKMAP....................................")
console.log("Un WeakMap hace solo referencia a las claves por lo cual llega a ser débil\n");
var clave1={};
var clave2={};
weakmap.set(clave1,'Hola');
weakmap.set(clave2,{nombre:'Gabriel'});
clave1=null;
clave2=null;
console.log(weakmap);


