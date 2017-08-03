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

function init() {
  this.kitten = "Maine Coon";

  getLexicalKitten(); // "Angora"
  getThisKitten();    // "Maine Coon"
}

init();
