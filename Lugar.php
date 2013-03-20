<?php

class Lugar{
	
	public $idLugar;
	public $tipo;
	public $localizacion;
	public $descripcion;
	public $nombreCiudad;

	public function __construct($ciudad,$descripcion,$tipo,$localizacion){
		$this->nombreCiudad = $ciudad;
		$this->descripcion = $descripcion;
		$this->tipo = $tipo;
		$this->localizacion = $localizacion;
	}


}