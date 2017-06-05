(function(){
  //Función que inicia todas las demás funciones
var cargarPagina = function(){
  initMap();
  $("#search-form").submit(filtrar);
}

var $mapaContenedor = $('#map');
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

var restarantes = [
  {
    "nombre": "Mercado Roma",
    "ubicación": {lat:19.4154167,  lng: -99.1646039 }
  },
  {
    "nombre": "Roseta",
    "ubicación": {lat:19.4154167,  lng: -99.1646039 }
  },
  {
    "nombre": "Lalo!",
    "ubicación": {lat:19.4154167,  lng: -99.1646039 }
  },
  {
    "nombre": "Mercado Roma",
    "ubicación": {lat:19.4154167,  lng: -99.1646039 }
  },
  {
    "nombre": "Mercado Roma",
    "ubicación": {lat:19.4154167,  lng: -99.1646039 }
  },
  {
    "nombre": "Mercado Roma",
    "ubicación": {lat:19.4154167,  lng: -99.1646039 }
  }
];

var plantillaContacto = '<div class="well  well-lg page-header">' +
        '<div class="card-panel hoverable grey lighten-5 z-depth-1">' +
          '<h4>**Nombre**</h4>' +
            '<p>Puntuación:</p>' +
              '<button class="btn btn-primary btn-md ">Ver ubicación</button>' +
            '</div>' +
        '</div>';
  var filtrar = function (e) {
  e.preventDefault();
  alert("hola");
};

  $(document).ready(cargarPagina);
}) ();