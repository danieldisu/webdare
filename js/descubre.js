$(document).ready(function(){
	loadMaps();
	$("#botonBuscar").click(getDataCiudad);
})

var items = [];
var markers = [];
function mostrarMapa(data){
	if(data != undefined){
		if(data.results[0] == undefined){
			$("#cajaMapa").hide();
			alert("No se ha encontrado la ciudad");
		}else{
			var ciudad = data.results[0];
			console.log(ciudad.formatted_address);

			var nombreCiudad = ciudad.formatted_address;
			addTitulo(nombreCiudad);

			var localizacion = ciudad.geometry.location;
			console.log(localizacion);
			localizacion = new google.maps.LatLng(localizacion.lat, localizacion.lng);	
			$("#cajaMapa").show();		
		}

	}else{
		localizacion = new google.maps.LatLng(40.41677540, -3.70379020);
	}


	var mapOptions = {
		zoom: 8,
		center:localizacion,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	agregarMarcadores(map);
}

function agregarMarcadores(map){
	for (var i = items.length - 1; i >= 0; i--) {
		var item = items[i];
		var input = item.localizacion;
		input = input.replace('(','');
		var latlngStr = input.split(",",2);
		console.log(latlngStr);
		var lat = parseFloat(latlngStr[0]);
		var lng = parseFloat(latlngStr[1]);
		agregarMarcador(map,lat,lng,item.descripcion);
	};
}

function agregarMarcador(map,lat,lng,nombre){
	var localizacion = new google.maps.LatLng(lat, lng);
	marker = new google.maps.Marker({
      position: localizacion,
      map: map,
      title: nombre
    });	
}

function addTitulo(nombreCiudad){
	var nombreCiudad = nombreCiudad;
	$("#titulo").html("<h4 id='ciudadSeleccionada'>Mostrando resultados en <span id='nombreCiudad'>"+nombreCiudad+"</span></h4>");

}

function getDataCiudad(){
	var ciudad = $("#cityDropdown").val();
	var apiKey = 'AIzaSyBxoq1UI6LsQo593BATWiOr7k6dXZL7QHg';
	var url = 'http://maps.googleapis.com/maps/api/geocode/json?address='+ciudad+'?key='+apiKey+"&sensor=false";
	var ciudadurl = "/descubre.php?ciudad="+ciudad;
	$.getJSON(ciudadurl,function(data){
		
		items = data;

		$.getJSON(url, function(data) {
			mostrarMapa(data);
		})
	})

}

function loadMaps() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyBxoq1UI6LsQo593BATWiOr7k6dXZL7QHg&sensor=false&callback=mostrarMapa";
	document.body.appendChild(script);
}