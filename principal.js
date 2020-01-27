'use strict';

var clinica = new Clinica();
var opcion = "";

function inicio() {
    cargarDatos();
    mensaje("");
    mostrarMenu();
    document.getElementById("tabla").classList.add("oculta");
    document.getElementById("tabla").innerHTML = "";
}

function mensaje(texto) {
    document.getElementById("texto").classList.remove("text-danger");
    document.getElementById("texto").classList.remove("text-success");

    if (texto.includes("ya") || texto.includes("no") || texto.includes("No"))
        document.getElementById("texto").classList.add("text-danger");
    else
        document.getElementById("texto").classList.add("text-success");

    document.getElementById("texto").innerHTML = texto;
}

function ocultaMenus(array) {
    mensaje("");
    for (var i = 0; i < array.length; i++) {
        // Oculta/muestra los menus y los desactiva/activa
        if (array[i].substring(0, 1) == "F") {
            document.getElementById(array[i].substring(2)).classList.add("oculta");
        }
        if (array[i].substring(0, 1) == "T") {
            document.getElementById(array[i].substring(2)).classList.remove("oculta");
        }
    }
}

function ocultaCosas(array) {
    mensaje("");
    for (var i = 0; i < array.length; i++) {
        // Oculta/muestra los elementos y los desactiva/activa
        if (array[i].substring(0, 1) == "F") {
            document.getElementById(array[i].substring(2)).classList.add("oculta");
            document.getElementById(array[i].substring(2)).getElementsByTagName('input')[0].disabled = true;
        }
        if (array[i].substring(0, 1) == "T") {
            document.getElementById(array[i].substring(2)).classList.remove("oculta");
            document.getElementById(array[i].substring(2)).getElementsByTagName('input')[0].disabled = false;
        }
    }
}

function limpiaCampos() {
    form1.numCliente.value = "";
    for (let i = form2.comboBox.length; i >= 0; i--) {
        form2.comboBox.remove(i);
    }
    form.DNI.value = "";
    form.numCliente.value = "";
    form.nombre.value = "";
    form.apellidos.value = "";
    form.telefono.value = "";
    form.numColegiado.value = "";
    form.especialidad.value = "";
    form.nomina.value = "";
    form.numChip.value = "";
    form.especie.value = "";
    form.raza.value = "";
    form.descripcion.value = "";
    form.sexo.value = "";
    form.numCita.value = "";
    form.fechaCita.value = "";
    form.estado.value = "";
    form.pruebas.value = "";
    ocultaCosas(["F-DNI", "F-numCliente", "F-numColegiado", "F-numChip", "F-numCita", "F-nombre", "F-apellidos", "F-telefono", "F-especialidad", "F-nomina", "F-especie", "F-fechaCita", "F-raza", "F-descripcion", "F-sexo", "F-estado", "F-pruebas"]);
    ocultaMenus(["F-aceptar", "F-aceptar2", "F-form2"]);
}

function mostrarMenu() {
    ocultaCosas(["F-DNI", "F-numCliente", "F-numColegiado", "F-numChip", "F-numCita", "F-nombre", "F-apellidos", "F-telefono", "F-especialidad", "F-nomina", "F-especie", "F-fechaCita", "F-raza", "F-descripcion", "F-sexo", "F-estado", "F-pruebas"]);
    ocultaMenus(["T-menu", "F-altas", "F-actualizar", "F-busqueda", "F-listados", "F-aceptar", "F-aceptar2", "F-volver", "T-imagenMenu", "F-tabla", "F-form2"]);
}

function mostrarAltas() {
    ocultaMenus(["F-menu", "T-altas", "F-actualizar", "F-busqueda", "F-listados", "F-aceptar", "F-aceptar2", "T-volver", "F-imagenMenu", "F-form2"]);
}

