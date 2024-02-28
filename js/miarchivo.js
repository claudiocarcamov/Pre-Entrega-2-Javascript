let continuar = true;
let envio = 0;

while(continuar == true){

// En primer lugar el usuario deberá escoger la opción de dirección de envío, puesto que el costo varía por lugar    
    let direccion = prompt ("Favor seleccionar donde vives:\n 1.- Región Metropolitana\n 2.- Región de Valparaíso o Región de Libertador Bernardo O'Higgins\n 3.- Otras regiones");
    direccion = parseInt (direccion);
    switch(direccion){
        case 1:
            envio = 2000;
            continuar = false;
        break;
        case 2:
            envio = 4000;
            continuar = false;
        break;
        case 3:
            envio = 8000;
            continuar = false;
        break;
        default:
            alert ("Opción incorrecta");
        break;
    }
}

let seguir = true;
let cantidad = 0;
let precio = 0;
let precioTotal = 0;

function calcularPrecioTotal (precio, cantidad){
    precioTotal = precioTotal + (precio * cantidad)
}

let contador = 1;

while(seguir == true){

    let pedido = prompt ("Favor seleccionar figura a comprar:\n 1.- Figura Plástico derretida    Precio: $4.000\n 2.- Homero Simpson    Precio: $6.000\n 3.- Bob Esponja    Precio: $10.000\n 4.- Calamardo    Precio: 8.500\n 5.- Goku    Precio: $15.000\n 6.- Salir");
    pedido = parseInt (pedido);

    switch(pedido){
        case 1:
            precio = 4000;
            cantidad = prompt ("Favor seleccionar cantidad");
            cantidad = parseInt (cantidad);
            calcularPrecioTotal (precio, cantidad);
            alert ("El precio total sin envío es: " + precioTotal);
            contador ++;
            break;
        case 2:
            precio = 6000;
            cantidad = prompt ("Favor seleccionar cantidad");
            cantidad = parseInt (cantidad);
            calcularPrecioTotal (precio, cantidad);
            alert ("El precio total sin envío es: " + precioTotal);
            contador ++;
            break;
        case 3:
            precio = 10000
            cantidad = prompt ("Favor seleccionar cantidad");
            cantidad = parseInt (cantidad);
            calcularPrecioTotal (precio, cantidad);
            alert ("El precio total sin envío es: " + precioTotal);
            contador ++;
            break;
        case 4:
            precio = 8500;
            cantidad = prompt ("Favor seleccionar cantidad");
            cantidad = parseInt (cantidad);
            calcularPrecioTotal (precio, cantidad);
            alert ("El precio total sin envío es: " + precioTotal);
            contador ++;
            break;
        case 5:
            precio = 15000
            cantidad = prompt ("Favor seleccionar cantidad");
            cantidad = parseInt (cantidad);
            calcularPrecioTotal (precio, cantidad);
            alert ("El precio total sin envío es: " + precioTotal);
            contador ++;
            break;
        case 6:
            // Si usuario escoge opción "Salir" pero no ha escogido producto antes, el costo de envío será costo 0, si no se cobraría solo el costo de envío pero sin el producto
            if (contador == 1){
                envio = 0;
            }
            alert ("¡Nos vemos pronto!");
            // Si el usuario escoge opción "Salir" no debe mostrarse menú de productos nuevamente
            seguir = false;
            break;
        default:
            alert ("Opción no válida");
            break;
    }
}

let precioTotalConEnvio = precioTotal + envio;

alert ("Tu pedido tendrá el valor total de" + " " + precioTotalConEnvio)