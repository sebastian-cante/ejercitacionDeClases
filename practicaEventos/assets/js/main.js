window.onload = function(){
    //alert("Esta todo bien!")
    let abracadabra = document.querySelector("#abracadabra")
    let nombreDefault = document.querySelector("h1#titular strong")
    let contacto = document.querySelector("a.botonACambiar")
    let parrafoACambiar = document.querySelector(".parrafo-color")
    let parrafoEjercicio8 = document.querySelector(".parrafoEjercicio8")
    let recentWork = document.querySelector("a.recentWork")
    let email = document.querySelector("input[name='email']")
    
    abracadabra.addEventListener("click", function(){
        let nombre = prompt("Por favor, ingrese su nombre")
        nombreDefault.innerHTML = nombre

    })

    //contacto.addEventListener("dblclick", function(){
    //    parrafoACambiar.style.color = "red"
    //})

    function colorAlAzar(){
        let colores = ["red", "green", "yellow", "blue", "purple"]
        let azar = Math.floor(Math.random()*5)

        return colores[azar]

    }


    contacto.addEventListener("dblclick", function(){
        parrafoACambiar.style.color = colorAlAzar()
    })
    
    let sections = document.getElementsByTagName("section")

    Array.from(sections).forEach(section => {
        section.addEventListener("click", function(){
            alert("Clickeaste sobre" + this.querySelector("h3").innerHTML)
            
        })
    })

    recentWork.addEventListener("mouseover", function(){
        parrafoEjercicio8.style.color = colorAlAzar()
    })

    recentWork.addEventListener("mouseout", function(){
        parrafoEjercicio8.style.color = "#888"
    })

    alert("Preparate para el futuro")

    const delay = 5000
    setTimeout(miFuncion, delay)
    function miFuncion(){
        alert("Y el futuro ya llegó!")
    }

    //document.addEventListener("keydown", function(e){
    //    alert("Ey, tocaste el teclado!")
        

    //})

    email.addEventListener("keydown",function(event){
        if(event.which == 32 ){
        alert("Ey, tocaste la barra!")
        }
        event.preventDefault()
        
    })


    

    let estadoSecreto = 0

    window.addEventListener("keyup", function(e){
        switch (e.which){
            case 83 : estadoSecreto++; break;
            case 69 :
                if(estadoSecreto == 1){
                    estadoSecreto = 2;
                } else if (estadoSecreto == 4){
                    estadoSecreto = 5;
                }
                break;    
            case 67 : estadoSecreto++; break;
            case 82 : estadoSecreto++; break;
            case 69 : estadoSecreto++; break;
            case 84 : estadoSecreto++; break;
            case 79 : 
                estadoSecreto = 7;
                alert("SECRETO MAGICO")
                break;
            default: estadoSecreto = 0;
        }


        console.log(estadoSecreto);
    })


}