function mostrarActualizar() {
    ocultaMenus(["F-menu", "F-altas", "T-actualizar", "F-busqueda", "F-listados", "F-aceptar", "F-aceptar2", "T-volver", "F-imagenMenu", "F-form2"]);
}

function mostrarBusqueda() {
    ocultaMenus(["F-menu", "F-altas", "F-actualizar", "T-busqueda", "F-listados", "F-aceptar", "F-aceptar2", "T-volver", "F-imagenMenu", "F-form2"]);
}

function mostrarListados() {
    ocultaMenus(["F-menu", "F-altas", "F-actualizar", "F-busqueda", "T-listados", "F-aceptar", "F-aceptar2", "T-volver", "F-imagenMenu", "F-form2"]);
}

function mostrarAltaCliente() {
    opcion = "altaCliente";
    ocultaCosas(["T-DNI", "T-numCliente", "F-numCita", "F-numColegiado", "F-numChip", "T-nombre", "T-apellidos", "T-telefono", "F-especialidad", "F-nomina", "F-especie", "F-fechaCita", "F-raza", "F-descripcion", "F-sexo", "F-estado", "F-pruebas"]);
    ocultaMenus(["T-aceptar", "F-aceptar2", "F-form2"]);
}

function mostrarAltaVeterinario() {
    opcion = "altaVeterinario";
    ocultaCosas(["T-DNI", "F-numCliente", "F-numCita", "T-numColegiado", "F-numChip", "T-nombre", "T-apellidos", "T-telefono", "T-especialidad", "T-nomina", "F-especie", "F-fechaCita", "F-raza", "F-descripcion", "F-sexo", "F-estado", "F-pruebas"]);
    ocultaMenus(["T-aceptar", "F-aceptar2", "F-form2"]);
}

function mostrarAltaMascota() {
    opcion = "altaMascota";
    ocultaCosas(["F-DNI", "T-numCliente", "F-numCita", "F-numColegiado", "T-numChip", "T-nombre", "F-apellidos", "F-telefono", "F-especialidad", "F-nomina", "T-especie", "F-fechaCita", "T-raza", "T-descripcion", "T-sexo", "F-estado", "F-pruebas"]);
    ocultaMenus(["T-aceptar", "F-aceptar2", "F-form2"]);
}

function mostrarAltaCita() {
    opcion = "altaCita";
    ocultaCosas(["F-DNI", "F-numCliente", "T-numCita", "T-numColegiado", "T-numChip", "F-nombre", "F-apellidos", "F-telefono", "F-especialidad", "F-nomina", "F-especie", "T-fechaCita", "F-raza", "F-descripcion", "F-sexo", "T-estado", "T-pruebas"]);
    ocultaMenus(["T-aceptar", "F-aceptar2", "F-form2"]);
}

function mostrarActualizarCliente() {
    opcion = "actualizaCliente";
    ocultaMenus(["T-form2"]);
    actualizaCombo();
}

function mostrarActualizarVeterinario() {
    opcion = "actualizaVeterinario";
    ocultaMenus(["T-form2"]);
    actualizaCombo();
}

function mostrarActualizarMascota() {
    opcion = "actualizaMascota";
    ocultaMenus(["T-form2"]);
    actualizaCombo();
}

function mostrarActualizarCita() {
    opcion = "actualizaCita";
    ocultaMenus(["T-form2"]);
    actualizaCombo();
}

function actualizaCombo() {
    if (opcion == "actualizaCliente")
        actualizaCliente();
    else if (opcion == "actualizaVeterinario")
        actualizaVeterinario();
    else if (opcion == "actualizaMascota")
        actualizaMascota();
    else if (opcion == "actualizaCita")
        actualizaCita();
}

function actualizaCliente() {
    limpiaCampos();
    ocultaMenus(["T-form2"]);
    let clientes = clinica.getClientes();
    let select = document.getElementById("comboBox");
    clientes.forEach((cliente) => {
        let option = document.createElement("option");
        option.innerHTML = cliente.DNI + " - " + cliente.nombre + " " + cliente.apellidos;
        option.value = cliente.DNI;
        select.appendChild(option);
    })
}

