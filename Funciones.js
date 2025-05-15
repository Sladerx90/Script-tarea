let arreglos = ["rojo", "amarillo", "azul", "morado", "celeste"];
console.log(arreglos)

for (let i=0; i<arreglos.length ; i++){
    console.log(arreglos[i]);
}

let numeros = [3,6,4,7,9];
let suma = 0;
for(let i = 0; i < numeros.length; i++){
    suma = suma + numeros[i];
    suma +=numeros[i];
}
console.log(suma);

function saludo(nombre){
    alert("Bienvenido/a "+ nombre);
}

saludo("felipe");