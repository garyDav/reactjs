# ¿Qué es React?

Es una __librería__ que nos permite a nosotros crear aplicaciones, al ser una librería tu podrías pegarla al HTML de tu página e inmediatamente empezar a trabajar con ReactJS, no es la forma tradicional de hacerlo, pero es posible.

React está hecho para trabajar con todo tipo de magnitud, ya sea aplicaciones sencillas, aplicaciones intermedias, o sumamente robustas, con alto nivel de interactividad, ahora esta librería al ser __declarativa__, hace fácil seguir patrones de diseño y crear interfaces de usuario iteractivas, es increíblemente __eficiente__, podríamos decir ridículamente eficiente, cuando hacen ustedes algún cambio, y ese cambio impacta en el DOM o en el HTML, hay que volver a rederizarlo React únicamente hace el cambio en ese elemento, otro punto fuerte, es que React trabaja de manera __predecible__ por que toda la información fluye en una sola vía, eso de que "fluye en una sola vía" tendrá sentido después, pero eso nos ayuda a prevenir mutaciones involuntarias o predecibles, y por último tenemos la parte de los __componentes__, que son pequeñas piezas de código encapsuladas que pueden tener estado o no, y de ésta manera podemos romper una aplicación que sea bastante compleja en pequeños componentes ó en pequeñas piezas sencillas y fáciles de mantener que permitan mantener el código limpio y sencillo.

Hay otros puntos interesantes en React, como por ejemplo que se pueda trabajar del lado del servidor aplicaciones de React con Node __(Server-side con Node)__, tambien podemos manejar __aplicaciones móviles con React Native__, podemos crear aplicaciones de escritorio utilizando __electron__ u otras alternativas, todo con el mismo tipo de código.

## ¿Cómo luce el código de React?

```jsx
const divRoot = document.querySelector('#root');

ReactDOM.render( <h1>Hola Mundo</h1>, divRoot );
```

Podríamos separar la etiqueta en una variable/constante.

```jsx
const divRoot = document.querySelector('#root');

const h1Tag = <h1>Hola Mundo</h1>;

ReactDOM.render( h1Tag, divRoot );
```

Ésta mezcla de código JavaScript y HTML es conocido como `JSX = JS + XML`, él código anterior podrías crearlo sin usar esta sintaxis de la siguiente manera:

```js
const h1Tag = document.createElement('h1', null, `Hola, soy ${ nombre }`);
```

## Introducción a Babel

Babel es algo que funciona en el background cuando creamos nuestras aplicaciones de React, así que no hay que preocuparse mucho de ese lado, pero React en el background utiliza Babel, ¿y que es Babel?, nos permite a nosotros utilizar características actuales de javascript, que han sido aceptadas en el último estándar de ECMASCRIPT, y poder utiliar ese código, inclusive en navegadores web, que aún no soportan esa característica, es súper interesante y por eso React lo utiliza, de esa manera podemos aprovechar al máximo el código de JavaScript, sin preocuparnos mucho en la compatibilidad de los navegadores web.

__Ejemplo:__

```js
const restApi = {
  // personajes: ['Goku', 'Vegeta']
};

console.log( restApi.personajes?.length )
```

El código compatible con versiones antiguas de JavaScript.

```js
var _restApi$personajes;

const restApi = {// personajes: ['Goku', 'Vegeta']
}
console.log((_restApi$personajes = restApi.personajes) == null ? void 0 : _restApi$personajes.length);
```

