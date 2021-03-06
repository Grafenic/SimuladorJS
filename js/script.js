//funciones
function dato(ingresoDeDato) {
    return prompt(ingresoDeDato)   
}

function consola(mensaje){
    console.log(mensaje);
}


let login = document.getElementById("login");  

function alerta(mensaje) {
    return alert(mensaje)
}

function descuentos(cantidad) {
    return cantidad = cantidad*0.83 //se aplica un 17% de descuento al valor
}

function noReloadForm(e) {  //Evitar recarga al enviar formulario
    e.preventDefault();
    console.log("Datos Enviados");
}


//constructor

function registroDePersonas(nombre,apellido,edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

function registroDeUsuarios(user,pass) {
    this.usuario = user;
    this.contrasena = pass;
}

function IngresoSueldos(profesion,sueldo) {
    this.sueldo = sueldo
    this.profesion = profesion
}

function sueldoProfesionUsuario(user,prof,sueldo) {
    this.usuario = user
    this.profesion = prof
    this.sueldo = sueldo
}

//ingreso de datos

function guardarVariables(){
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let edad = document.querySelector("#edad").value;
    let campoVacioNombre = document.getElementById("campoVacioNombre")
    let campoVacioApellido = document.getElementById("campoVacioApellido")
    let campoVacioEdad = document.getElementById("campoVacioEdad")
    if (nombre=="") {
        campoVacioNombre.innerHTML = "Este campo es requerido."
    } else {
        if (apellido=="") {
            campoVacioApellido.innerHTML = "Este campo es requerido."
        }else{
            if (edad=="") {
                campoVacioEdad.innerHTML = "Este campo es requerido."
            }
        }
    consola(nombre+" "+apellido+" "+edad)
    localStorage.setItem("identificacionNombre", nombre)
    localStorage.setItem("identificacionApellido", apellido)
    localStorage.setItem("identificacionEdad", edad)
    }
}

let datosPersonales = document.getElementById("formularioDatosPersonales") //llamada de form
datosPersonales.addEventListener("submit", noReloadForm) //no recargar con el submit

let nombre = localStorage.getItem("identificacionNombre")
let apellido = localStorage.getItem("identificacionApellido")
let edad = parseInt(localStorage.getItem("identificacionEdad"))


function mayoriaDeEdad(n) {  //funcion de orden superior
    return (m) => m > n
}

let mayorDeEdad = mayoriaDeEdad(17);




let usuario = "";
let contrasena = "";
//registro

if (mayorDeEdad(edad)) {
    login.innerHTML = "Bienvenido "+nombre+" "+apellido+", a la plataforma. \nA continuaci??n, deber?? recordar los siguientes datos a ingresar";
    do {
        usuario = dato("Cree un nombre de usuario, solo podr?? continuar ingresando un dato:");
    } while (usuario == "");
    while (contrasena == "") {
        contrasena = dato("cree una contrase??a, de igual forma, solo podr?? continuar con una contrase??a valida.");    
    }
    
    //inicio de sesion
    
    let repeticiones = 3
    
    login.innerHTML = "A continuacion, podr?? iniciar sesi??n, tenga en cuenta que debe respetar las mayusculas ?? tildes";
    
    for (let i = 1; i <= repeticiones; i++) {
        let inicioSesion = dato("ingresar usuario")
        let pass = dato("ingresar contrase??a")
        if ((inicioSesion === usuario) && (pass === contrasena)) {
            login.innerHTML = "Felicitaciones "+usuario+", iniciaste sesion correctamente";
            repeticiones = 0;
            //Calculadora de sueldo neto
            var profesion = dato("a continuacion ingrese su profesi??n:")
            var sueldoBruto = parseInt(dato("A continuacion ingrese su sueldo bruto. \nSolo ingrese numeros enteros:"));
            let sueldoNeto = descuentos(sueldoBruto);
            login.innerHTML = "Su sueldo Neto es de: $"+sueldoNeto;
        } else{
            login.innerHTML = "usaste "+i+" intentos de 3";   
        }
    }
} else{
    login.innerHTML = "debe tener mayoria de edad para acceder";
}

//Guardado del registro
    //Personas que visitan la pagina
let personaUno = new registroDePersonas(nombre,apellido,edad);
consola("Los datos de la persona que us?? nuestro servicio fueron:");
consola("Nombre: "+personaUno.nombre);
consola("Apellido: "+personaUno.apellido);
consola("Edad: "+personaUno.edad);
    //Personas registradas en la pagina
let usuarioUno = new registroDeUsuarios(usuario,contrasena);
consola("El registro que se efectu?? en la sesi??n, fue con los siguientes datos:");
consola("Usuario: "+usuarioUno.usuario);
consola("Contrase??a: "+usuarioUno.contrasena);

//Profesi??n y sueldo, solo de usuarios registrados. La function se encuentra en la zona "Constructor"

let ingresoSegunProfesion = new IngresoSueldos(profesion,sueldoBruto)
consola("Profesi??n: "+ingresoSegunProfesion.profesion);
consola("Sueldo Bruto: $"+ingresoSegunProfesion.sueldo);

    //Lista con objetos y datos
let datosDeUsuarios = [personaUno,usuarioUno];// se crea una lista
datosDeUsuarios.push(ingresoSegunProfesion) //se agreg?? un objeto a la lista
consola("La lista total se conforma por "+datosDeUsuarios.length+" items que contienen los datos de Usuario anteriormente mencionados")

//Lista de PROFESION Y SUELDO BRUTO

let profesionSueldoPorUsuario = new sueldoProfesionUsuario(usuario,profesion,sueldoBruto)
    //Lista de usuarios con su profesion y sueldo
let profesionSueldoLista = [profesionSueldoPorUsuario];
    //Se itera la lista de objetos
profesionSueldoLista.forEach((objects) =>{
    consola(objects.usuario);
    consola(objects.profesion);
    consola(objects.sueldo);
});

let despedida = document.getElementById("despedida");
despedida.innerText = "Gracias por visitar la pagina!"