function actualizaVeterinario() {
    limpiaCampos();
    ocultaMenus(["T-form2"]);
    let veterinarios = clinica.getVeterinarios();
    let select = document.getElementById("comboBox");
    veterinarios.forEach((veterinario) => {
        let option = document.createElement("option");
        option.innerHTML = veterinario.DNI + " - " + veterinario.nombre + " " + veterinario.apellidos;
        option.value = veterinario.numColegiado;
        select.appendChild(option);
    })
}

function actualizaMascota() {
    limpiaCampos();
    ocultaMenus(["T-form2"]);
    let mascotas = clinica.getMascotas();
    let select = document.getElementById("comboBox");
    mascotas.forEach((mascota) => {
        let option = document.createElement("option");
        option.innerHTML = mascota.numChip + " - " + mascota.nombre + " - " + mascota.raza;
        option.value = mascota.numChip;
        select.appendChild(option);
    })
}

function actualizaCita() {
    limpiaCampos();
    ocultaMenus(["T-form2"]);
    let citas = clinica.getCitas();
    let select = document.getElementById("comboBox");
    citas.forEach((cita) => {
        let option = document.createElement("option");
        option.innerHTML = cita.numCita + " - " + cita.fechaCita;
        option.value = cita.numCita;
        select.appendChild(option);
    })
}

function actualizar() {
    if (opcion == "actualizaCliente")
        enviarActualizaCliente();
    else if (opcion == "actualizaVeterinario")
        enviarActualizaVeterinario();
    else if (opcion == "actualizaMascota")
        enviarActualizaMascota();
    else if (opcion == "actualizaCita")
        enviarActualizaCita();
}

function enviarActualizaCliente() {
    ocultaCosas(["T-DNI", "T-numCliente", "F-numCita", "F-numColegiado", "F-numChip", "T-nombre", "T-apellidos", "T-telefono", "F-especialidad", "F-nomina", "F-especie", "F-fechaCita", "F-raza", "F-descripcion", "F-sexo", "F-estado", "F-pruebas"]);
    ocultaMenus(["T-aceptar2"]);
    document.getElementById('DNI1').disabled = true;
    document.getElementById('numCliente1').disabled = true;
    let cliente = clinica.buscarDNICliente(document.getElementById('comboBox').value);
    form.DNI.value = cliente.DNI;
    form.numCliente.value = cliente.numCliente;
    form.nombre.value = cliente.nombre;
    form.apellidos.value = cliente.apellidos;
    form.telefono.value = cliente.telefono;
}

function enviarActualizaVeterinario() {
    ocultaCosas(["T-DNI", "F-numCliente", "F-numCita", "T-numColegiado", "F-numChip", "T-nombre", "T-apellidos", "T-telefono", "T-especialidad", "T-nomina", "F-especie", "F-fechaCita", "F-raza", "F-descripcion", "F-sexo", "F-estado", "F-pruebas"]);
    ocultaMenus(["T-aceptar2"]);
    document.getElementById('DNI1').disabled = true;
    document.getElementById('numColegiado1').disabled = true;
    let veterinario = clinica.buscarNumeroColegiado(document.getElementById('comboBox').value);
    form.DNI.value = veterinario.DNI;
    form.numColegiado.value = veterinario.numColegiado;
    form.nombre.value = veterinario.nombre;
    form.apellidos.value = veterinario.apellidos;
    form.telefono.value = veterinario.telefono;
    form.especialidad.value = veterinario.especialidad;
    form.nomina.value = veterinario.nomina;
}

