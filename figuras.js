// Codigo del Cuadrado
console.group("Cuadrados");
//const ladocuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

//const areaCuadrado = ladocuadrado *ladocuadrado;
function areaCuadrado(lado) {
    return lado * lado;
}

//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Codigo del Triangulo
console.group("Triangulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5; 
//console.log(
//    "Los lados del triangulo miden: "
//    + ladoTriangulo1
//    + "cm, " 
//    + ladoTriangulo2 
//    + "cm, " 
//    + baseTriangulo 
//    + "cm"
//);
//console.log("La altura del triangolo es: " + alturaTriangulo + "cm");
//function perimetroTriangulo (x,y,z) {
//    perimetroTriangulo = x + y + z
//    return "El perimetro del triangolo es: " + perimetroTriangulo;
//}
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perimetro del triangolo es: " + perimetroTriangulo + "cm");

//const areatriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El area del triangolo es: " + areatriangulo + "cm^2");
function perimetroTriangulo (lado1, lado2, base) {
    const lado1 = parseFloat(lado1)
    const lado2 = parseFloat(lado2)
    const base = parseFloat(base)

    return lado1 + lado2 + base;
}

function areaTriangulo (base,altura) {
    return (base * altura) / 2;
}
console.groupEnd();

console.group("Circulos");

// Radio

//const radioCirculo = 4;
//console.log("El Radio del Circulo es: " + radioCirculo + "cm");

// Diametro

//const diametroCirculo = radioCirculo * 2;
function diametroCirculo (radio) {
    return radio * 2;
}
//console.log("El Diametro del Circulo es: " + diametroCirculo + "cm");

// PI

const PI = Math.PI;
console.log("PI es: " + PI + "cm");

// Circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
//const circunferencia = PI * diametroCirculo;
//function circunferencia (diametro) {
//    return PI * diametro;
//}
//console.log("La Circunferencia del circulo es: " + circunferencia + "cm");

// Area

//const areaCirculo = (radioCirculo * radioCirculo) * PI;
function areaCirculo (radio){
    return (radio * radio) * PI;
}
//console.log("El area del circulo es: " + areaCirculo + "cm^2");

console.groupEnd();


//Aqui interactuamos con el HTML

// Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro + "cm");
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area + "cm^2");
}

// Triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTrianguloLado1");
    const lado1 = input1.value;
    const input2 = document.getElementById("inputTrianguloLado2");
    const lado2 = input2.value;
    const input3 = document.getElementById("inputTrianguloBase");
    const base = input3.value;

    const perimetro = perimetroTriangulo (lado1,lado2,base);
    alert(perimetro + "cm");
}

function calcularAreaTriangulo(){
    const input = document.getElementById("inputTrianguloAltura");
    const value = input.value;
    const input2 = document.getElementById("inputTrianguloBase");
    const value1 = input2.value;

    const area = areaTriangulo(value,value1);
    alert(area + "cm^2");
}

// Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro + "cm");
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area + "cm^2");
}
