
const nombre = 'Gary';
const apellido = 'Guzmán';

const nombreCompleto = `
${ nombre } 
${ apellido }
${ 1 + 1 }
`;


export function getSaludo(nombre = 'Carlos') {
  return 'Hola ' + nombre + '!';
}

