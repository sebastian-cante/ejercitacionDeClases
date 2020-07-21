alert("Bienvenidos a mi sitio");

let confirmacion = confirm("¿Está seguro que quiere avanzar?");

let header = document.getElementById('header')
let avatar = document.querySelector('div.container.background-img')
let h2 = document.getElementById('header').querySelector('h2')
let h1 = document.querySelector("h1");
let article = document.querySelector("article.hobbies")

if(confirmacion){
    h2.innerHTML = "Qué alegría que quieras con tu visita por este maravilloso sitio."
    
    
    let nombre = prompt("Por favor, ingrese su nombre:");

    h1.innerHTML = h1.innerHTML.replace("usuario", nombre)
    
    let edad = prompt("Ingrese su edad")

    if(edad < 18){
    document.getElementsByClassName("container-general")[0].style.display = "none";
    document.getElementById("accesoDenegado").style.display = "block";
    }

    let hobbies = prompt('Por favor, comentanos tus hobbies y separalos por coma')
    
    
    if(hobbies.includes('programación') || hobbies.includes('programacion') || hobbies.includes('programar')) {
        alert('Que bueno que te guste la programacion')
    }else {
        avatar.style.backgroundImage = "url('img/gatito.jpeg')"
        alert('Que lastima que no te guste la programacion')
    }

    hobbies = hobbies.split(',')
    article.innerHTML += '<ol>'

    for (let i = 0; i < hobbies.length; i++){
        if (i == 3){
            break
        }
        article.innerHTML += `<li>${hobbies[i]}</li>`

    }

    article.innerHTML += '</ol>'


    //if(hobbies !=undefined){
    //    forEach(hobbie in li){li.push(li.innerHTML(hobbies))}
       
    //}

}else {
   h2.innerHTML = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio.";
    
}

//segunda tanda de ejercicios

let colorPreferido = prompt('Ingrese su color favorito')

console.log(colorPreferido);








