## Clases

Las clases de ES6 y Typescript son una extensión de la construcción utilizada en ES5, y el afán detrás de esta especificación es mejorar la sintaxis y suprimir el acceso a `Object.prototype`.

Consideremos la siguiente definición (ES5):

```javascript
function PersonaES5(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

PersonaES5.prototype.saludar = function() {
  console.log('Hola mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.');
}

// Creamos una nueva persona
var yo = new PersonaES5("Osman", 28);

console.log(yo); // { nombre: "Osman", edad: 28 }
```

Las clases ES6 simplifican este proceso con la siguiente sintaxis:

```javascript
class PersonaES6 {
  constructor(nombre, edad) {
    this.nombre = nombre,
    this.edad = edad
  }

  saludar() {
    console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Creamos una nueva persona
const yo = new PersonaES6("Osman", 28);

console.log(yo); // PersonaES6 { nombre: "Osman", edad: 28 }
```

Typescript sin embargo presenta una variación que nos permite definir los tipos de las propiedades para cada clase:

```typescript
class PersonaES6 {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre,
    this.edad = edad
  }

  saludar() {
    console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}
```


### Modificadores `public`, `private` y `protected`

Existen tres modificadores para definir la privacidad de los parámetros y métodos de una clase. Por defecto la definición de cualquier miembro de una clase es `public` y por ende no es necesario declararla explicitamente.

