$(document).ready(function(){
	loadMaps();
	$("#cityDropdown").blur(getDataCiudad);

	$("#botonCompartir").click(function(e){
		e.preventDefault();

		//todo VALIDACIONES

		$("#formularioCompartir").submit();
	})
})

function getDataCiudad(){
	var ciudad = $("#cityDropdown").val();
	var apiKey = 'AIzaSyBxoq1UI6LsQo593BATWiOr7k6dXZL7QHg';
	var url = 'http://maps.googleapis.com/maps/api/geocode/json?address='+ciudad+'?key='+apiKey+"&sensor=false";
	$.getJSON(url, function(data) {
		mostrarMapa(data);
	})
}
var marker;
function mostrarMapa(data){
	if(data.results[0] == undefined){
		alert("No se ha encontrado la ciudad");
	}else{
		var ciudad = data.results[0];
		//console.log(ciudad.formatted_address);
		var loc = ciudad.geometry.location;
		//console.log(localizacion);
		var localizacion = new google.maps.LatLng(loc.lat, loc.lng);
		var mapOptions = {
			disableDoubleClickZoom: true,
			zoom: 8,
			center:localizacion,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

		var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);


		//Evento que agrega un marcador al hacer doble click
		google.maps.event.addListener(map, 'dblclick', function(event) {

			var localizacion = new google.maps.LatLng(event.latLng.Ya, event.latLng.Za);

			// Si existe algun marcador previamente definido, se elimina
			if(marker != undefined){
				marker.setMap(null);
			}
			marker = new google.maps.Marker({
	          position: localizacion,
	          map: map,
	          title: 'Lugar'
	        });
	        $("#localizacion").val(marker.position);
	        console.log(marker.position);
		})

		$("#eligeLocalizacion").show();
	}
}

function loadMaps() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyBxoq1UI6LsQo593BATWiOr7k6dXZL7QHg&sensor=false&callback=loaded";
	document.body.appendChild(script);
}

function loaded () {

}