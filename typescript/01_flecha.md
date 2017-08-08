## Función flecha _o lambda_

### Notación reducida:

Retorna la expresión por defecto: `return` implícito.

```typescript
const foo = (arg) => arg.toUpperCase();
```

Equivalente a:

```typescript
const foo = function(arg) {
  return arg.toUpperCase();
}
```


### Scope:

La función _lambda_ tiene acceso al scope léxico. Es decir, el valor de `this` dentro del bloque de la función, corresponde al `this` donde la función es declarada y no al scope donde es llamada.

Ejemplo:

```typescript
this.kitten = "Angora";

const getLexicalKitten = () => {
  console.log(this.kitten);
}

const getThisKitten = function() { 
  console.log(this.kitten); 
}

const otroScope = {
  kitten: "Bengalí",
  foo: getLexicalKitten,
  bar: getThisKitten
}

otroScope.foo(); // "Angora"
otroScope.bar(); // "Bengalí"
```

Igualmente:

```typescript
function init() {
  this.kitten = "Maine Coon";

  getLexicalKitten(); // "Angora"
  getThisKitten();    // "Maine Coon"
}

init();
```

El acceso al scope léxico de las funciones _lambda_ nos permite ahorrar tiempo y hace el código más legible, ya que si quisieramos tener el mismo tipo de acceso con funciones anónimas normales, tenemos que pasar el valor de `this` esperado ya sea con `bind`, `call` o `apply`.

