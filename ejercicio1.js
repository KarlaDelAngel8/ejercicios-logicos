/**
 * Perfil del usuario
 * 
 * Perfil del usuario
Escriba un programa que solicite al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacene la información y luego muéstrela en la consola. Tenga en cuenta que el resultado de las películas debe agregar un pequeño mensaje como: 'La película {película} es una de mis favoritas'.
 */
const usuario = prompt("Ingresa tu nombre:");
const edad = prompt("Ingresa tu edad:");
const peliculasFavoritas = [];
while (true) {
  const peli = prompt("Ingresa una película favorita (o escribe 'son todas' para terminar):");
  if (peli === "son todas") {
    break;
  }
  peliculasFavoritas.push(peli);
}
console.log(`Nombre: ${usuario}`);
console.log(`Edad: ${edad}`);
console.log("Películas favoritas:");
peliculasFavoritas.forEach((peli) => {
  console.log(`- La película ${peli} es una de mis favoritas.`);
});




