interface SerHumano {
  nombre: string,
  edad: number,
  profesion: string
}

class Persona implements SerHumano {
  nombre;
  edad;
  profesion;
  
  constructor(nombre: string, edad: number, profesion?: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion || new Profesion().profesion;
  }
  
  saludar() {
    return `Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`;
  }
}

class Profesion {
  private _profesion;

  set profesion(prof: string) {
    this._profesion = prof;
  }
  get profesion() {
    return Math.round(Math.random()) ? "Alpinista" : "Catador";  
  };
}

/********************************/




function init() {
  const contenedor = document.getElementById("root");
  const sujeto = new Persona("Osman", 27);

  const saludo = sujeto.saludar();

  contenedor.innerHTML = saludo;
} 



/********************************/

init();