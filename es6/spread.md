## Spread operator _..._

### Arreglos:

El operador `...` permite inicializar parte de un arreglo literal a partir de un iterador*, tal como otro arreglo literal.

```
let gatos = [ "Ragdoll", "Blue Point" ];
let todos = [ "Bengalí", "Maine Coon" , ...gatos ]

console.log(todos) // [ "Bengalí", "Maine Coon" , "Ragdoll", "Blue Point" ]
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

