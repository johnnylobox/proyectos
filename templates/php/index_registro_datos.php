
<!doctype html>
	<html lan="es">

	<head>
		<TITLE>Hostal Premiun Santiago-Chile</TITLE>
		<META CHARSET="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
<!--		<link href="../css/bootstrap.css" rel="stylesheet">
		<link href="../css/bootstrap-theme.css" rel="stylesheet">		-->
<!--		<link href="../../css/estilos.css" rel="stylesheet">
		<link href="../../css/estilosPersonales.css" rel="stylesheet">	-->
		<link href="../../css/superhero.css" rel="stylesheet">
		<script src="../../js/jquery.js"></script>
		<script src="../../js/funciones.js"></script>
		<script src="../../js/calculadora.js"></script>
		<script src="../../js/calculadora2.js"></script>
		<script src="../../js/angular.js"></script>
<!--		<script src="js/funcionesAjax.js"></script>	-->

	</head>

<body>

<a name="inicio"></A>

<!-- aqui comienza el HEADER -->
<header class="header">
	
	<div class="container-fluid">

		<script> //beginingOfAll(); </script>
	</div>

<!-- nav bar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="../../index.html">Inicio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Registrate <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Información General</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Redes Sociales</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Escribe aqui tu busquedad...">
      <button class="btn btn-secondary my-2 my-sm-0" type="submit"><b>Busquedad</b></button>
    </form>
  </div>
</nav>
<!-- close nav bar -->
</header>

<body>
	<main>
<?php
		
//	require("datos_conexion.php");
	require("clase_de_clases.php");
	
	$nombre = $_POST["nombre"];
	$apellido = $_POST["apellido"];
	$correo = $_POST["correo"];
	$comentario = $_POST["comentario"];



	$validacion = new verificacionEmail();

		$validacion->emailVerify($correo);

	$ingresoDatos = new conectividadTablaPersonas();

		$ingresoDatos->insertTablaPersonas($nombre, $apellido, $correo, $comentario);

?>

</main>

<footer class="footer">
		
	<div class="col-md-12" align="center">
		
		<p class="hiro2">Johannes Vargas<BR/>Caracas-Venezuela</p>

		<!--	<p>Hoy es: <br> <script> tiempo(); </script></p><br> 		-->
	</div>	

</footer>	

	<script src="js/bootstrap.js"></script>
	<script src="js/npm.js"></script> 
	

</body>
</HTML>
