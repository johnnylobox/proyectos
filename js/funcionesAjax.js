function mostrarSugerencia(str){

var xmlhttp;

var contenidosRecibidos = new Array();

var nodoMostrarResultados = document.getElementById('listaCiudades');

var contenidosAMostrar = '';

if(str.length==0){

	document.getElementById("txtInformacion").innerHTML="";
	
	nodoMostrarResultados.innerHTML = ''; 

	return; 
}

xmlhttp=new XMLHttpRequest();

xmlhttp.onreadystatechange = function(){

if(xmlhttp.readyState==4 && xmlhttp.status==200){

contenidosRecibidos = xmlhttp.responseText.split(",");

document.getElementById("txtInformacion").innerHTML=contenidosRecibidos[0];

for(var i=1; i<contenidosRecibidos.length;i++){

contenidosAMostrar = contenidosAMostrar+'<div id="ciudades'+i+'"> <a><href="http://aprenderaprogramar.com">' + contenidosRecibidos[i]+ '</a></div>';

	}

nodoMostrarResultados.innerHTML = contenidosAMostrar;

			}

		}

xmlhttp.open("GET"," datosCU01206F.php?pais="+str);

xmlhttp.send();

	}