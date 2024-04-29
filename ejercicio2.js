/**
 * numero mas alto
Escribe un programa que solicite 10 números. Usando operadores lógicos y cualquier otra función/estructura de JavaScript que haya visto antes, determine y genere el mayor de esos números.
 */

let numMayor = 0;
console.log ("ingresar 10 numeros");
for (let i = 0; i < 10; i++) {
  let numer = parseInt(prompt("Ingrese un número:"));
  if (numer > numMayor) {
    numMayor = numer;
  }
}
console.log("El mayor número es:", numMayor);
