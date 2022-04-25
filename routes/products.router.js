const express = require('express');
const router = express.Router();
const products = [{

  Numero: 1,
  Nombre: "Bullbasaur",
  Ataque: "Espesura",
  Tipo: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",

},
{

  Numero: 6,
  Nombre: "Charizard",
  Ataque: "Mar Llamas",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",

},
{

  Numero: 9,
  Nombre: "Blatoise",
  Ataque: "Latigo",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",

},
{

  Numero: 37,
  Nombre: "Vulpix",
  Ataque: "Rugido",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",

},
{

  Numero: 45,
  Nombre: "Vileplume",
  Ataque: "Clorofila",
  Tipo: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",

},
{

  Numero: 55,
  Nombre: "Golduck",
  Ataque: "Cloud Nine",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",

},
{

  Numero: 59,
  Nombre: "Arcanine",
  Ataque: "Flash Fire",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",

},
{

  Numero: 62,
  Nombre: "Poliwrath",
  Ataque: "Damp",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",

},
{

  Numero: 71,
  Nombre: "Victreebel",
  Ataque: "Gula",
  Tipo: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",

},
{

  Numero: 73,
  Nombre: "Tentacruel",
  Ataque: "Clear Body",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",

},
{

  Numero: 78,
  Nombre: "Rapidash",
  Ataque: "Fuga",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",

},
{

  Numero: 80,
  Nombre: "Slowbro",
  Ataque: "Despiste",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",

},
{

  Numero: 103,
  Nombre: "Exeggutor",
  Ataque: "Cosecha",
  Tipo: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",

},
{

  Numero: 114,
  Nombre: "Tangela",
  Ataque: "Defensa Hoja",
  Tipo: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",

},
{

  Numero: 136,
  Nombre: "Flareon",
  Ataque: "Agallas",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",

}];
const planta = [{
  Numero: 1,
  Nombre: "Bullbasaur",
  Ataque: "Espesura",
  Tipo: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
},
{

  Numero: 45,
  Nombre: "Vileplume",
  Ataque: "Clorofila",
  Tipo: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",

},
{

  Numero: 71,
  Nombre: "Victreebel",
  Ataque: "Gula",
  Tipo: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",

},
{

  Numero: 103,
  Nombre: "Exeggutor",
  Ataque: "Cosecha",
  Tipo: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",

},
{

  Numero: 114,
  Nombre: "Tangela",
  Ataque: "Defensa Hoja",
  Tipo: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",

}]

const fuego = [{

  Numero: 6,
  Nombre: "Charizard",
  Ataque: "Mar Llamas",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",

},
{

  Numero: 37,
  Nombre: "Vulpix",
  Ataque: "Rugido",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",

},
{

  Numero: 59,
  Nombre: "Arcanine",
  Ataque: "Flash Fire",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",

},
{

  Numero: 78,
  Nombre: "Rapidash",
  Ataque: "Fuga",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",

},
{

  Numero: 136,
  Nombre: "Flareon",
  Ataque: "Agallas",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",

}]
const agua = [{
  Numero: 9,
  Nombre: "Blatoise",
  Ataque: "Latigo",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",

},
{

  Numero: 55,
  Nombre: "Golduck",
  Ataque: "Cloud Nine",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",

},
{

  Numero: 62,
  Nombre: "Poliwrath",
  Ataque: "Damp",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",

},
{

  Numero: 73,
  Nombre: "Tentacruel",
  Ataque: "Clear Body",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",

},
{

  Numero: 80,
  Nombre: "Slowbro",
  Ataque: "Despiste",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",

}]

const personaje1 = [{
    Numero: 1,
    Nombre: "Bullbasaur",
    Ataque: "Espesura",
    Tipo: "Planta",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",


}]
const personaje2 = [{
  Numero: 6,
  Nombre: "Charizard",
  Ataque: "Mar Llamas",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",


}]
const personaje3 = [{
  Numero: 9,
  Nombre: "Blatoise",
  Ataque: "Latigo",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",

}]
const personaje4 = [{
  Numero: 37,
  Nombre: "Vulpix",
  Ataque: "Rugido",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",

}]
const personaje5 = [{
  Numero: 45,
  Nombre: "Vileplume",
  Ataque: "Clorofila",
  Tipo: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",

}]
const personaje6 = [{
  Numero: 55,
  Nombre: "Golduck",
  Ataque: "Cloud Nine",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",

}]

const personaje7 = [{
  Numero: 59,
  Nombre: "Arcanine",
  Ataque: "Flash Fire",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",

}]

