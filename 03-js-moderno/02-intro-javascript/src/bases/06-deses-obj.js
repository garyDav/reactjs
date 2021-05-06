

// Desestructuración
// Asignación Desestructurante
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
};

// const { nombre:nombre2, clave, edad, } = persona;
// console.log( nombre2 );

const joder = ( { clave, nombre, edad, rango = 'Capitán' } ) => {
  // console.log( nombre, edad, rango );
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.34344,
      lng: -12.3434
    }
  }
}

const { nombreClave, anios, latlng:{ lat, lng } } = joder( persona );

console.log(nombreClave, anios, lat, lng);



