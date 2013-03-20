<?php
	require "bd.php";


	$ciudad = $_GET["ciudad"];


	$items = BD::buscarLugaresEn($ciudad);


	$items = json_encode($items);

	echo $items;






