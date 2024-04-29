/**matriz plana
 * 
Escriba un programa que tome la siguiente matriz anidada y la aplane (convirtiéndola en una matriz 1D). Utilice cualquier tipo de algoritmo que desee, como devoluciones de llamada, recursividad, etc.*/

function flattenArray(arr, result = []) {
    for (let  j= 0; j < arr.length; j++) {
      const elemento = arr[j];
      if (Array.isArray(elemento)) {
        flattenArray(elemento, result);
      } else {
        result.push(elemento);
      }
    }
    return result;
  }
  
  let multiDimension = [1, [2, 3, [4, 5, [6]]]];
  let flatArray = flattenArray(multiDimension);
  console.log(flatArray);