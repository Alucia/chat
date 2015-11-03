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
			var miPrimerMensaje = $("<p></p>").text(texto,color); //etiquetas al vuelo		
			var color = $('#info').click(function(e){
				e.preventDefault();
				miPrimerMensaje.css("background-color","blue");		
			});			
			$(".resultado").append(miPrimerMensaje);
	});

	$('#info').click(function(e){
		miPrimerMensaje.css("background-color","red");
		
	});
	$('#war').click(function(e){
		miPrimerMensaje.css("background-color","yellow");
	});
});