(function(){
  //Función que inicia todas las demás funciones
var $botonBuscar=$('.well');
var $mapaContenedor = $('#map');

var cargarPagina = function(){
  verificarGeolocation();
  $("#search-form").submit(filtrar);
  $(document).on("click", ".buscar", cambiarUbicacion)
}

var verificarGeolocation = function(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(mostrarPosiciónActual, error);
    } else{error()};
};
var mostrarPosiciónActual = function(cords){
    var latitud= (cords.coords.latitude);
    var longitud=(cords.coords.longitude);
    var coordenadas = {lat:latitud, lng:longitud};
    mostrarMapa(coordenadas);

}
var mostrarMapa = function(coordenadas){
    var mapa = new google.maps.Map($mapaContenedor[0],{
       zoom:18,
        center: coordenadas
      });
    var marcador = new google.maps.Marker({
      position: coordenadas,
      map:mapa,
    });
};
var error = function(){
    
    alert("Lo sentimos, por el momento no podemos acceder a tu ubicación, intentalo más tarde.")
}

var restaurantes = [
  {
    "nombre": "Mercado Roma",
    "latitud": 19.414062,  
    "longitud": -99.1664147 
  },
  {
    "nombre": "Rosseta",
    "latitud": 19.419869,
    "longitud": -99.1620097
  },
  {
    "nombre": "Lalo!",
    "latitud": 19.4154167,  
    "longitud": -99.1646039
  },
  {
    "nombre": "El parnita",
    "latitud": 19.4140759,  
    "longitud": -99.1648121
  },
  {
    "nombre": "Mog Bistro",
    "latitud": 19.4161948,  
    "longitud": -99.1572155 
  },
  {
    "nombre": "Maximo Bistrot",
    "latitud": 19.4152165,  
    "longitud": -99.164261
  }
];

var plantillaRestaurante = '<div class="well  well-lg col-sm-12">' + 
                              '<div class="col-sm-4">'+ 
                                  '<img src="imgs/restaurante.jpg">' + 
                              '</div>' +
                              '<div class="col-sm-7 col-sm-offset-1">'+
                                  '<h3 class="title">**nombre**</h3>'+
                                  '<p>Puntuación:</p>'+
                                  '<button data-lat="**latitud**" data-lng="**longitud**" class="title-white btn btn-theme btn-md buscar">Ver ubicación</button>'+
                              '</div>'+
                            '</div>'

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
    plantillaFinal += plantillaRestaurante.replace("**nombre**", restaurante.nombre).replace("**latitud**", restaurante.latitud).replace("**longitud**", restaurante.longitud)
  });
  $("#lugaresComida").html(plantillaFinal);
};

var cambiarUbicacion = function(){
  var latitud = $(this).data("lat");
  var longitud =  $(this).data("lng");
  var coordenadas ={
    lat: latitud,
    lng:longitud
  }
  console.log(latitud);
  console.log(coordenadas);
  mostrarMapa(coordenadas);
}

var clear = function(){

}


$(document).ready(cargarPagina);
}) ();