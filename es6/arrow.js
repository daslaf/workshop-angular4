/** Arrow functions */

/** 
 * Notación reducida 
 * ---
 * Retorna la expresión por defecto: return implícito;
 */
const foo = (arg) => arg.toUpperCase();

/**
 *  Equivalete a
 *  const foo = function(arg) {
 *    return arg.toUpperCase();
 *  }
 */

const baz = (x) => ( x );

console.log( foo('hola'), bar('adios'), baz('hey') );