const personaje8 = [{
  Numero: 62,
  Nombre: "Poliwrath",
  Ataque: "Damp",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",

}]
const personaje9 = [{
  Numero: 71,
  Nombre: "Victreebel",
  Ataque: "Gula",
  Tipo: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",

}]
const personaje10 = [{
  Numero: 73,
  Nombre: "Tentacruel",
  Ataque: "Clear Body",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",

}]

const personaje11 = [{
  Numero: 78,
  Nombre: "Rapidash",
  Ataque: "Fuga",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",

}]

const personaje12 = [{
  Numero: 80,
  Nombre: "Slowbro",
  Ataque: "Despiste",
  Tipo: "Agua",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",

}]

const personaje13 = [{
  Numero: 103,
  Nombre: "Exeggutor",
  Ataque: "Cosecha",
  Tipo: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",

}]

const personaje14 = [{
  Numero: 114,
  Nombre: "Tangela",
  Ataque: "Defensa Hoja",
  Tipo: "Planta",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",

}]

const personaje15 = [{
  Numero: 136,
  Nombre: "Flareon",
  Ataque: "Agallas",
  Tipo: "Fuego",
  image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",

}]

/*numero
nombre
ataque
tipo*/


router.get('/Todos', (req, res) => {



    products.push(
    );

  res.json(products);
});


// Busqueda Por tipo
//
//
//
//
//
//
//
//
//





router.get('/Planta', (req, res) => {

  planta.push(

  )

  res.json(planta);

});

router.get('/Fuego', (req, res) => {

  fuego.push(

  )



  res.json(fuego);



});

router.get('/Agua', (req, res) => {

  agua.push(



  )

  res.json(agua);



});

//Busqueda por nombre
//
//
//
//
//
//
//
//
//




router.get('/Bullbasaur', (req, res) => {

  res.json(
   personaje1

  );
});

router.get('/Charizard', (req, res) => {

  res.json(
   personaje2

  );
});

router.get('/Blatoise', (req, res) => {

  res.json(
   personaje3

  );
});

router.get('/Vulpix', (req, res) => {

  res.json(
   personaje4

  );
});


router.get('/Vileplume', (req, res) => {

  res.json(
   personaje5

  );
});

router.get('/Golduck', (req, res) => {

  res.json(
   personaje6

  );
});


router.get('/Arcanine', (req, res) => {

  res.json(
   personaje7

  );
});

router.get('/Poliwrath', (req, res) => {

  res.json(
   personaje8

  );
});

router.get('/Victreebel', (req, res) => {

  res.json(
   personaje9

  );
});

router.get('/Tentacruel', (req, res) => {

  res.json(
   personaje10

  );
});

router.get('/Rapidash', (req, res) => {

  res.json(
   personaje11

  );
});

router.get('/Slowbro', (req, res) => {

  res.json(
   personaje12

  );
});

router.get('/Exeggutor', (req, res) => {

  res.json(
   personaje13

  );
});


router.get('/Tangela', (req, res) => {

  res.json(
   personaje14

  );
});


router.get('/Flareon', (req, res) => {

  res.json(
   personaje15

  );
});


//
//
//
//
//
//
//
//
//

router.get('/1', (req, res) => {

  res.json(
   personaje1

  );
});

router.get('/6', (req, res) => {

  res.json(
   personaje2

  );
});

router.get('/9', (req, res) => {

  res.json(
   personaje3

  );
});

router.get('/37', (req, res) => {
json(
   personaje4

  );
});


router.get('/45', (req, res) => {

  res.json(
   personaje5

  );
});

router.get('/55', (req, res) => {

  res.json(
   personaje6

  );
});


router.get('/59', (req, res) => {

  res.json(
   personaje7

  );
});

router.get('/62', (req, res) => {

  res.json(
   personaje8

  );
});

router.get('/71', (req, res) => {

  res.json(
   personaje9

  );
});

router.get('/73', (req, res) => {

  res.json(
   personaje10

  );
});

router.get('/78', (req, res) => {

  res.json(
   personaje11

  );
});

router.get('/80', (req, res) => {

  res.json(
   personaje12

  );
});

router.get('/103', (req, res) => {

  res.json(
   personaje13

  );
});


router.get('/114', (req, res) => {

  res.json(
   personaje14

  );
});


router.get('/136', (req, res) => {

  res.json(
   personaje15

  );
});





//Post
/*router.post('/', (req, res) => {
  const body = req.body;
  res.json({
      message: "created",
      data: body
  })

})*/



module.exports = router;
