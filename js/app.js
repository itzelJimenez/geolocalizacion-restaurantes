(function(){
  //Función que inicia todas las demás funciones
var cargarPagina = function(){
  initMap();
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

var restarantes =[
 
];

  $(document).ready(cargarPagina);
}) ();