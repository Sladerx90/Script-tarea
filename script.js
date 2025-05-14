let nombre;
let apellido;
let edad;
let nota;


nombre=5;
apellido=5
edad=5


console.log(typeof(nombre));

alert("Hola, para continuar necesito que me digas tu nombre, apellido, edad y tu nota que te sacaste recientemente.")

nombre = prompt("Escriba un nombre");

apellido = prompt("Escriba su apellido");

edad = prompt("Escriba su Edad");

nota = parseFloat(prompt("Coloca tu nota reciente"));

console.log(typeof(apellido));

alert("Nombre del alumno " + nombre+"\n" +
" Apellido del alumno "  + apellido+"\n" +
" Edad del alumno " + edad+"\n" +
"Nota del alumno " + nota+"\n");