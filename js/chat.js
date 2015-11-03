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

});