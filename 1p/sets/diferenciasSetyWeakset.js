//Orozco Valdez Florencio Miguel 3E
console.log("Diferencia entre Set y weakset en un solo ejemplo")
console.log("\nSet:");
let set=new Set();
set.add({});
var objeto1={nombre:'cosa1'};
var objeto2={nombre:'cosa2'};
set.add(objeto1);
set.add(objeto2);
objeto1=null;
objeto2=null;
console.log(set);
console.log("En set se conservan los valores que se ponen de objetos");
console.log("..................................INICIA WEAKSET............................................\n")
let weakset=new WeakSet();
console.log("En el Weakset la referencia a los objetos es débil, por lo que los objetos desaparecen\n");
console.log("Weakset:");
weakset.add({});
var objeto1={nombre:'cosa1'};
var objeto2={nombre:'cosa2'};
weakset.add(objeto1);
weakset.add(objeto2);
objeto1=null;
objeto2=null;
console.log(weakset);

