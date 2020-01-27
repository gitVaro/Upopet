'use strict';

var texto;

class Persona {
    constructor(DNI, nombre, apellidos, telefono) {
        this.DNI = DNI;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }

}

class Cliente extends Persona {
    constructor(DNI, numCliente, nombre, apellidos, telefono) {
        super(DNI, nombre, apellidos, telefono);
        this.numCliente = numCliente;
    }

    toHTMLRow() {
        let fila = "";
        fila += "<tr><td>" + this.DNI + "</td><td>" + this.numCliente + "</td><td>" + this.nombre + "</td><td>" + this.apellidos + "</td><td>" + this.telefono + "</td></tr>";
        return fila;
    }
}

class Veterinario extends Persona {
    constructor(DNI, numColegiado, nombre, apellidos, telefono, especialidad, nomina) {
        super(DNI, nombre, apellidos);
        this.numColegiado = numColegiado;
        this.telefono = telefono;
        this.especialidad = especialidad;
        this.nomina = nomina;
    }

    toHTMLRow() {
        let fila = "";
        fila += "<tr><td>" + this.DNI + "</td><td>" + this.numColegiado + "</td><td>" + this.nombre + "</td><td>" + this.apellidos + "</td><td>" + this.telefono + "</td><td>" + this.especialidad + "</td><td>" + this.nomina + "</td></tr>";
        return fila;
    }
}

class Mascota {
    constructor(numCliente, numChip, nombre, especie, raza, descripcion, sexo) {
        this.numCliente = numCliente;
        this.numChip = numChip;
        this.nombre = nombre;
        this.especie = especie;
        this.raza = raza;
        this.descripcion = descripcion;
        this.sexo = sexo;
    }

    toHTMLRow() {
        let fila = "";
        fila += "<tr><td>" + this.numChip + "</td><td>" + this.numCliente + "</td><td>" + this.nombre + "</td><td>" + this.especie + "</td><td>" + this.raza + "</td><td>" + this.descripcion + "</td><td>" + this.sexo + "</td></tr>";
        return fila;
    }
}

class PruebaMedica {
    constructor(numColegiado, numChip, fechaHora, tipo, observaciones) {
        this.numColegiado = numColegiado;
        this.numChip = numChip;
        this.fechaHora = fechaHora;
        this.tipo = tipo;
        this.observaciones = observaciones;
    }

}

class Cita {
    constructor(numCita, numColegiado, numChip, fechaCita, estado, pruebas) {
        this.numCita = numCita;
        this.numColegiado = numColegiado;
        this.numChip = numChip;
        this.fechaCita = fechaCita;
        this.estado = estado;
        this.pruebas = pruebas;
    }

    toHTMLRow() {
        let fila = "";
        fila += "<tr><td>" + this.numCita + "</td><td>" + this.numColegiado + "</td><td>" + this.numChip + "</td><td>" + this.fechaCita + "</td><td>" + this.estado + "</td><td>" + this.pruebas + "</td></tr>";
        return fila;
    }
}

class Tratamiento {
    constructor(numColegiado, numChip, patologia, inicio, fin, observacion) {
        this.numColegiado = numColegiado;
        this.numChip = numChip;
        this.patologia = patologia;
        this.inicio = inicio;
        this.fin = fin;
        this.observacion = observacion;
    }
}

class Medicamento {
    constructor(idMed, prospecto) {
        this.idMed = idMed;
        this.prospecto = prospecto;
    }
}

class Posologia {
    constructor(patologia, idMed, dosis, periodo, duracion) {
        this.patologia = patologia;
        this.idMed = idMed;
        this.dosis = dosis;
        this.periodo = periodo;
        this.duracion = duracion;
    }
}

class Clinica {
    constructor(personas, mascotas, citas) {
        this.personas = [];
        this.mascotas = [];
        this.citas = [];
    }

    altaCliente(oCliente) {
        let opcion = this.buscarCliente(oCliente.DNI, oCliente.numCliente);

        if (opcion == 0)
            texto = "El DNI ya está registrado";
        else if (opcion == 1)
            texto = "El número de cliente ya está registrado";
        else {
            this.personas.push(oCliente);
            this.personas.sort(function(v1, v2) {
                return parseInt(v1.DNI) - parseInt(v2.DNI);
            });
            texto = "Cliente registrado";
        }
        return texto;
    }

