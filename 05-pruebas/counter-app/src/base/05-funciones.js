const saludar2 = nombre => {
  return `Hola, ${ nombre }`;
}

const saludar3 = nombre => `Hola, ${ nombre }`;
const saludar4 = _ => `Hola Mundo`;

export const getUser = () => ({
  uid: 'ABC123',
  username: 'El_Papi1502'
})

// Tarea
// 1. Transformen a una funcion flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

export const getUsuarioActivo = ( nombre ) => ({
  uid: 'ABC123',
  username: nombre
})