function enviarActualizaMascota() {
    ocultaCosas(["F-DNI", "T-numCliente", "F-numCita", "F-numColegiado", "T-numChip", "T-nombre", "F-apellidos", "F-telefono", "F-especialidad", "F-nomina", "T-especie", "F-fechaCita", "T-raza", "T-descripcion", "T-sexo", "F-estado", "F-pruebas"]);
    ocultaMenus(["T-aceptar2"]);
    document.getElementById('numChip1').disabled = true;
    document.getElementById('numCliente1').disabled = true;
    let mascota = clinica.buscarNumeroChip(document.getElementById('comboBox').value);
    form.numCliente.value = mascota.numCliente;
    form.numChip.value = mascota.numChip;
    form.nombre.value = mascota.nombre;
    form.especie.value = mascota.especie;
    form.raza.value = mascota.raza;
    form.descripcion.value = mascota.descripcion;
    form.sexo.value = mascota.sexo;
}

function enviarActualizaCita() {
    ocultaCosas(["F-DNI", "F-numCliente", "T-numCita", "T-numColegiado", "T-numChip", "F-nombre", "F-apellidos", "F-telefono", "F-especialidad", "F-nomina", "F-especie", "T-fechaCita", "F-raza", "F-descripcion", "F-sexo", "T-estado", "T-pruebas"]);
    ocultaMenus(["T-aceptar2"]);
    document.getElementById('numCita1').disabled = true;
    let cita = clinica.buscarNumeroCita(document.getElementById('comboBox').value);
    let nuevafecha = cita.fechaCita.substring(cita.fechaCita.length - 4, cita.fechaCita.length) + "-" + cita.fechaCita.substring(3, 5) + "-" + cita.fechaCita.substring(0, 2);
    form.numCita.value = cita.numCita;
    form.numColegiado.value = cita.numColegiado;
    form.numChip.value = cita.numChip;
    form.fechaCita.value = nuevafecha;
    form.estado.value = cita.estado;
    form.pruebas.value = cita.pruebas;
}

function hacerActualizacion() {
    if (opcion == "actualizaCliente")
        hacerActualizacionCliente();
    else if (opcion == "actualizaVeterinario")
        hacerActualizacionVeterinario();
    else if (opcion == "actualizaMascota")
        hacerActualizacionMascota();
    else if (opcion == "actualizaCita")
        hacerActualizacionCita();
}

function hacerActualizacionCliente() {
    let DNI = form.DNI.value;
    let numCliente = form.numCliente.value;
    let nombre = form.nombre.value;
    let apellidos = form.apellidos.value;
    let telefono = form.telefono.value;

    let cliente = new Cliente(DNI, numCliente, nombre, apellidos, telefono);
    ocultaCosas(["F-DNI", "F-numCliente", "F-numCita", "F-numColegiado", "F-numChip", "F-nombre", "F-apellidos", "F-telefono", "F-especialidad", "F-nomina", "F-especie", "F-fechaCita", "F-raza", "F-descripcion", "F-sexo", "F-estado", "F-pruebas"]);
    ocultaMenus(["F-aceptar2"]);
    limpiaCampos();
    mensaje(clinica.actualizaCliente(cliente));
}

function hacerActualizacionVeterinario() {
    let DNI = form.DNI.value;
    let numColegiado = form.numColegiado.value;
    let nombre = form.nombre.value;
    let apellidos = form.apellidos.value;
    let telefono = form.telefono.value;
    let especialidad = form.especialidad.value;
    let nomina = form.nomina.value;

    let veterinario = new Veterinario(DNI, numColegiado, nombre, apellidos, telefono, especialidad, nomina);
    ocultaCosas(["F-DNI", "F-numCliente", "F-numCita", "F-numColegiado", "F-numChip", "F-nombre", "F-apellidos", "F-telefono", "F-especialidad", "F-nomina", "F-especie", "F-fechaCita", "F-raza", "F-descripcion", "F-sexo", "F-estado", "F-pruebas"]);
    ocultaMenus(["F-aceptar2"]);
    limpiaCampos();
    mensaje(clinica.actualizaVeterinario(veterinario));
}