    altaVeterinario(oVeterinario) {
        let opcion = this.buscarVeterinario(oVeterinario.DNI, oVeterinario.numColegiado);

        if (opcion == 0)
            texto = "El DNI ya está registrado";
        else if (opcion == 1)
            texto = "El número de colegiado ya está registrado";
        else {
            this.personas.push(oVeterinario);
            this.personas.sort(function(v1, v2) {
                return parseInt(v1.DNI) - parseInt(v2.DNI);
            });
            texto = "Veterinario registrado";
        }
        return texto;
    }

    altaMascota(oMascota) {
        if (this.buscarMascota(oMascota.numChip))
            texto = "La mascota ya existe";
        else if (!this.buscarNumCliente(oMascota.numCliente))
            texto = "El número de cliente no está registrado";
        else {
            this.mascotas.push(oMascota);
            this.mascotas.sort(function(v1, v2) {
                return parseInt(v1.numChip) - parseInt(v2.numChip);
            });
            texto = "Mascota registrada";
        }
        return texto;
    }

    altaCita(oCita) {
        let opcion = this.buscarCita(oCita.numCita, oCita.numColegiado, oCita.numChip);

        if (opcion == 0)
            texto = "El número de colegiado no está registrado";
        else if (opcion == 1)
            texto = "El número de chip de la mascota no está registrado";
        else if (opcion == 2)
            texto = "La cita ya existe";
        else {
            this.citas.push(oCita);
            this.personas.sort(function(v1, v2) {
                return parseInt(v1.numCita) - parseInt(v2.numCita);
            });
            texto = "Cita registrada";
        }
        return texto;
    }

    buscarCliente(DNI, numCliente) {
        let existe = 2;
        this.personas.forEach((persona) => {
            if (persona.DNI == DNI)
                existe = 0;
            else if (persona.constructor.name == "Cliente" && persona.numCliente == numCliente)
                existe = 1;
        })
        return existe;
    }

    buscarVeterinario(DNI, numColegiado) {
        let existe = 2;
        this.personas.forEach((persona) => {
            if (persona.DNI == DNI)
                existe = 0;
            else if (persona.constructor.name == "Veterinario" && persona.numColegiado == numColegiado)
                existe = 1;
        })
        return existe;
    }

    buscarMascota(numChip) {
        let existe = false;
        this.mascotas.forEach((mascota) => {
            if (mascota.numChip == numChip)
                existe = true;
        })
        return existe;
    }

    buscarColegiado(numColegiado) {
        let existe = false;
        this.personas.forEach((persona) => {
            if (persona.constructor.name == "Veterinario" && persona.numColegiado == numColegiado)
                existe = true;
        })
        return existe;
    }

    buscarNumCliente(numCliente) {
        let existe = false;
        this.personas.forEach((persona) => {
            if (persona.constructor.name == "Cliente" && persona.numCliente == numCliente)
                existe = true;
        })
        return existe;
    }

    buscarDNICliente(DNI) {
        let personaADevolver = "";
        this.personas.forEach((persona) => {
            if (persona.constructor.name == "Cliente" && persona.DNI == DNI) {
                personaADevolver = persona;
                return personaADevolver;
            }
        })
        return personaADevolver;
    }

    buscarNumeroCliente(numCliente) {
        let personaADevolver = "";
        this.personas.forEach((persona) => {
            if (persona.constructor.name == "Cliente" && persona.numCliente == numCliente) {
                personaADevolver = persona;
                return personaADevolver;
            }
        })
        return personaADevolver;
    }

    buscarNumeroColegiado(numColegiado) {
        let personaADevolver = "";
        this.personas.forEach((persona) => {
            if (persona.constructor.name == "Veterinario" && persona.numColegiado == numColegiado) {
                personaADevolver = persona;
                return personaADevolver;
            }
        })
        return personaADevolver;
    }

    buscarNumeroChip(numChip) {
        let mascotaADevolver = "";
        this.mascotas.forEach((mascota) => {
            if (mascota.numChip == numChip) {
                mascotaADevolver = mascota;
                return mascotaADevolver;
            }
        })
        return mascotaADevolver;
    }

    buscarNumeroCita(numCita) {
        let citaADevolver = "";
        this.citas.forEach((cita) => {
            if (cita.numCita == numCita) {
                citaADevolver = cita;
                return citaADevolver;
            }
        })
        return citaADevolver;
    }

