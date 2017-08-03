## Tipos


### Boolean

```
let bool: boolean = true;
```


### Number

```
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```


### String

```
let color: string = "azul";
color = 'rojo';

let frase: string = `El color es ${ color }`.

console.log(frase); // El color es rojo
```

La notación `${}` permite pasar variables que se evaluan directamente dentro del `string`, de esta forma nos ahorramos tener que concatenar `string`s manualmente con `+`.


### Arreglos

En cuanto a los arreglos, existen dos tipos de notación que son equivalentes:

```
let arreglo1: number[] = [1, 2, 3];

let arreglo2: Array<number> = [1, 2, 3];
```

Si bien ambas notaciones son equivalentes, para declarar tipos en estructuras más complejas, es preferible utilizar una u otra notación según el caso de uso, por ejemplo:

```
function request(): Promise<number[]> {
  ...
}
```

Es preferible a: 

```
function request(): Promise<Array<number>> {
  ...
}
```


### Tuplas

Igualmente puede haber notación en elementos como tuplas:

```
let tupla : [ string, number ] = [ "hola", 0 ];
```

Si se asignan propiedades a elementos fuera del rango `[ 0, 1 ]` de la tupla, Typescript aceptará valores que coincidan con alguno de los tipos ya declarados y emitirá error de ser un tipo diferente.

```
tuple[3] = "world"; // OK
tupla[4] = 3.14     // OK
tupla[5] = true     // ERROR, `true` no corresponde a ninguno de los tipos anteriores `string | number`
```


## Any

El tipo `any` se puede aplicar indistintamente a cualquier variable.

```
let cualquiera: any = 0;
cualquiera = "Hola que tal";
cualquiera = true; 
```


## Void

Al contrario de `any`, `void` se utiliza cuando una variable no tiene ningún valor. Se usa primordialmente para registrar funciones que no retornan nada. De retornar algo, el compilador arrojará un error.

```
function vacio(): void { console.log('Aquí no se retorna nada'); }
function noVacio(): void { return 'Aquí no se retorna nada'; } // ERROR
```


## Type assertions

Las afirmaciones de tipo se utilizan para definir reglas de tipos que el compilador de Typescript no puede inferir. Consideremos:

```
let obj = {};
obj.prop = "Hola"; // ERROR
```

El compilador arroja error porque el tipo inferido para `obj` es `{}`, es decir, un objeto vacío sin propiedades. Para solucionar esto, podemos hacer una afirmación de que el tipo de `obj` corresponde a una entidad con el atributo `prop`. 

```
interface Interfaz {
  prop: string
}

let obj = {} as Interfaz; // Equivalente a <Interfaz>{}
obj.prop = "Hola";        // OK
```

Este escenario se da principalmente al estar migrando código desde Javascript a Typescript.


## Union type

Los tipos de unión funcionan básicamente como un operador `OR`:

```
function getKittens( url: string, id: number | string ) {
  return ajax( `url/id=${id}` );
}

request( 'db://localhost:8000', 365 );    // OK
request( 'db://localhost:8000', "all" );  // OK
```

En este caso ambos set de parámetros pasados cumplen con la consigna.


## Más información

Existen muchos tipos avanzados en Typescript, para más información revisar la [documentación](https://www.typescriptlang.org/docs/handbook/advanced-types.html);


