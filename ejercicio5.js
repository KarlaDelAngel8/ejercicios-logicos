/**
 * Factorial
 * 
 * Escriba un programa que solicite un número entero n . Donde  1 <= norte. Resuelve esto usando recursividad.
 */
let numIngresa = prompt("Ingrese un número:");

let factorial = 1;
for (let i = 1; i <= numIngresa; i++) {
  factorial *= i;
}

alert(`El factorial de ${numIngresa} es: ${factorial}`);