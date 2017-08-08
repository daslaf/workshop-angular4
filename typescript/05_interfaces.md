## Interfaces

Las interfaces en Typescript son una construccción compleja destinadas a declarar contratos a los que un objeto, variable, símbolo se suscribirá. La idea detrás de las interfaces es simplificar la asignación de tipos para elementos más complejos.

Si quisiéramos definir una función que recibiera como parámetro un objeto con la propiedad `nombre` de tipo `string` y retornara un objeto del mismo tipo, el checkeo de tipo debería ser el siguiente:

```typescript
function fooFunction( obj: { nombre: string } ): { nombre: string } {
  return obj;
}
```

Si creamos una interfaz para `{ nombre: string }` la recreación de esta función queda de la siguiente manera:

```typescript
interface fooObj { 
  nombre: string ;
};

function fooFunction( obj: fooObj ): fooObj {
  return obj;
}
```


### Propiedades opcionales

Una interfaz puede tener propiedades opcionales, denotadas por el operador `?`. Por ejemplo:

```typescript
interface fooObj { 
  nombre: string;
  fecha?: number;
};

var obj1: fooObj = {
  nombre: "Hola",
  fecha: 123412341234
}

var obj2: fooObj = {
  nombre: "Adiós"
}
```

El `obj2` cumple igual con la interfaz aunque no posee el atributo `fecha`, ya que es opcional. Si bien es posible tipear objetos sólo con las propiedades obligatorias de la interfaz, el mismo caso no se cumple cuando esta debiera chequear la existencia de sólo un par de propiedades sobre un objeto con más propiedades que la primera.

```typescript
interface fooObj {
  nombre: string;
}

let fooItem: fooObj = {
  nombre: "Hola",
  fecha: 123123
}
```

El compilador arrojará el siguiente error:

> El tipo `{ nombre: string; fecha: number; }` no es asignable a la interfaz `fooObj`.

Si quisieramos definir una interfaz que chequeara la existencia de la propiedad `nombre: string` sin importar la existencia de otras propiedades, debemos generar una propiedad genérica:

```typescript
interface fooObj {
  nombre: string;
  [propName: string]: any;
}

let fooItem: fooObj = {
  nombre: "Hola",
  fecha: 123123
}

let barItem: fooObj = {
  nombre: "Adios",
  apellido: "Tía Paty",
  telefono: 4555
}
```

Gracias a esto, el compilador reconocerá cualquier propiedad extra que escape de la definición estipulada por la interfaz.


### Definición de funciones en una interfaz

La nomenclatura para definir una interfaz de ***una*** función es la siguiente:

```typescript
interface fooFunction {
  ( arg1: number, arg2: string ): boolean;
}

const foo: fooFunction = function( num, str ) { return true; }
```

Si queremos definir un método dentro de una interfaz más compleja bien podemos incluir la interfaz anterior en una nueva interfaz, en vez de realizar otra definición.

```typescript
interface fooObjWithMethod {
  name: string:
  foo: fooFunction
} 
```

preferible a:

```typescript
interface fooObjWithMethod {
  name: string:
  foo: ( arg1: number, arg2: string ) => boolean;
} 
```
