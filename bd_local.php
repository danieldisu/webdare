<?php

class BD{
	private static $host = "localhost";
	private static $user = "root";
	private static $pass = "mutilacion43";
	private static $dbname = "webdare";
	private static $pdo;
	
	

	private static function conectar(){
		if(!isset(self::$pdo)){
			$host = self::$host;
			$dbname = self::$dbname;
			try { 
				$pdo = new PDO("mysql:host=$host;dbname=$dbname", self::$user, self::$pass);
				self::$pdo = $pdo;
			} 
			catch(PDOException $e) {  
   				echo "Error al conectar a la base de datos";
			} 
			
		}
		return self::$pdo;		
	}	
	
	public static function insertar($lugar){
		$pdo = self::conectar();
		if(isset($pdo)){
			$st = $pdo->prepare("INSERT INTO lugar (localizacion,descripcion,nombreCiudad,tipo) value (?,?,?,?)");
			$data = array($lugar->localizacion,$lugar->descripcion,$lugar->nombreCiudad,$lugar->tipo);
			$st->execute($data);
			echo "agregado correctamente";
			echo "<a href='/descubre.html'>Descubrir Lugares</a>";
		}
	}

	public static function buscarLugaresEn($nombreCiudad){
		$pdo = self::conectar();
		if(isset($pdo)){
			$STH = $pdo->prepare("SELECT * FROM lugar WHERE nombreCiudad = ?");
			$STH->execute(array($nombreCiudad));
			$STH->setFetchMode(PDO::FETCH_CLASS,'Lugar'); 
			$items = [];
			while($item = $STH->fetch()){
				$itemArray = (array)$item;
				array_push($items,$itemArray);
			}
			return $items;
		}
	}


	
}