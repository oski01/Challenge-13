// let numero = Number(prompt('Ingrese un numero'));

// if (!isNaN(numero)) {
//     let resto = numero%2;
//     if (resto==0) {
//         console.log('El numero es PAR !!!');
//     } else {
//         console.log('El numero es IMPAR !!!');   
//     }
// } else {
//     console.log('No ingresaste un numero !!!');
// }

let numero;
numero = prompt("Ingrese un numero")
if (numero %2 == 0){
    console.log("El numero " + numero + " es Par");
}else{
    console.log("el numero " + numero + " es Impar")
}