<?php

	require "Lugar.php";
	require "bd.php";

	$ciudad = $_POST['ciudad'];
	$descripcion = $_POST['descripcion'];
	$tipo = $_POST['tipo'];
	$localizacion = $_POST['localizacion'];

	$nuevaLoc = new Lugar($ciudad,$descripcion,$tipo,$localizacion);

	BD::insertar($nuevaLoc);





