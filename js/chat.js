// $(document).ready(function(){
// 	$("#go").click(function(e){
// 			e.preventDefault();  //previene el evento click , q se detenga
// 			var texto = $("#chat").val();
// 			var miPrimerMensaje = $("<p></p>").text(texto); //etiquetas al vuelo
// 			$(".resultado").append(miPrimerMensaje);
// 	}); 

// });
$(document).ready(function(){
	$("#go").click(function(e){
			e.preventDefault();  //previene el evento click , q se detenga
			var texto = $("#chat").val();					
			var miPrimerMensaje = $("<p></p>").text(texto); //etiquetas al vuelo					
			miPrimerMensaje.addClass("alert-info");
			$(".resultado").append(miPrimerMensaje);
	});

	$("#go").click(function(e){
			e.preventDefault();  //previene el evento click , q se detenga
			var texto = $("#chat").val();					
			var miPrimerMensaje = $("<p></p>").text(texto); //etiquetas al vuelo					
			miPrimerMensaje.addClass("alert-warning");
			$(".resultado").append(miPrimerMensaje);
	});
	$("#go").click(function(e){
			e.preventDefault();  //previene el evento click , q se detenga
			var texto = $("#chat").val();					
			var miPrimerMensaje = $("<p></p>").text(texto); //etiquetas al vuelo					
			miPrimerMensaje.addClass("alert-success");
			$(".resultado").append(miPrimerMensaje);
	});
	$("#go").click(function(e){
			e.preventDefault();  //previene el evento click , q se detenga
			var texto = $("#chat").val();					
			var miPrimerMensaje = $("<p></p>").text(texto); //etiquetas al vuelo					
			miPrimerMensaje.addClass("alert-danger");
			$(".resultado").append(miPrimerMensaje);
	});

});