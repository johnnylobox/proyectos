	
function tiempo(){

	var tiempo = new Date();
			
	document.write(tiempo.toDateString()); //toDateString simplifica la fecha.!

}

	function textoParpadeanteEfectos(){

			window.setInterval(BlinkIt, 500);

				var color = "white";

				var color2 = "cyan";

				var color3 = "red";

				var color4 = "#CEF6CE";
			
		
		function BlinkIt (){
			
			var blink = document.getElementById ("txt2");

			var blink2 = document.getElementById("txt");

			var blink3 = document.getElementById("txt3");

			var blink4 = document.getElementById("word");
			
			color = (color == "#BF00FF")? "white" : "#BF00FF";
			
			color2 = (color2 == "white")? "cyan" : "white";

			color3 = (color3 == "#1F66FF")? "red" : "#1F66FF";

			color4 = (color4 == "#00FF40")? "#CEF6CE" : "#00FF40";

			blink.style.color = color;
			
			blink.style.fontSize='16px';
				
			blink2.style.color = color2;

			blink2.style.fontSize='20px';

			blink3.style.color = color3;

			blink4.style.color = color4;

		}

/*			var bugsito=document.getElementById("bug");
			
				bugsito.style.width="200px";	*/

/*			var texto = document.getElementById("texto");
			
				texto.style.fontColor="black";		*/

		//	$(function(){ $("body").hide().fadeIn(2000); });

	}

function beginingOfAll(){

/*	var lugares = ["En la casa", "En el Trabajo", "Con mi novia Hironeay", "En la calle"]; 
	document.write(lugares[0]);*/

	//Codigo JavaScript		
		
	document.write("<p style='text-align:right;'><b>Venezuela <script> tiempo(); </script></b></p>");
	
	var nombre = prompt("Bienvenido introduce tu nombre: ");
	
	var pregunta;
	
		if(nombre == "" || nombre == null){

			alert("No introduciste ningún nombre");

			document.write("<div='container'><h3 id='txt'>");
		
			document.write("Bienvenido!!!");
		
			document.write("</h3></div>");
		
		}

/*		if(nombre == null){

			alert("No introduciste ningún nombre");

			document.write("<div='container'><h3 id='txt'>");
		
			document.write("Bienvenido!!!");
		
			document.write("</h3></div>");
		
		}*/else if(nombre != ""){
 		
 			pregunta = prompt("Hay alguna persona a tu lado??");
		
				if(pregunta == "si" || pregunta == "Si" || pregunta == "SI" || pregunta == "sI"){
				
					var nombre2 = prompt("Introduce su nombre por favor");
				
					alert("Bienvenidos " + nombre + " y " + nombre2);
				
					document.write("<div='container'><h2 id='txt'>");
				
					document.write("Has iniciado sesión " +nombre+ ", Saludos a tu acompañante " +nombre2); 	
				
					document.write("</h2></div>");

				}else if(pregunta == "no" || pregunta == "No" || pregunta == "NO"){
						
						alert("Bienvenido " + nombre);
				
						document.write("<div='container'><h2 id='txt'>");
				
						document.write("Iniciaste sesión " + nombre);
				
						document.write("</h2></div>");
					
				}else{
				
						alert("¡No es valido!");
				
						alert("Bienvenido " + nombre);
				
						document.write("<div='container'><h2 id='txt'>");
				
						document.write("Bienvenido " + nombre);
				
						document.write("</h2></div>");
				}
			}	
		
			if(nombre == "" || nombre == null/*&& nombre2 == null*/){
				
				document.write("<h1 class='hiro' align='center' id='txt2'>");
				
				document.write("¡Dios te Bendice!");
				
				document.write("</h1>");

			}else if(nombre != "" && nombre2 == null){
				
				document.write("<h1 class='hiro' align='center' id='txt2'>");
				
				document.write("¡Dios te ha bendecido " +nombre);
				
				document.write("</h1>");
			
			}else if(nombre != "" && nombre2 != ""){
				
				document.write("<h1 class='hiro' align='center' id='txt2'>");
				
				document.write("¡Dios te Bendice " +nombre+ " y a ti " +nombre2+"!");
				
				document.write("</h1>");

			}else if(nombre != "" && nombre2 == "" || nombre != null && nombre2 == null){
				
				document.write("<h1 class='hiro' align='center' id='txt2'>");
				
				document.write("Dios te Bendice " +nombre);
				
				document.write("</h1>");
					
			}

		//Otra Funcion:

				$(function(){ $("body").hide().fadeIn(2000); });
		}

