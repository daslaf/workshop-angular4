## Función flecha _o lambda_

### Notación reducida:

Retorna la expresión por defecto: `return` implícito.

```
const foo = (arg) => arg.toUpperCase();
```

Equivalente a:

```
const foo = function(arg) {
  return arg.toUpperCase();
}
```
---

### Scope:

La función _lambda_ tiene acceso al scope léxico. Es decir, el valor de `this` dentro del bloque de la función, corresponde al `this` donde la función es declarada y no al scope donde es llamada.

Ejemplo:

```
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

igualmente:

```
function init() {
  this.kitten = "Maine Coon";

  getLexicalKitten(); // "Angora"
  getThisKitten();    // "Maine Coon"
}

init();
```



