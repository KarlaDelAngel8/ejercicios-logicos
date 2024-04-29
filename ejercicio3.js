/**
 * Alarma
Escribe un programa que pregunte a un usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.

Ejemplo de resultado : "Hora de acostarse después de 10 segundos".
 */

let segun2 = prompt("¿Cuántos segundos faltan para tu alarma?");
let menMostrar = prompt("¿Qué mensaje quieres mostrar para tu alarma?");

setTimeout(() => {
  console.log(menMostrar);
}, segun2 * 1000);