//#####################################################################################################

	
		function hideElementos(){

			$(document).ready(function()	{

//				$("#pictures img").hide();

				$("#redesSociales a").hide();

				$("#pictures3 img").hide();

//				$("#pictures img").hide().fadeIn(3000);

			});	

	/*		var imagenes=document.querySelectorAll("#pictures img");

				for(var i = 0; i < pictures.length; i++){

					pictures[i].style.visibility="hidden";

				}*/
		}


/*#################################################################################################*/


		function Prueba(){

			$(document).ready(function(){

//				$("#pictures2").width(500).height(500).text(" Juan Vargas - CTSI Desarrollo ").hide().fadeIn(10000);

				$("#pictures2").width(500).height(500).html("<h3 align='center' class='letra2'> Juan Vargas - CTSI Desarrollo </h3>").hide().fadeIn(3000);

			});

		} 


/*#################################################################################################*/


		function Formulario(){

			$(document).ready(function(){

				$("#formulario").prepend("<p><b class='nota'>Sistema de prueba</b></p>");

				$("#formulario").append("<p><b class='nota'>Bienvenido al sistema</b></p>");

			});



		}


/*#################################################################################################*/


		function Validar(){

			var n_usuario = document.getElementById("usuario").value;

			var n_nombre = document.getElementById("nombre").value;

			var n_comentario = document.getElementById("comentario").value;

			if(n_usuario == ""){

//			alert("Haz dejado un campo vacio");

				$("#usuario").after("Rellena este campo");

			}

			if(n_nombre == ""){

//			alert("Haz dejado un campo vacio");

				$("#nombre").after("Rellena este campo");

			}

			if(n_comentario == ""){

//			alert("Haz dejado un campo vacio");

				$("#comentario").after("Añade tu comentario");

			}

		}




/*################### Función Banner ############################################################*/		

function Banner(){

			 //ready es una función

	$(document).ready(function(){

	$("#body").after("<div class='container' id='banner'><p id='word'>Welcome!!!</p><br><br><br> <div align='center'><button class='btn btn-danger' id='cerrar'>Cerrar</button></div></div>");

	/*	var x = document.getElementById("cerrar");

		x.addEventListener("click", cerrar_banner, false);

		});*/

	document.getElementById("cerrar").addEventListener("click", cerrar_banner, false); 

//	document.getElementById("imagen1").addEventListener("click", compra, false);  ### tipo 1 ###

	var imagenes = document.querySelectorAll("#pictures img");

	for(var i = 0; i < imagenes.length; i++){

	imagenes[i].addEventListener("click", compra, false); 

	}

	});


//###################################### Pertenece a Banner #############################################


	function cerrar_banner(){

	$("#banner").remove();

	}


//############################ Pertenece a Banner #############################################################


	function compra(arg){

		if(arg.target == imagen1){

		$("#imagen1").replaceWith("<h3 id='imagen1'>Seleccionado</h3>");

		}else if(arg.target == imagen2){

		$("#imagen2").replaceWith("<h3 id='imagen2'>Seleccionado</h3>");

		}else if(arg.target == imagen3){

		$("#imagen3").replaceWith("<h3 id='imagen3'>Seleccionado</h3>");

		}

	}

}


function resaltadores(){

	$(document).ready(function(){


	document.getElementById("buscadores").addEventListener("click", sombra_1, false);

	document.getElementById("social").addEventListener("click", sombra_2, false);
	
	});

	function sombra_1(){

		$(".social").removeClass("fondo"); //remueve el sombreado de la clase anterior remarcada

		$(".buscadores").addClass("fondo");

	//	$(".buscadores").toggleClass("fondo");

	}

	function sombra_2(){

		$(".buscadores").removeClass("fondo"); //remueve el sombreado de la clase anterior remarcada

		$(".social").addClass("fondo");	

//		$(".social").toggleClass("fondo");

	}

 }