function hacerActualizacionMascota() {
    let numCliente = form.numCliente.value;
    let numChip = form.numChip.value;
    let nombre = form.nombre.value;
    let especie = form.especie.value;
    let raza = form.raza.value;
    let descripcion = form.descripcion.value;
    let sexo = form.sexo.value;

    let mascota = new Mascota(numCliente, numChip, nombre, especie, raza, descripcion, sexo);
    ocultaCosas(["F-DNI", "F-numCliente", "F-numCita", "F-numColegiado", "F-numChip", "F-nombre", "F-apellidos", "F-telefono", "F-especialidad", "F-nomina", "F-especie", "F-fechaCita", "F-raza", "F-descripcion", "F-sexo", "F-estado", "F-pruebas"]);
    ocultaMenus(["F-aceptar2"]);
    limpiaCampos();
    mensaje(clinica.actualizaMascota(mascota));
}

function hacerActualizacionCita() {
    let numCita = form.numCita.value;
    let numColegiado = form.numColegiado.value;
    let numChip = form.numChip.value;
    let fechaCita = form.fechaCita.value;
    let estado = form.estado.value;
    let pruebas = form.pruebas.value;

    let cita = new Cita(numCita, numColegiado, numChip, fechaCita, estado, pruebas);
    ocultaCosas(["F-DNI", "F-numCliente", "F-numCita", "F-numColegiado", "F-numChip", "F-nombre", "F-apellidos", "F-telefono", "F-especialidad", "F-nomina", "F-especie", "F-fechaCita", "F-raza", "F-descripcion", "F-sexo", "F-estado", "F-pruebas"]);
    ocultaMenus(["F-aceptar2"]);
    limpiaCampos();
    mensaje(clinica.actualizaCita(cita));
}

function enviar() {
    if (opcion == "altaCliente")
        enviarAltaCliente();
    else if (opcion == "altaVeterinario")
        enviarAltaVeterinario();
    else if (opcion == "altaMascota")
        enviarAltaMascota();
    else if (opcion == "altaCita")
        enviarAltaCita();
}

function buscar() {
    let id = form1.numCliente.value;
    mensaje("");
    if (document.getElementById("radioClientes").checked) {
        document.getElementById("tabla").classList.remove("oculta");
        document.getElementById("tabla").innerHTML = "";
        if (clinica.buscarNumCliente(id))
            document.getElementById("tabla").innerHTML = clinica.buscarClientesExistentes(id);
        else
            mensaje("No existen resultados para los valores introducidos");
    } else if (document.getElementById("radioVeterinarios").checked) {
        document.getElementById("tabla").classList.remove("oculta");
        document.getElementById("tabla").innerHTML = "";
        if (clinica.buscarColegiado(id))
            document.getElementById("tabla").innerHTML = clinica.buscarVeterinariosExistentes(id);
        else
            mensaje("No existen resultados para los valores introducidos");
    } else if (document.getElementById("radioMascotas").checked) {
        document.getElementById("tabla").classList.remove("oculta");
        document.getElementById("tabla").innerHTML = "";
        if (clinica.buscarMascota(id))
            document.getElementById("tabla").innerHTML = clinica.buscarMascotasExistentes(id);
        else
            mensaje("No existen resultados para los valores introducidos");
    } else if (document.getElementById("radioCitas").checked) {
        document.getElementById("tabla").classList.remove("oculta");
        document.getElementById("tabla").innerHTML = "";
        if (clinica.buscarNumCita(id))
            document.getElementById("tabla").innerHTML = clinica.buscarCitasExistentes(id);
        else
            mensaje("No existen resultados para los valores introducidos");
    }
}

function enviarAltaCliente() {
    let DNI = form.DNI.value;
    let numCliente = form.numCliente.value;
    let nombre = form.nombre.value;
    let apellidos = form.apellidos.value;
    let telefono = form.telefono.value;

    limpiaCampos();
    let cliente = new Cliente(DNI, numCliente, nombre, apellidos, telefono);
    mensaje(clinica.altaCliente(cliente));
}

