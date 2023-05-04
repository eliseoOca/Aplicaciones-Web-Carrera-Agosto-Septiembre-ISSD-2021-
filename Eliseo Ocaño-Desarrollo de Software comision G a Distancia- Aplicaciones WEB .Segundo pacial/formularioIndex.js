function validar(){
	var usuario, correo;
	usuario = document.getElementById("usuario").value;
	correo = document.getElementById("correo").value;
	
	expresion = /\w+@\w+\.+[a-z]/;
	noValido = /\s/;
	
	if(noValido.test(usuario)){ 
		alert ("El Usuario no puede tener espacios en BLANCO"); 
		return false; 
	}
	else if(usuario === ""){
		alert("El campo Usuario está vacío");
		return false;
	}
	
	else if (usuario.length>20){
		alert("El Usuario es largo");
		return false;
	}
	else if (correo == ""){
		alert("El campo Email está vacío");
		return false;
		}
		
	else if (correo.length>35){
		alert("El Email es largo");
		return false;
	} 
	else if (!expresion.test(correo)){
		alert("El campo Email es incorrecto: Debe tener Letras-numeros @ letras.com Ejemplo:eliseo123@Gmail.com");
		return false;
	}
		
	else{
		alert("Logeado Correctamente")
	}
	
}