function resaltadores2(){

	$(document).ready(function(){

	document.getElementById("buscadores2").addEventListener("click", sombra1, false);
	
	document.getElementById("social2").addEventListener("click", sombra2, false);
	
	});

		function sombra1(){

			$(".buscadores2").toggleClass("fondo");
		
		}

		function sombra2(){

			$(".social2").toggleClass("fondo");

		}
 }

 //#########################################################################################################################3

 function Fuentes(){

 	$(document).ready(function(){

 		var botones = document.querySelectorAll("button");

 		for(var i = 0; botones.length; i++){

 			botones[i].addEventListener("click", aumento, false);

 			botones[i].addEventListener("click", disminuye, false);

 			botones[i].addEventListener("click", Modolectura, false);

 			botones[i].addEventListener("click", ModoNormal, false);

 		} 

/* 		document.getElementById("aumenta").addEventListener("click", aumento, false);

 		document.getElementById("aumenta2").addEventListener("click", aumento, false);
 		
 		document.getElementById("disminuir").addEventListener("click", disminuye, false);
 		
 		document.getElementById("disminuir2").addEventListener("click", disminuye, false);		*/


 	});

//----------------------------------------------

 	function aumento(e){

 		var dinamico;

 		if(e.target == aumenta){

 			dinamico = "#noticia";

 		}else if(e.target == aumenta2){

 			dinamico = "#noticia2";

 		}else if(e.target == aumenta3){

 			dinamico = "#noticia3";

 		}

 		var size=$(dinamico).css("font-size");

 		size=parseInt(size);

 		$(dinamico).css("font-size", size+2);

 	}

//-----------------------------------------------

 	function disminuye(arg){

 		var dinamico;

 		if(arg.target == disminuir){

 			dinamico = "#noticia";

 		}else if(arg.target == disminuir2){

 			dinamico = "#noticia2";

 		}else if(arg.target == disminuir3){

 			dinamico = "#noticia3";

 		}

 		var size=$(dinamico).css("font-size");

 		size=parseInt(size);

 		$(dinamico).css("font-size", size-2);

 	}

 //-----------------------------------------------

 	function Modolectura(e){

 		var xoxo;

 		if(e.target == lectura){

 			xoxo = "#noticia";

 		}else if(e.target == lectura2){

 			xoxo = "#noticia2";

 		}else if(e.target == lectura3){

 			xoxo = "#noticia3";

 		}

 		$(xoxo).css({"background-color" : "black", 
 						"font-size" : "22px",
 							"text-align" : "justify",
 								"color" : "white"});

 	}

 	function ModoNormal(e){

 		var xoxo;

 		if(e.target == normal){

 			xoxo = "#noticia";

 		}else if(e.target == normal2){

 			xoxo = "#noticia2";

 		}else if(e.target == normal3){

 			xoxo = "#noticia3";

 		}

 		$(xoxo).css({"background-color" : "", 
 						"font-size" : "14px",
 							"text-align" : "justify",
 								"color" : "white"});

 	}
 }


function i(){

	$(document).ready(function(){

 		document.getElementById("imagen1").addEventListener("mouseover", cambiar, false);

 		document.getElementById("imagen1").addEventListener("mouseout", restaurar, false);

 	}); 

	function cambiar(){

		$("#imagen1").attr("src", "imagenes/guy.jpg");
	}

	function restaurar(){

		$("#imagen1").attr("src", "imagenes/Debian.png");

	}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	$(document).ready(function(){
		
		var elementos = document.querySelectorAll("img");

		for(var i = 0; i < elementos.length; i++){

			elementos[i].addEventListener("mouseover", change, false);

			elementos[i].addEventListener("mouseout", replace, false);

		}

	});
	
	function change(e){

		if(e.target == imagen2){


			$("#imagen2").attr("src", "imagenes/broly.jpg");
		
		}else if(e.target == imagen3){


			$("#imagen3").attr("src", "imagenes/broly.jpg");
		
		} else if(e.target == imagen4){


			$("#imagen4").attr("src", "imagenes/broly.jpg");
		
		} else if(e.target == imagen5){


			$("#imagen5").attr("src", "imagenes/broly.jpg");
		
		} else if(e.target == imagen6){


			$("#imagen6").attr("src", "imagenes/broly.jpg");
		
		}

		}

	function replace(e){

		if(e.target == imagen2){


			$("#imagen2").attr("src", "imagenes/dbs.jpg");
		
		}else if(e.target == imagen3){


			$("#imagen3").attr("src", "imagenes/gokub.jpg");
		
		} else if(e.target == imagen4){


			$("#imagen4").attr("src", "imagenes/asc3.jpg");
		
		} else if(e.target == imagen5){


			$("#imagen5").attr("src", "imagenes/banderavzla.jpg");
		
		} else if(e.target == imagen6){


			$("#imagen6").attr("src", "imagenes/roques.jpg");
		
			}

		}
	
	}