    buscarNumCita(numCita) {
        let existe = false;
        this.citas.forEach((cita) => {
            if (cita.numCita == numCita)
                existe = true;
        })
        return existe;
    }

    buscarCita(numCita, numColegiado, numChip) {
        let existe = 3;
        if (!this.buscarColegiado(numColegiado))
            existe = 0;
        else if (!this.buscarMascota(numChip))
            existe = 1;
        else if (this.buscarNumCita(numCita))
            existe = 2;

        return existe;
    }

    buscarClientesExistentes(id) {
        let tabla = "<thead class='thead-dark'><tr><th colspan='5' style='text-align: center;'>CLIENTE</th></tr></thead><thead class='thead-light'><tr><th>DNI</th><th>Nº Cliente</th><th>Nombre</th><th>Apellidos</th><th>Teléfono</th></tr></thead>";
        let personaADevolver = this.buscarNumeroCliente(id);
        let cliente = new Cliente(personaADevolver.DNI, personaADevolver.numCliente, personaADevolver.nombre, personaADevolver.apellidos, personaADevolver.telefono);
        tabla += cliente.toHTMLRow();
        return tabla;
    }

    buscarVeterinariosExistentes(id) {
        let tabla = "<thead class='thead-dark'><tr><th colspan='7' style='text-align: center;'>VETERINARIO</th></tr></thead><thead class='thead-light'><tr><th>DNI</th><th>Nº Colegiado</th><th>Nombre</th><th>Apellidos</th><th>Teléfono</th><th>Especialidad</th><th>Nómina</th></tr></thead>";
        let personaADevolver = this.buscarNumeroColegiado(id);
        let veterinario = new Veterinario(personaADevolver.DNI, personaADevolver.numColegiado, personaADevolver.nombre, personaADevolver.apellidos, personaADevolver.telefono, personaADevolver.especialidad, personaADevolver.nomina);
        tabla += veterinario.toHTMLRow();
        return tabla;
    }

    buscarMascotasExistentes(id) {
        let tabla = "<thead class='thead-dark'><tr><th colspan='7' style='text-align: center;'>MASCOTA</th></tr></thead><thead class='thead-light'><tr><th>Nº Chip</th><th>Nº Cliente</th><th>Nombre</th><th>Especie</th><th>Raza</th><th>Descripción</th><th>Sexo</th></tr></thead>";
        let mascotaADevolver = this.buscarNumeroChip(id);
        let animal = new Mascota(mascotaADevolver.numCliente, mascotaADevolver.numChip, mascotaADevolver.nombre, mascotaADevolver.especie, mascotaADevolver.raza, mascotaADevolver.descripcion, mascotaADevolver.sexo);
        tabla += animal.toHTMLRow();
        return tabla;
    }

    buscarCitasExistentes(id) {
        let tabla = "<thead class='thead-dark'><tr><th colspan='6' style='text-align: center;'>CITA</th></tr></thead><thead class='thead-light'><tr><th>Nº Cita</th><th>Nº Colegiado</th><th>Nº Chip</th><th>Fecha</th><th>Estado</th><th>Pruebas</th></tr></thead>";
        let citaADevolver = this.buscarNumeroCita(id);
        let fecha = new Cita(citaADevolver.numCita, citaADevolver.numColegiado, citaADevolver.numChip, citaADevolver.fechaCita, citaADevolver.estado, citaADevolver.pruebas);
        tabla += fecha.toHTMLRow();
        return tabla;
    }

    getClientes() {
        let clientes = [];
        this.personas.forEach((persona) => {
            if (persona.constructor.name == "Cliente") {
                clientes.push(persona);
            }
        })
        return clientes;
    }

    getVeterinarios() {
        let veterinarios = [];
        this.personas.forEach((persona) => {
            if (persona.constructor.name == "Veterinario") {
                veterinarios.push(persona);
            }
        })
        return veterinarios;
    }

    getMascotas() {
        return this.mascotas;
    }

    getCitas() {
        return this.citas;
    }

    actualizaCliente(oCliente) {
        let antiguoCliente = this.buscarDNICliente(oCliente.DNI);
        this.personas.splice(this.personas.indexOf(antiguoCliente), 1);
        this.personas.push(oCliente);


        this.personas.sort(function(v1, v2) {
            return parseInt(v1.DNI) - parseInt(v2.DNI);
        });

        return "Actualizado correctamente";
    }

