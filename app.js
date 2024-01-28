//Todo] Actividad Curso Iniciante en Programación con Javascript.

//* Inicializamos la variable que determinará el número máximo posible para adivinar.
let numero_rango = 27;

//* Inicializamos una variable y guardamos un número aleatorio según la función random.
let numero_secreto = Math.floor(Math.random()*numero_rango) + 1;

//* Incializamos la variable numero_usuario para que se ejecute en el bucle.
let numero_usuario;

//* Inicializamos la variable intentos para realizar un conteo de los intentos.
let intentos = 1;

//* Inicializamos una variable para determinar la cantidad máxima de intentos.
let intentos_maximo = 10;

//* Mientras el número sea diferente, ejecuta el bucle.
while (numero_usuario != numero_secreto) {
    //* Le indicamos al usuario que nos entregue un número.
    numero_usuario = parseInt(prompt(`Ingrese un número del 1 al ${numero_rango} para continuar.\n\nEl usuario tiene permiso para realizar ${intentos_maximo} intentos como máximo.`));

    //* Mostramos por consola el número del usuario.
    console.log(numero_usuario)

    //* Realizamos una comparación para determinar la salida del programa.
    if (numero_usuario == numero_secreto) {
        //* En caso de que la condición se cumpla, haz esto...
        alert(`¡Correcto! El número ingresado "${numero_usuario}" es el correcto.\n\n¡La cantidad de intentos realizados es de "${intentos}" intentos!`);

    } else { //* En caso de que la condición no se cumpla, ejecuta esto...
        //! Condicional anidado.
        if ( numero_usuario > numero_secreto ) {
            alert(`El número ingresado "${numero_usuario}" es mayor al número secreto.`);
        } else {
            alert(`El número ingresado "${numero_usuario}" es menor al número secreto`);
        }
        //! Incrementamos el contador cada vez que el usuario no logre acertar con el número secreto.
        intentos += 1;
        //! alert(`¡Incorrecto! El número ingresado "${numero_usuario}" es incorrecto.`);
        if (intentos > 4) {
            alert(`¡Has llegado al límite máximo de ${intentos_maximo} intentos permitidos!`);
            break;
        }
    }

}  
