<?php

class verificacionEmail{

	public function emailVerify($correo){

		$caracteres = array("@", ".");
	
		$validacion = strpos($correo, $caracteres[0]);

		$validacion2 = strpos($correo, $caracteres[1]);

		if($validacion == false || $validacion2 == false){

			echo "<p>El correo que has introducido es <b>'" . $correo . "'</b> y no es un correo valido, intentelo de nuevo...</p>" . "<br>" . "<div class='col-md-6' align'center'><a href='../../index.html' class='btn btn-default' title='Haz click aqui para volver al formulario'>Volver</a></div>";

			die();
		}
	}	
}


class conectividadTablaPersonas{

	public function insertTablaPersonas($nombre, $apellido, $correo,

	$comentario){

		require("datos_conexion.php");

		$sql = mysqli_connect($db_host, $db_user, $db_password);

		if(mysqli_connect_errno()){

			echo "Conexion Fallida";

			exit();

		}else{

			mysqli_select_db($sql, "$db_name") or die("No se encuentra la base de datos seleccionada");

			$latinoCHar = $sql->query("set names 'utf8'");

			mysqli_query($sql, "INSERT INTO personas(nombre, apellido, correo, comentario) VALUES ('$nombre', '$apellido', '$correo', '$comentario')");

			mysqli_close($sql);


			echo "<p>Los siguientes datos han sido registrados " . $nombre . " en nombre " . $apellido . " en apellido " . $correo . " en correo</p>" . "<br>" ."<h2 align='center'>Los datos han sido agregados con exito!!</h2>" . "<br>" . "<div class='col-md-6' align'center'><a href='../../index.html'>Volver</a></div>";

		}
		
	}


	public function consultaDatosTablaPersonas($dato){

		require("datos_conexion.php"); 

		//En el archivo de datos se encuentran las variables de conexion a la base de datos.

		$conn = mysqli_connect($db_host, $db_user, $db_password);

		if(mysqli_connect_errno()){

			echo "Hubo un error al conectar con la base de datos, intentelo de nuevo";

				exit();

		}else{

			mysqli_select_db($conn, $db_name) or die("Base de datos no localizada");

			mysqli_set_charset($conn, $db_charset);

			$sql = "SELECT nombre, apellido, correo FROM personas where id_persona = ?";

			$result = mysqli_prepare($conn, $sql);

			$add = mysqli_stmt_bind_param($result, "i", $dato);

			//mysqli_stmt_bind_param -> Agrega variables a una sentencia preparada como parámetros

			$add = mysqli_stmt_execute($result);

			if($add == false){

				echo "Hubo un error al ejecutar la consulta";

				exit();

			}else{

				$add = mysqli_stmt_bind_result($result, $person, $lastname, $email);

				echo "<div align='center'><p><b>Resultados encontrados: </p></b></div>" . "<br>";

				while(mysqli_stmt_fetch($result)){

					for($i = 0; $i < count($result); $i++){

					echo "<div align='center'> " . $i . ": " . $person . " " . $lastname . " " . $email . "</div>" . "<br>";
					}
				}

				mysqli_stmt_close($result);
			
			}
		}
	}

}


class registroUsuario{

	public function verificarPassword($password, $password2){
		
		require("datos_conexion.php");
		
		if($password != $password2){

			echo "<b>El campo 'Verificar Contraseña' debe coincidir con la anterior, por favor intentelo de nuevo..!</b>";

			die();

		}

	}

public function verificarExistenciaCorreo($correo){

	require("datos_conexion.php");	

	$conn  = mysqli_connect($db_host, $db_user, $db_password, $db_name);

		if(mysqli_connect_errno()){

			echo "Error al conectar a la base de datos.";

			exit();

		}else{

	$query = "SELECT * FROM registro_usuario WHERE correo = '%$correo%'";

	$resultado = mysqli_query($conn, $query);


		if(mysqli_num_rows($resultado) > 0){

			echo "El correo suministrado ya se encuentra registrado en nuestro sistema, por favor intentelo nuevamente con una cuenta de correo diferente";

				exit();
		}else{

			print_r($correo);

		}	
	}
}
	

/*	public function verificarExistenciaUsuario($usuario){

		require("datos_conexion.php");	

			$conexionMysql = new pdo("mysql:host=$db_host; dbname=$db_name", "$db_user", "$db_password");

			$query="SELECT * FROM registro_usuario WHERE usuario=" . $usuario;


			$resultado = $conexionMysql->prepare($query);
	
			$resultado->execute();

				if($resultado == 1){

					echo "El Usuario: <b>" .$usuario. "</b> ya está registrado, por favor intentelo de nuevo.";

						die();

				}

	}*/
/*
	public function registrarUser($nombre, $apellido, $correo, $usuario, $password, $password2){

			require("datos_conexion.php");

		$sql = mysqli_connect($db_host, $db_user, $db_password);

		if(mysqli_connect_errno()){

			echo "Conexion Fallida";

			exit();

		}else{

			mysqli_select_db($sql, "$db_name") or die("No se encuentra la base de datos seleccionada");

			$latinoChar = $sql->query("set names 'utf8'");

			mysqli_query($sql, "INSERT INTO registro_usuario(nombre, apellido, correo, usuario, password, password2) VALUES ('$nombre', '$apellido', '$correo', '$usuario', '$password', '$password2')");

			mysqli_close($sql);

			echo "El usuario se ha registrado con exito..!!";

		}

	}
*/

	public function registroUserEncripted($nombre, $apellido, $correo, $usuario, $password, $password2){

			require("datos_conexion.php");

			$encriptado = password_hash($password, PASSWORD_BCRYPT);

			$encriptado2 = password_hash($password2, PASSWORD_BCRYPT);

		
		try{

				$conexionMysql = new pdo("mysql:host=$db_host; dbname=$db_name", "$db_user", "$db_password");

//				$conexionMysql->setattribute(pdo::ATTR_ERRMODE, pdo::ERRMODE_EXCEPTION);

				$conexionMysql->exec("set characater set utf8");

				$query="INSERT INTO registro_usuario(nombre, apellido, correo, usuario, password, password2) VALUES (:nom, :ape, :cor, :usu, :pas, :pas2)";

				$resultado = $conexionMysql->prepare($query);

				$resultado->execute(array(":nom" => $nombre, ":ape" => $apellido, ":cor" => $correo, ":usu" => $usuario, ":pas" => $encriptado, ":pas2" => $encriptado2));

				echo "Los datos han sido insertados con exito!";

				$resultado->closeCursor();

		}/*catch(exception $e){

				die('error: ' . $e->getMessage());

			}*/finally{

				$conexionMysql = null;

			}

		}

}


class inicioSesion{

	public function iniciarSesion($user, $password){

		require("datos_conexion.php");

		try {

			$inicio = new pdo("mysql:host=$db_host; $db_user", "$db_name", "$db_password" );

			$inicio = setAttribute(pdo::attr_errmode, pdo::errmode_exception);

			$query = "SELECT * FROM registro_usuario WHERE usuario = :user AND password = :pass";

			$resultado = $inicio->prepare($query);

			$user = htmlentities(addslashes($_POST["usuario"]));

			$password = htmlentities(addslashes($_POST["password"]));

			$result->bindvalue(":user", $user);

			$result->bindvalue(":pass", $password);

			$result->execute();

			$registro = $result->rowcount();

			if($registro != 0){

				session_start();

				$_SESSION["user"] = $_POST["usuario"];
 				
 				header("location:index_contenido.php");

 			}else{

 				header("location:index_inicio_sesion.php");

 			}

		}catch(exception $e){

			die("Error: " . $e->getmessage());

		}


	}



}