function htmlEdit(){

	
	$(document).ready(function(){

		var variable = document.querySelectorAll("#contenedor1 a");

		for(var i = 0; i < variable.length; i++){

			variable[i].addEventListener("mouseover", inputPicture, false);

			variable[i].addEventListener("mouseout", outPicture, false);

		}

	});


	function inputPicture(arg){

		if(arg.target == google){

			$("#google").addClass("destacar");

			$("#img img").attr("src", "imagenes/google.png");

		}else if(arg.target == yahoo){

			$("#yahoo").addClass("destacar");

			$("#img img").attr("src", "imagenes/yahoo.jpg");

		}else if(arg.target == facebook){

			$("#facebook").addClass("destacar");

			$("#img img").attr("src", "imagenes/Facebook.png");

		}else if(arg.target == twitter){

			$("#twitter").addClass("destacar");

			$("#img img").attr("src", "imagenes/twitter.jpg");

		}else if(arg.target == instagram){

			$("#instagram").addClass("destacar");

			$("#img img").attr("src", "imagenes/instagram2.png");

		}

	}

	function outPicture(arg){

		if(arg.target == google){

			$("#google").removeClass("destacar");

			$("#img img").removeAttr("src");

		}else if(arg.target == yahoo){

			$("#yahoo").removeClass("destacar");

			$("#img img").removeAttr("src");

		}else if(arg.target == facebook){

			$("#facebook").removeClass("destacar");

			$("#img img").removeAttr("src");

		}else if(arg.target == twitter){

			$("#twitter").removeClass("destacar");

			$("#img img").removeAttr("src");

		}else if(arg.target == instagram){

			$("#instagram").removeClass("destacar");

			$("#img img").removeAttr("src");

		}

	}

}


function Esplandor(){

	$(document).ready(function(){

/*		document.getElementById("aparecer").addEventListener("click", aparece, false);
		document.getElementById("desaparecer").addEventListener("click", desaparece, false);
		document.getElementById("agrandar").addEventListener("click", aumentarTam, false);	*/
		
		var buttons = document.querySelectorAll("#pictures input");
		
		for(var i = 0; i < buttons.length; i++){

			buttons[i].addEventListener("click", aparece, false);

			buttons[i].addEventListener("click", desaparece, false);
			
			buttons[i].addEventListener("click", aumentarTam, false);
			
			buttons[i].addEventListener("click", less, false);
			
			buttons[i].addEventListener("click", Normalizar, false);

		}


	});

	function aparece(e){

		if(e.target == aparecer){

		//	$("#pictures img").fadeIn(2000).width(200);
			$("#pictures img").fadeIn(2000);

		}

	}

	function desaparece(e){

		if(e.target == desaparecer){

		//	$("#pictures img").fadeOut(0000).width(50);
			$("#pictures img").fadeOut(2000);

		}

	}

	function aumentarTam(e){

		if(e.target == agrandar){

			var	imagen = "#pictures img";
 			var size = $(imagen).css("width");
 			size=parseInt(size);
 			$(imagen).css("width", size+5);

 		}

	}

	function less(e){

		if(e.target == disminuir){

			var	imagen2 = "#pictures img";
 			var size2 = $(imagen2).css("width");
 			size2=parseInt(size2);
 			$(imagen2).css("width", size2-5);

 		}

	}

	function Normalizar(e){

		if(e.target == normal){

			var	imagen = "#pictures img";
 			var size = $(imagen).css("width");
 			size=parseInt(size);
 			$(imagen).css("width", size);
		
			}
		}
	}


function comprobarFormulario{

	if(!document.getElementById("estadoCivil").checked){

		document.getElementById("estadoCivilOculto").value="No";
	
	}else{

		document.getElementById("estadoCivilOculto").value="Si";
	
		}
	}
}