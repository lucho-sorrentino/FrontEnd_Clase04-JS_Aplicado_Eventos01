// ······················  EJERCICIOS CLASE 04 - JS APLICADO ······················

//      *********** Ejericicio 01 ***********
// Crear un botón que al hacerle click, muestre un saludo por alert.
// OPCION A:
// const saludo = () => alert("Hola amig@!")

// OPCION B:
// const saludo = () => alert("Hola amig@!")
// const seleccion = document.querySelector("#ejerc1")
// seleccion.addEventListener("click", saludo)

//    *********** Ejericicio 02 ***********
// Crear un botón que al hacerle click, muestre un mensaje en el HTML.
// OPCION A:
// const msj = () => document.write("Hola mundo")

// OPCION B:
// const sel = document.querySelector("#sel")
// const exec = () => document.write("Hola mundo")
// sel.addEventListener("click", exec)



//      *********** Ejericicio 03 ***********
// Crear un botón que al hacerle click cambie de color.
// const select = document.querySelector("#sel");
// const cambiarColor = () => select.classList.add("boton")
// select.addEventListener("click", cambiarColor)





//      *********** Ejericicio 04 ***********
// Crear 5 botones numerados del 1 al 5. Al hacer click en uno, mostrar un mensaje que diga “Haz clickeado el botón $número”, indicando al usuario cuál botón apretó.

                    // PENDIENTE!!!
// const num1 = 1;
// const num2 = 2;
// const num3 = 3;
// const num4 = 4;
// const num5 = 5;

// if 
// document.querySelector(X) => innerHTML = `Hiciste click en el boton ${variable_numero}`

            


//      *********** Ejericicio 05 ***********
// Crear un input y un botón. Dentro del input el usuario debe ingresar un color y al hacer click, el input se pone de ese color y se genera un mensaje indicando el color elegido.


// const color = () => {
//     let colorElegido = document.getElementById("selColor").value;
//     if (colorElegido === "rojo") {
//         document.querySelector("#selColor").classList.add("red")
//         document.getElementById("alerta").innerHTML = `<strong> El color elegido es ${colorElegido} </strong>`
//     } else if (colorElegido === "azul") {
//         document.querySelector("#selColor").classList.add("blue")
//         document.getElementById("alerta").innerHTML = `<strong> El color elegido es ${colorElegido} </strong>`
//     } else if (colorElegido === "verde") {
//         document.querySelector("#selColor").classList.add("green")
//         document.getElementById("alerta").innerHTML = `<strong> El color elegido es ${colorElegido} </strong>`
//     } else {
//         document.getElementById("alerta").innerHTML = `<strong> La opción ingresada es incorrecta! </strong>`
//     }     
// }

//                PREGUNTAR!!!
//   Se puede "capturar" el valor del input con "querySelector" en lugar de usar "getElementById"? De la manera que me lo plantee, NO funciona:
//   let colorElegido = document.getElementById("selColor").value;
  
//   SI funciona:
//   let colorElegido = document.getElementById("selColor").value;




//      *********** Ejericicio 06 ***********
// Crear dos input tipo número y un botón. 
// a) Al hacer foco en un input se debe poner azul.
// b) Al escribir, se debe poner violeta.
// c) Cuando se le saca el foco, se pone verde.
// d) Al hacer click en el boton genera un nuevo párrafo en el html que muestra la suma de ambos

// Punto a:
// const caja1 = document.querySelector("#box1")
// const caja2 = document.querySelector("#box2")
// const sumar = document.querySelector("#suma")

// caja1.onfocus = () => caja1.classList.add("blue")
// caja2.onfocus = () => caja2.classList.add("blue")

// Punto b:
// caja1.onkeydown = () => caja1.classList.add("violet")
// caja2.onkeydown = () => caja2.classList.add("violet")

// Punto c:
// caja1.onblur = () => caja1.classList.replace("blue","green")
// caja2.onblur = () => caja2.classList.replace("blue","green")

// Punto d:
// boton.onclick = () => {
//     let selValor1 = parseFloat(caja1.value) 
//     let selValor2 = parseFloat(caja2.value) 
//     sumar.innerHTML = `<strong> La suma de ambos valores es: ${selValor1 + selValor2} </strong>`
// }




//      *********** Ejericicio 07 ***********
// Poner en un select tres (o más) opciones de superheroes. Dependiendo de lo que el usuario elija, se mostrará debajo una imagen que haga referencia al personaje. Cuando se le pase el mouse por encima, la imagen debe mostrar una foto de su identidad secreta, en su lugar. (Por ejemplo, en lugar de verse Superman, se verá a Clark Kent).

// Daredevil= Matthew Michael "Matt" Murdock
// Superman = Clark Kent
// Batman = Bruce Wayne

const sel = document.querySelector("#heroes");
const foto = document.querySelector("#foto");

const showHero = () => {
    if (sel.value === "eleccion") {
        document.querySelector("img").src = "desconocido.jpg"
        foto.innerText = ""
    } else if (sel.value === "superman") {
        document.querySelector("img").src = "superman.jpg"
        foto.innerText = ""
    } else if (sel.value === "batman") {
        document.querySelector("img").src = "batman.jpg"
        foto.innerText = ""        
    } else { 
        document.querySelector("img").src = "daredevil.jpg" 
        foto.innerText = ""       
    }
}
sel.addEventListener("change", showHero)

const identidad = () => {
    if (sel.value === "eleccion") {
        document.querySelector("img").src = "desconocido.jpg"
    } else if (sel.value === "superman") {
        document.querySelector("img").src = "clark.jpg"
        foto.innerHTML = "Pero su verdadera identidad es Clark Kent"
    } else if (sel.value === "batman") {
        document.querySelector("img").src = "bruce.jpg"
        foto.innerHTML = "Pero su verdadera identidad es Bruce Wayne"
    } else { 
        document.querySelector("img").src = "matt.jpg"        
        foto.innerText = "Pero su verdadera identidad es 'Matt' Murdock"
    }
}











//      *********** Ejericicio 08 ***********
// Investigar y elegir un evento que no hayamos visto en clase. Hacer una demo de cómo funciona. 
