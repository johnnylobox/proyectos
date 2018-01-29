
		var numero = "";
	
		var acumulado=0;

		var sumar = false; var restar = false; var multiplicar = false; var dividir = false;

	function calculadoraFisica(arg){

		document.getElementById("pantalla").value=numero+arg; //numero y arg se concatenan en esta función

		numero = document.getElementById("pantalla").value; //aqui se imprime en la pantalla nombrada como campoNumerico los nu
	}

	function suma(){

		acumulado = acumulado+parseInt(numero);

		document.getElementById("pantalla").value=acumulado;

		numero = "";

		sumar = true;

	}

	function resta(){

		if(sumar){

			acumulado = acumulado + parseInt(numero);

			document.getElementById("pantalla").value=acumulado;

			numero = "";


		}else{

			acumulado = acumulado - parseInt(numero);

			document.getElementById("pantalla").value=acumulado;
		}
		
		restar = true;
	
		sumar = false;

	}


	function multiplicacion(){

		if(sumar){

			acumulado = acumulado + parseInt(numero);

			document.getElementById("pantalla").value=acumulado;

			numero = "";

		}else if(restar){

			acumulado = acumulado - parseInt(numero);

			document.getElementById("pantalla").value=acumulado;

			numero = "";

		}else{

			acumulado = acumulado * parseInt(numero);

			document.getElementById("pantalla").value=acumulado;

			numero = "";

		}

		sumar = false;

		restar = false;

		multiplicar = true;

	}

	function division(){

		if(sumar){

			acumulado = acumulado + parseInt(numero);

			document.getElementById("pantalla").value=acumulado;

			numero = "";

		}else if(restar){

			acumulado = acumulado - parseInt(numero);

			document.getElementById("pantalla").value=acumulado;

			numero = "";

		}else if(multiplicar){

			acumulado = acumulado * parseInt(numero);

			document.getElementById("pantalla").value=acumulado;

			numero = "";

		}else{

			acumulado = acumulado / parseInt(numero);

			document.getElementById("pantalla").value=acumulado;

			numero = "";

		}

		sumar = false;

		restar = false;

		multiplicar = false;

		dividir = true;
	
	}

	function resultado(){

			if(sumar){

				document.getElementById("pantalla").value=acumulado + parseInt(numero);

			}else if(restar){

				document.getElementById("pantalla").value=acumulado - parseInt(numero);

			}else if(multiplicar){

				document.getElementById("pantalla").value=acumulado * parseInt(numero);

			}else if(dividir){

				document.getElementById("pantalla").value=acumulado / parseInt(numero);

		}
	}