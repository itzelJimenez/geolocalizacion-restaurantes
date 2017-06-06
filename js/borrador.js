$(documento).ready(cargarPagina);

function cargarPagina(){
	obtenerUbicacionActual();
	$("#ciudad").click(cambiarUbicacion);
}

function obtenerUbicacionActual(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(mostrarPosicionActual);
	}else{
		"Error"
	}
}

function mostrarPosicionActual(position){
	var latitud = position.coords.latitude;
	var longitud = position.coords.longitude;
	var coordenadas = {lat:latitud, lng:longitud};
	mostrarMapa(coordenadas);
}

function mostrarMapa(coordenadas){

	var map=new google.maps.Map(document.getElementById('map'), {
		zoom:4,
		center: coordenadas
	});
	var marker = new google.maps.Marker({
		position:coordenadas,
		map: map
	})
}

function cambiarUbicacion(){
	var latitud = $(this).data("latitud");
	var longituf =  $(this).data("longitud");
	var coordenadas {
		lat: latitud,
		lng:longitud
	}
	mostrarMapa(coordenadas);
}

//Todos los elementos tienen una clase ciudad
//.ciudad{ cursor: pointer};

//Atributos data deben ser escritos como string
//data-lat: 
//data-lng: