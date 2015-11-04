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
			$(".resultado").append(miPrimerMensaje);
	});

	$("#go").click(function(e){
			e.preventDefault();
			var color = $("#color option:selected").val();				
			$(".resultado p:last-child").addClass(color);
	});

});