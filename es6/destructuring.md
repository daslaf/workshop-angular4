## Destructuring

### Para objetos:

La destructuración nos permite asignar variables desde las propiedades de un objeto de forma más concisa.

```
var gatito = {
  nombre: "Juani",
  raza: "Quiltro",
  edad: 3,
  maulla: false 
}

var nombre = gatito.nombre,
    maulla = gatito.maulla;
```

Equivalente a:

```
var { nombre, maulla } = gatito;
```

El nombre de la variable asignada debe coincidir con el de la propiedad que se quiere obtener, es posible igualmente cambiar el nombre de las variables:

```
var { nombre: n, maulla: m } = gatito;
console.log(n, m);
```

Incluso funciona para estructuras más complejas:

```
function ajax() {
  return {
    nombre: "Osman",
    apellido: "Cea",
    genero: "Masculino",
    nacimiento: "02/03/1989",
    empresa: {
      nombre: "Cardumen",
      razon_social: "Soy la razón social"
    }
  }
}

let {
  nombre,
  apellido,
  empresa: { nombre: empresa }
} = ajax();

console.log( nombre, apellido, empresa );
```

### Para arreglos:

También es posible utilizar destructuración en arreglos, sólo hay que cambiar `{}` por `[]`

```
function ajax() {
  return [
    {
      id: 1,
      mensaje: "Me gusta la música"
    },
    {
      id: 2,
      mensaje: "Banana remix 23"
    },
    {
      id: 3,
      mensaje: ""
    }
  ]
}

let [ comentario1, comentario2, comentario3 ] = ajax();

console.log( comentario1, comentario2, comentario3 );
```