function enviarAltaVeterinario() {
    let DNI = form.DNI.value;
    let numColegiado = form.numColegiado.value;
    let nombre = form.nombre.value;
    let apellidos = form.apellidos.value;
    let telefono = form.telefono.value;
    let especialidad = form.especialidad.value;
    let nomina = form.nomina.value;

    limpiaCampos();
    let veterinario = new Veterinario(DNI, numColegiado, nombre, apellidos, telefono, especialidad, nomina);
    mensaje(clinica.altaVeterinario(veterinario));
}

function enviarAltaMascota() {
    let numCliente = form.numCliente.value;
    let numChip = form.numChip.value;
    let nombre = form.nombre.value;
    let especie = form.especie.value;
    let raza = form.raza.value;
    let descripcion = form.descripcion.value;
    let sexo = form.sexo.value;

    limpiaCampos();
    let mascota = new Mascota(numCliente, numChip, nombre, especie, raza, descripcion, sexo);
    mensaje(clinica.altaMascota(mascota));
}

function enviarAltaCita() {
    let numCita = form.numCita.value;
    let numColegiado = form.numColegiado.value;
    let numChip = form.numChip.value;
    let fechaCita = form.fechaCita.value;
    let estado = form.estado.value;
    let pruebas = form.pruebas.value;

    limpiaCampos();
    let cita = new Cita(numCita, numColegiado, numChip, fechaCita, estado, pruebas);
    mensaje(clinica.altaCita(cita));
}

function tablaClientes() {
    document.getElementById("tabla").classList.remove("oculta");
    document.getElementById("tabla").innerHTML = "";
    document.getElementById("tabla").innerHTML = clinica.listadoClientes();
}

function tablaVeterinarios() {
    document.getElementById("tabla").classList.remove("oculta");
    document.getElementById("tabla").innerHTML = "";
    document.getElementById("tabla").innerHTML = clinica.listadoVeterinarios();
}

function tablaMascotas() {
    document.getElementById("tabla").classList.remove("oculta");
    document.getElementById("tabla").innerHTML = "";
    document.getElementById("tabla").innerHTML = clinica.listadoMascotas();
}

function tablaCitas() {
    document.getElementById("tabla").classList.remove("oculta");
    document.getElementById("tabla").innerHTML = "";
    document.getElementById("tabla").innerHTML = clinica.listadoCitas();
}

function cargarDatos() {
    // var cliente = new Cliente("11111111Z", "1", "Lola", "Mento", 123123123);
    // clinica.altaCliente(cliente);
    // var cliente = new Cliente("22222222Z", "2", "Aitor", "Menta", 321321321);
    // clinica.altaCliente(cliente);
    // var cliente = new Cliente("33333333Z", "3", "Juan", "Palomo", 456456456);
    // clinica.altaCliente(cliente);

    // var veterinario = new Veterinario("44444444Z", "1", "Natalia", "Zarzuela", 123123123, "Oftalmologo", 1000);
    // clinica.altaVeterinario(veterinario);
    // var veterinario = new Veterinario("55555555Z", "2", "Maria", "Barriga", 321321321, "Matrona", 1100);
    // clinica.altaVeterinario(veterinario);
    // var veterinario = new Veterinario("66666666Z", "3", "Francisco", "Rajado", 456456456, "Cirujano", 1200);
    // clinica.altaVeterinario(veterinario);

    // var mascota = new Mascota("1", "1", "Firulais", "Perro", "Pitbull", "Petadisimo", "Macho");
    // clinica.altaMascota(mascota);
    // var mascota = new Mascota("1", "2", "Lara", "Perro", "Chucho", "Blanca con manchas negras", "Hembra");
    // clinica.altaMascota(mascota);
    // var mascota = new Mascota("2", "3", "Rex", "Perro", "Pastor Alemán", "Grande", "Macho");
    // clinica.altaMascota(mascota);

    // var cita = new Cita("1", "1", "1", "23/11/2016", "Realizada", "Radiografia");
    // clinica.altaCita(cita);
    // cita = new Cita("2", "1", "2", "30/11/2016", "Realizada", "TAC");
    // clinica.altaCita(cita);
    // cita = new Cita("3", "2", "3", "24/11/2019", "Pendiente", "Exploración");
    // clinica.altaCita(cita);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            cargarXML(this);
    };
    xhr.open("GET", "BBDD.xml", true);
    xhr.send();
}

