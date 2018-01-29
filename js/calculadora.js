function calculo(){

	var num1;

	var num2;

	var repetir;


	function sumar(arg1, arg2){

		this.num1 = arg1; 

		this.num2 = arg2;

		alert("La suma de " +arg1+ " y de " +arg2+ " es igual a: " + (arg1+arg2));

	}

	function restar(arg1, arg2){

		this.num1 = arg1; 

		this.num2 = arg2;

		alert("La resta de " +arg1+ " y de " +arg2+ " es igual a: " + (arg1-arg2));

	}

	function multiplicar(arg1, arg2){

		this.num1 = arg1; 

		this.num2 = arg2;

		alert("La multiplicación de " +arg1+ " y de " +arg2+ " es igual a: " + (arg1*arg2));

	}

	function dividir(arg1, arg2){

		this.num1 = arg1; 

		this.num2 = arg2;

		alert("La división de " +arg1+ " y de " +arg2+ " es igual a: " + (arg1/arg2));

	}

	do {


	var op = prompt("Que operación deseas realizar??");

		if(op == null){

			alert("No has asignado ninguna operación para el calculo");

		} else if (op == "+" || op == "sumar" || op == "suma"){

			alert("Introduce los digitos de la suma");

			num1 = parseInt(prompt("Introduce n°1"));

			num2 = parseInt(prompt("Introduce n°2"));

			sumar(num1, num2);

		} else if (op == "-" || op == "restar" || op == "resta"){

			alert("Introduce los digitos de la resta");

			num1 = parseInt(prompt("Introduce n°1"));

			num2 = parseInt(prompt("Introduce n°2"));

			restar(num1, num2);

		} else if (op == "*" || op == "multiplicar"){

			alert("Introduce los digitos de la multiplicación");

			num1 = parseInt(prompt("Introduce n°1"));

			num2 = parseInt(prompt("Introduce n°2"));
		
			multiplicar(num1, num2);

		} else if (op == "/" || op == "dividir"){

			alert("Introduce los digitos de la división");

			num1 = parseInt(prompt("Introduce n°1"));

			num2 = parseInt(prompt("Introduce n°2"));
		
			dividir(num1, num2);

		} else if (op != "+" || op != "sumar" || op != "suma" || op != "-" || op != "restar" || op != "resta" 

			|| op != "*" || op != "multiplicar" || op != "/" || op != "dividir"){

			alert("El parametro que has introducido no tiene relación con un simbolo matemático.");

			alert("Usa los simbolos basicos matemáticos o las palabras claves: 'sumar', 'restar', 'multiplicar', 'dividir'");

		}

		repetir = prompt("¿Desea repetir la operación?");

		if(repetir == "no" || repetir == "nO" || repetir == "No" || repetir == "NO"){

			alert("Has cancelado la operación..!!");

		}else if(repetir == null){

			alert("No has introducido tu respuesta, se cancelará la operación");

		}else if(repetir != "si" || repetir != "Si" || repetir != "sI" || repetir != "SI" || repetir != "no" || repetir != "No" 
			
			|| repetir != "nO" || repetir != "NO"){

			alert("Tu respuesta no es valida, Se cancelará la operación");

		}

	}while(repetir == "si" || repetir == "Si" || repetir == "sI" || repetir == "SI");
}