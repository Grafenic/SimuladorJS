//funciones
function dato(ingresoDeDato) {
    return prompt(ingresoDeDato)   
}

function alerta(mensaje) {
    return alert(mensaje)
}

function descuentos(cantidad) {
        return cantidad = cantidad*0.83 //se aplica un 17% de descuento al valor
}

//ingreso de datos

let nombre = dato("ingrese su primer nombre");
let apellido = dato("ingrese su apellido");
let edad = parseInt(dato("ingrese su edad"));

console.log(edad);

let usuario = "";
let contrasena = "";

//registro

if (edad >= 18) {
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
            let sueldoBruto = parseInt(dato("A continuacion ingrese su sueldo bruto. \nSolo ingrese numeros enteros:"));
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

