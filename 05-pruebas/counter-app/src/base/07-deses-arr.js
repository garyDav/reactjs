
const personajes = ['Goku','Vegeta','Trunks'];

const [ , , p3 ] = personajes;

export const retornaArreglo = () => {
  return ['ABC', 123];
}

// const [ letras, numeros ] = retornaArreglo();

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. El segundo llamará setNombre
const useStatePrueba = ( valor ) => {
  return [ valor, () => { console.log('Hola Mundo') } ];
}