    actualizaVeterinario(oVeterinario) {
        let antiguoVetetinario = this.buscarNumeroColegiado(oVeterinario.numColegiado);
        this.personas.splice(this.personas.indexOf(antiguoVetetinario), 1);
        this.personas.push(oVeterinario);

        this.personas.sort(function(v1, v2) {
            return parseInt(v1.DNI) - parseInt(v2.DNI);
        });

        return "Actualizado correctamente";
    }

    actualizaMascota(oMascota) {
        let antiguaMascota = this.buscarNumeroChip(oMascota.numChip);
        this.mascotas.splice(this.mascotas.indexOf(antiguaMascota), 1);
        this.mascotas.push(oMascota);

        this.mascotas.sort(function(v1, v2) {
            return parseInt(v1.numChip) - parseInt(v2.numChip);
        });

        return "Actualizado correctamente";
    }

    actualizaCita(oCita) {
        let antiguaCita = this.buscarNumeroCita(oCita.numCita);
        this.citas.splice(this.citas.indexOf(antiguaCita), 1);
        this.citas.push(oCita);

        this.citas.sort(function(v1, v2) {
            return parseInt(v1.numCita) - parseInt(v2.numCita);
        });

        return "Actualizado correctamente";
    }

    listadoClientes() {
        let tabla = "<thead class='thead-dark'><tr><th colspan='5' style='text-align: center;'>CLIENTES</th></tr></thead><thead class='thead-light'><tr><th>DNI</th><th>Nº Cliente</th><th>Nombre</th><th>Apellidos</th><th>Teléfono</th></tr></thead>";
        this.personas.forEach((persona) => {
            if (this.buscarNumCliente(persona.numCliente)) {
                let cliente = new Cliente(persona.DNI, persona.numCliente, persona.nombre, persona.apellidos, persona.telefono);
                tabla += cliente.toHTMLRow();
            }
        })
        return tabla;
    }

    listadoVeterinarios() {
        let tabla = "<thead class='thead-dark'><tr><th colspan='7' style='text-align: center;'>VETERINARIO</th></tr></thead><thead class='thead-light'><tr><th>DNI</th><th>Nº Colegiado</th><th>Nombre</th><th>Apellidos</th><th>Teléfono</th><th>Especialidad</th><th>Nómina</th></tr></thead>";
        this.personas.forEach((persona) => {
            if (this.buscarColegiado(persona.numColegiado)) {
                let veterinario = new Veterinario(persona.DNI, persona.numColegiado, persona.nombre, persona.apellidos, persona.telefono, persona.especialidad, persona.nomina);
                tabla += veterinario.toHTMLRow();
            }
        })
        return tabla;
    }

    listadoMascotas() {
        let tabla = "<thead class='thead-dark'><tr><th colspan='7' style='text-align: center;'>MASCOTAS</th></tr></thead><thead class='thead-light'><tr><th>Nº Chip</th><th>Nº Cliente</th><th>Nombre</th><th>Especie</th><th>Raza</th><th>Descripción</th><th>Sexo</th></tr></thead>";
        this.mascotas.forEach((mascota) => {
            if (this.buscarMascota(mascota.numChip)) {
                let animal = new Mascota(mascota.numCliente, mascota.numChip, mascota.nombre, mascota.especie, mascota.raza, mascota.descripcion, mascota.sexo);
                tabla += mascota.toHTMLRow();
            }
        })
        return tabla;
    }

    listadoCitas() {
        let tabla = "<thead class='thead-dark'><tr><th colspan='6' style='text-align: center;'>CITAS</th></tr></thead><thead class='thead-light'><tr><th>Nº Cita</th><th>Nº Colegiado</th><th>Nº Chip</th><th>Fecha</th><th>Estado</th><th>Pruebas</th></tr></thead>";
        this.citas.forEach((cita) => {
            if (this.buscarNumCita(cita.numCita)) {
                let fecha = new Cita(cita.numCita, cita.numColegiado, cita.numChip, cita.fechaCita, cita.estado, cita.pruebas);
                tabla += cita.toHTMLRow();
            }
        })
        return tabla;
    }
}