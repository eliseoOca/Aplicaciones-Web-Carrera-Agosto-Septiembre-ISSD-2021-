function validar(){
	var nombre,  social, email, telefono, celular, textarea1;
	social = document.getElementById("social").value;
	email = document.getElementById("email").value;
	telefono = document.getElementById("telefono").value;
	celular = document.getElementById("celular").value;
	textarea1 = document.getElementById("textarea1").value;
	nombre = document.getElementById("nombre").value;
	
	expresion = /\w+@\w+\.+[a-z]/;
	mayuscula= /[A-Z]/;

	
	
	if (nombre === "" || email === "" || telefono === ""){
		alert("Rellenar los campos Obligarorios * ");
		
	return false;
	}
	
	else if (email.length>35){
		alert("El Email es largo");
		return false;
	} 
	
	else if (textarea1.length>300){
		alert("El campo comentario no puede extenderse más de 300 caracteres");
		return false;
	}
	else if (telefono.length>9){
		alert("El Numero de Telefono no deber tener mas de 9 digitos");
		return false;
	}
	else if (celular.length>13){
		alert("El Numero de celular no deber tener mas de 13 digitos");
		return false;
	}
	else if (nombre.length>20){
		alert("El Nombre y Apellido no debe tener mas de 20 caracteres");
		return false;
	}
	else if (!expresion.test(email)){
		alert("El campo Email esta incorrecto: Debe tener Letras-numeros @ letras.com Ejemplo:eliseo123@Gmail.com");
		return false;
	}
	else{
		alert("todos los datos se han enviado de forma exitosa ");
		document.getElementById('form2').reset();
		return false;
	}
	
}