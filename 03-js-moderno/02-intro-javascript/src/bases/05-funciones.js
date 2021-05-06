

// Funciones en JS
/* function saludar( nombre ) {
  return `Hola, ${ nombre }`;
}

saludar = 30

// console.log( saludar('Goku') )

console.log( saludar )
*/

// const saludar = function ( nombre ) {
//  return `Hola, ${ nombre }`;
// }

const saludar2 = nombre => {
  return `Hola, ${ nombre }`;
}

const saludar3 = nombre => `Hola, ${ nombre }`;
const saludar4 = _ => `Hola Mundo`;


console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );

const getUser = () => ({
  uid: 'ABC123',
  username: 'El_Papi1502'
})

const user = getUser();
console.log( user );

// Tarea
// 1. Transformen a una funcion flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

const getUsuarioActivo = ( nombre ) => ({
  uid: 'ABC123',
  username: nombre
})


const usuarioActivo = getUsuarioActivo( 'Gary' )
console.log( usuarioActivo );


