//funciones
function dato(ingresoDeDato) {
    return prompt(ingresoDeDato)   
}

function consola(mensaje){
    console.log(mensaje);
}

function alerta(mensaje) {
    return alert(mensaje)
}

function descuentos(cantidad) {
    return cantidad = cantidad*0.83 //se aplica un 17% de descuento al valor
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

let nombre = dato("ingrese su primer nombre");
let apellido = dato("ingrese su apellido");
let edad = parseInt(dato("ingrese su edad"));


function mayoriaDeEdad(n) {  //funcion de orden superior
    return (m) => m > n
}

let mayorDeEdad = mayoriaDeEdad(17);


let usuario = "";
let contrasena = "";
//registro

if (mayorDeEdad(edad)) {
    alerta("Bienvenido "+nombre+" "+apellido+", a la plataforma. \nA continuación, deberá recordar los siguientes datos a ingresar");
    do {
        usuario = dato("Cree un nombre de usuario, solo podrá continuar ingresando un dato:");
    } while (usuario == "");
    while (contrasena == "") {
        contrasena = dato("cree una contraseña, de igual forma, solo podrá continuar con una contraseña valida.");    
    }
    
    //inicio de sesion
    
    let repeticiones = 3
    
    alerta("A continuacion, podrá iniciar sesión, tenga en cuenta que debe respetar las mayusculas ó tildes")
    
    for (let i = 1; i <= repeticiones; i++) {
        let inicioSesion = dato("ingresar usuario")
        let pass = dato("ingresar contraseña")
        if ((inicioSesion === usuario) && (pass === contrasena)) {
            alerta("Felicitaciones "+usuario+", iniciaste sesion correctamente");
            repeticiones = 0;
            //Calculadora de sueldo neto
            var profesion = dato("a continuacion ingrese su profesión:")
            var sueldoBruto = parseInt(dato("A continuacion ingrese su sueldo bruto. \nSolo ingrese numeros enteros:"));
            let sueldoNeto = descuentos(sueldoBruto);
            alerta("Su sueldo Neto es de: $"+sueldoNeto);
        } else{
            alerta("usaste "+i+" intentos de 3");   
        }
    }
} else{
    alert("debe tener mayoria de edad para acceder")
}

alert("Gracias por visitar la pagina!")

//Guardado del registro
    //Personas que visitan la pagina
let personaUno = new registroDePersonas(nombre,apellido,edad);
consola("Los datos de la persona que usó nuestro servicio fueron:");
consola("Nombre: "+personaUno.nombre);
consola("Apellido: "+personaUno.apellido);
consola("Edad: "+personaUno.edad);
    //Personas registradas en la pagina
let usuarioUno = new registroDeUsuarios(usuario,contrasena);
consola("El registro que se efectuó en la sesión, fue con los siguientes datos:");
consola("Usuario: "+usuarioUno.usuario);
consola("Contraseña: "+usuarioUno.contrasena);

//Profesión y sueldo, solo de usuarios registrados. La function se encuentra en la zona "Constructor"

let ingresoSegunProfesion = new IngresoSueldos(profesion,sueldoBruto)
consola("Profesión: "+ingresoSegunProfesion.profesion);
consola("Sueldo Bruto: $"+ingresoSegunProfesion.sueldo);

    //Lista con objetos y datos
let datosDeUsuarios = [personaUno,usuarioUno];// se crea una lista
datosDeUsuarios.push(ingresoSegunProfesion) //se agregó un objeto a la lista
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