function cargarXML(xml) {
    var docXML = xml.responseXML;
    var clientes = docXML.getElementsByTagName("cliente");
    var veterinarios = docXML.getElementsByTagName("veterinario");
    var mascotas = docXML.getElementsByTagName("mascota");
    var citas = docXML.getElementsByTagName("cita");

    for (var i = 0; i < clientes.length; i++) {
        let DNI = clientes[i].getElementsByTagName("DNI")[0].textContent;
        let numCliente = clientes[i].getElementsByTagName("numCliente")[0].textContent;
        let nombre = clientes[i].getElementsByTagName("nombre")[0].textContent;
        let apellidos = clientes[i].getElementsByTagName("apellidos")[0].textContent;
        let telefono = clientes[i].getElementsByTagName("telefono")[0].textContent;

        let cliente = new Cliente(DNI, numCliente, nombre, apellidos, telefono);
        clinica.altaCliente(cliente);
    }

    for (var i = 0; i < veterinarios.length; i++) {
        let DNI = veterinarios[i].getElementsByTagName("DNI")[0].textContent;
        let numColegiado = veterinarios[i].getElementsByTagName("numColegiado")[0].textContent;
        let nombre = veterinarios[i].getElementsByTagName("nombre")[0].textContent;
        let apellidos = veterinarios[i].getElementsByTagName("apellidos")[0].textContent;
        let telefono = veterinarios[i].getElementsByTagName("telefono")[0].textContent;
        let especialidad = veterinarios[i].getElementsByTagName("especialidad")[0].textContent;
        let nomina = veterinarios[i].getElementsByTagName("nomina")[0].textContent;

        let veterinario = new Veterinario(DNI, numColegiado, nombre, apellidos, telefono, especialidad, nomina);
        clinica.altaVeterinario(veterinario);
    }

    for (var i = 0; i < mascotas.length; i++) {
        let numCliente = mascotas[i].getElementsByTagName("numCliente")[0].textContent;
        let numChip = mascotas[i].getElementsByTagName("numChip")[0].textContent;
        let nombre = mascotas[i].getElementsByTagName("nombre")[0].textContent;
        let especie = mascotas[i].getElementsByTagName("especie")[0].textContent;
        let raza = mascotas[i].getElementsByTagName("raza")[0].textContent;
        let descripcion = mascotas[i].getElementsByTagName("descripcion")[0].textContent;
        let sexo = mascotas[i].getElementsByTagName("sexo")[0].textContent;

        let mascota = new Mascota(numCliente, numChip, nombre, especie, raza, descripcion, sexo);
        clinica.altaMascota(mascota);
    }

    for (var i = 0; i < citas.length; i++) {
        let numCita = citas[i].getElementsByTagName("numCita")[0].textContent;
        let numColegiado = citas[i].getElementsByTagName("numColegiado")[0].textContent;
        let numChip = citas[i].getElementsByTagName("numChip")[0].textContent;
        let fechaCita = citas[i].getElementsByTagName("fechaCita")[0].textContent;
        let estado = citas[i].getElementsByTagName("estado")[0].textContent;
        let pruebas = citas[i].getElementsByTagName("pruebas")[0].textContent;

        let cita = new Cita(numCita, numColegiado, numChip, fechaCita, estado, pruebas);
        clinica.altaCita(cita);
    }
}