(function(){
  //Función que inicia todas las demás funciones
var $botonBuscar=$('.buscar');
var $mapaContenedor = $('#map');

var cargarPagina = function(){
  initMap();
  $("#search-form").submit(filtrar);
  $botonBuscar.click(function(){alert("hola");})
}

var initMap = function(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(mostrarCoordenadas, error);
    }
};
var mostrarCoordenadas = function(cords){
    var latitud= (cords.coords.latitude);
    var longitud=(cords.coords.longitude);

    var mapa = new google.maps.Map($mapaContenedor[0],{
       zoom:18,
        center: {lat: latitud, lng: longitud}
      });
    var marcador = new google.maps.Marker({
      position: {lat: latitud, lng: longitud},
      map:mapa,
      title: "My ubicación",
      draggable: true,
    });
}
var error = function(){
    
    alert("Lo sentimos, por el momento no podemos acceder a tu ubicación, intentalo más tarde.")
}

var restaurantes = [
  {
    "nombre": "Mercado Roma",
    "ubicación": {lat:19.414062,  lng: -99.1664147 }
  },
  {
    "nombre": "Rosseta",
    "ubicación": {lat:19.419869,  lng: -99.1620097 }
  },
  {
    "nombre": "Lalo!",
    "ubicación": {lat:19.4154167,  lng: -99.1646039}
  },
  {
    "nombre": "El parnita",
    "ubicación": {lat:19.4140759,  lng: -99.1648121 }
  },
  {
    "nombre": "Mog Bistro",
    "ubicación": {lat:19.4161948,  lng: -99.1572155 }
  },
  {
    "nombre": "Maximo Bistrot",
    "ubicación": {lat:19.4152165,  lng: -99.164261 }
  }
];

var plantillaRestaurante = '<div class="well  well-lg page-header">' +
        '<div class="card-panel hoverable grey lighten-5 z-depth-1">' +
          '<h4>**nombre**</h4>' +
            '<p>Puntuación:</p>' +
              '<button class="btn btn-primary btn-md buscar">Ver ubicación</button>' +
            '</div>' +
        '</div>';
var filtrar = function (e) {
  e.preventDefault();
  var criterioBusqueda = $("#search").val().toLowerCase();
  console.log(criterioBusqueda);
  var restaurantesFiltrados = restaurantes.filter(function (restaurante) {
    return restaurante.nombre.toLowerCase().indexOf(criterioBusqueda) >= 0;
  });
  mostrarRestaurantes(restaurantesFiltrados);
};

var mostrarRestaurantes = function (restaurantes) {
  var plantillaFinal = "";
  restaurantes.forEach(function (restaurante) {
    plantillaFinal += plantillaRestaurante.replace("**nombre**", restaurante.nombre)
  });
  $("#lugaresComida").html(plantillaFinal);
};

  $(document).ready(cargarPagina);
}) ();