const persona = {
    // Propiedades (Atributo)
    nombre: "Alan",
    apellido: "Turing",
    colorDePelo: "Negro",
    altura: 1.8,
    peso: 90,
    celular: {
        marca: "Samsung",
        modelo: "S23",
        encendido: false,
        encender: function() {
            this.encendido = !this.encendido;
        }
    },
    // Operaciones (Métodos)
    nombreCompleto: function() {
        return `${this.nombre} ${this.apellido}`;
    },
    presentarseEnConsola: function(conEntusiasmo) {
        let mensaje = `Hola soy ${this.nombreCompleto()}`;
        if (conEntusiasmo) {
            mensaje += "!!!!!";
        }
        console.log(mensaje);
    }
};

console.log( persona.nombreCompleto() );
persona.presentarseEnConsola(true);
persona.presentarseEnConsola(false);
/*
console.log(persona);
console.log(persona.apellido);
console.log(persona["apellido"]);
persona.colorDePelo = "Rubio";
console.log(persona);*/

// console.log(persona.nombre + " " + persona.apellido); ASI NO

