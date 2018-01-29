<?php

	require ("datos_conexion.php");

	class Conectividad extends datosconexion{

		protected $sql;

		public function __construct($host, $database, $user, $password){
		//	parent::__construct();

			$this->db_host = $host;
			$this->db_name = $database;
			$this->db_user = $user;
			$this->db_password = $password;
			$this->db_charset = $charset;

			$this->sql = mysqli_connect($host, $user, $password);

		if(mysqli_connect_errno()){

				echo "Conexion Fallida";

				exit();

		}else{

			mysqli_select_db($this->sql, "$database") or die("No se encuentra la base de datos seleccionada");

			mysqli_set_charset($this->sql, "$charset");
			
			}
		}
		
		public function insertarDatosPersonasTable($nombre, $apellido, $correo, $comentario){


			$query = "INSERT INTO personas(nombre, apellido, correo, comentario) VALUES ('$nombre', '$apellido', '$correo', '$comentario')";
			
	//		$resultado =  mysqli_query($sql, $query);
			$resultado =  mysqli_query($this->sql, $query);

				mysqli_close($sql);

				echo "Los datos han sido agregados con exito!!";	
		
		}
	}
	