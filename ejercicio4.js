/**
 * Palíndromo
Escriba un programa que solicite una palabra u oración (puede estar en mayúscula, tener espacios y puntuación). Averigua si la oración/palabra es un palíndromo o no. Ignorando la puntuación, los espacios y las letras mayúsculas.
 */

let frac = prompt("Ingrese una frase o palabra:");
let fraseSinEspacios = frac.replace(/\s/g,"");
let fraseInver = fraseSinEspacios.split("").reverse().join("");

if (fraseSinEspacios === fraseInver) {
  console.log(frac + " es un palíndromo.");
} else {
  console.log(frac + " no es un palíndromo.");
}
