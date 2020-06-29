const http = require('http');
const fs = require('fs');

const movies = require("./movies.json")

let moviesAlfabeticamente = movies.sort(function(a, b) {
    if (a.title > b.title){
        return 1
    }

    if (a.title < b.title){
        return -1
    }

        return 0
})


// Servidor
http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
	
	// Route System
	switch (req.url) {
		// Home
		case '/':

            //c (usar map)

           let titulos = moviesAlfabeticamente.map(movie => {
            return movie.title  
            })

            //a
            let titulo = "Bienvenidos a DH Movies, el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn \n\n"

            //b
            let totalMovies = `${movies.length}\n\n`;

            let puntoC = `${titulos.join(`\n\n`)}`
                
            
            //d

            let pieDePagina = `

            Recordá que podés visitar las secciones:

            i. En Cartelera
            ii. Más Votadas
            iii. Sucursales
            iv. Contacto
            v. Preguntas Frecuentes
            
            `;



            res.write(titulo)
            res.write(totalMovies);
            res.write(puntoC)
            res.write(pieDePagina)
            res.end();           

            break;
            








		// En cartelera
		case '/en-cartelera':
			res.end('En cartelera');
			break;
		case '/mas-votadas':
			res.end('Más Votadas');
			break;
		case '/sucursales':
			res.end('Sucursales');
			break;
		case '/contacto':
			res.end('Contacto');
			break;
		case '/preguntas-frecuentes':
			res.end('Preguntas Frecuentes');
			break;
		default:
			res.end('404 not found')
	}
}).listen(3030, 'localhost', () => console.log('Server running in 3030 port'));




















const faqs = [
	{
		faq_title: "¿A partir de qué edad los niños deben pagar entrada?",
		faq_answer: "Los niños pagan entrada a partir de los 3 años.Menores de 3 años no abonan entrada mientras no ocupen una butaca adicional.Menores de 4 años tienen prohibido el ingreso a las salas 4 D y Platinum."
	},
	{
		faq_title: "¿Cuáles son las condiciones de compra de entradas?",
		faq_answer: "La compra de entradas de cine de DH MOVIES: a través de este sitio web y/o máquinas expendedoras de entradas (ATM), implica la aceptación por parte del cliente de todos y cada uno de los siguientes términos y condiciones."
	},
	{
		faq_title: "¿Cuáles son las condiciones de compra de entradas para las salas 4D?",
		faq_answer: "El ingreso a una sala 4D implica la aceptación de las siguientes normas de seguridad: El espectador ingresa bajo su propio riesgo. Cines Multiplex y LUMMA SRL no asumen responsabilidad por cualquier daño o lesión ocasionada por la participación en salas equipadas con 4D."
	},
	{
		faq_title: "Me equivoqué al comprar la entrada ¿Puedo cambiarla?",
		faq_answer: "¡Si, claro! Si te equivocaste en algún paso del proceso de compra online, el día, complejo o en la elección de la película, y necesitas pedir el cambio o la anulación de tus entradas, deberás realizar el reembolso en https: //digitalhouse.dhmovies.com.ar/refund completando los datos de tu compra (email, dni y código de retiro), y si las entradas aún no fueron impresas y se encuentran dentro del plazo de las 2 horas antes del inicio la función, el sistema te informará que las entradas son válidas para realizar el reembolso. Luego deberás volver a comprar para la función deseada."
	},
	{
		faq_title: "¿Cuáles son los medios de pagos disponibles?",
		faq_answer: "Los medios de pago online son tarjeta de débito y crédito.Podes consultar todos los medios de pago online disponibles desde la web de MercadoPago.En boletería podes también pagar en efectivo."
	}
];

const theaters = [
	{
		name: "DH Multiplex - Brisas del Volador",
		address: "Brisas del Volador Shopping – Panamericana Km 50 – Las Magnolias 754 Pilar",
		description: "El complejo Multiplex Palmas del Pilar cuenta con un amplio y cómodo estacionamiento sin cargo, seguridad privada, venta on line, terminales autoservicio y venta en boletería. Multiplex Palmas del Pilar es el complejo más moderno de la empresa.Está dotado de proyectores, pantallas y sonido de última generación.Una propuesta de 9 salas 2 D, 3 D, 3 D Xtremo, 4 D y Sala Premium Platinum diseñadas especialmente para un público exigente y amante del buen cine.",
		total_rooms: 5
	},
	{
		name: "DH Lavalle",
		address: "Lavalle 780 C.A.B.A",
		description: "Cines Multiplex lleva adelante la operación de este complejo que es el único que permanece en la peatonal Lavalle donde supieron funcionar, en las épocas de gloria, más de 28 salas de cine.",
		total_rooms: 3
	},
	{
		name: "DH Multiplex - Canning",
		address: "Formosa 653 Canning, Ezeiza (Shopping Las Toscas)",
		description: "Este complejo de 6 salas se complementa excelentemente bien con los locales comerciales y especialmente gastronómicos del Shopping Las Toscas, dentro del cual se encuentra funcionando, brindando al espectador la posibilidad de disfrutar de una salida completa dentro del mismo ámbito.",
		total_rooms: 6
	},
	{
		name: "DH Arte Multiplex",
		address: "Av. Cabildo 2829 C.A.B.A",
		description: "En Cine Arte Multiplex pueden disfrutarse todas las películas de los Oscars, los mejores ciclos de cine Francés , Ruso, Alemán, entre otros,  las buenas películas que en cartelera de los circuitos tradicionales  a veces no encuentran espacio  tienen su lugar   en  las salas de este complejo.",
		total_rooms: 2
	}
];