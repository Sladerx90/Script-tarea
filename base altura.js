let base = Number(prompt("Ingrese la base"));
let altura = Number(prompt("Ingrese la altura"));
let perimetro = 2*base + 2*altura;
let area = base*altura;

alert("El perimetro es " + perimetro);
alert("El área es " + area);

if(base == altura){
    console.log("La figura es un cuadrado");
}else{
    console.log("Es un rectángulo");
}