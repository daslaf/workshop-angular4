## Spread operator _..._

### Arreglos:

El operador `...` permite inicializar parte de un arreglo literal a partir de un iterador*, tal como otro arreglo literal.

```
let gatos = [ "Ragdoll", "Blue Point" ];
let todos = [ "Bengalí", "Maine Coon" , ...gatos ]

console.log(todos) // [ "Bengalí", "Maine Coon" , "Ragdoll", "Blue Point" ]
```

### Argumentos en una función:

Consideremos la siguiente función:

```
function presentacion( nombre, apodo, profesion ) {
  console.log(`Hola mi nombre es ${nombre}, me dicen ${apodo} y soy ${profesion}`);
}
```

Podemos usar el operador spread para pasar los argumentos en un arreglo:

```
const argumentos = [ "Juan", "juanito", "talabartero" ];

console.log( presentacion( ...argumentos ) ); 
// Hola mi nombre es Juan, me dicen juanito y soy talabartero
```


### Objetos (Sólo para Typescript):

Igualmente podemos usar el operador `...` con objetos, particularmente para asignar propiedades de un objeto directamente en otro:

```
let foo = {
  a: 97,
  b: 98
};
let bar = {
  ...foo,
  c: 99
};

console.log( bar ); // { a: 97, b: 98, c: 99 }
```

Este comportamiento es equivalente a `Object.assign`:

```
let foo = {
  a: 97,
  b: 98
};
let bar = Object.assign(
  {},
  foo,
  { c: 99 }
);

console.log( bar ); // { a: 97, b: 98, c: 99 }
```

