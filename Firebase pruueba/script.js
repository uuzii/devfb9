$(document).ready(function(){

	//mostramos 
	var show = false;
	$('#show').hide();

	// Login

	var ref = new Firebase("https://prueba-89237.firebaseio.com/");

		//Mostramos los mensajes
	function muestra(){
		$('#show').fadeIn();
		carga();
	};

	// Establecemos la instancia de firebase
	var ref = new Firebase('https://mensajeria.firebaseio.com/');

	// Cargamos los mensajes anteriores
	function carga(){
	postsRef.on('child_added',function(snapshot){
		var newPost = snapshot.val();
		$('#papa').append('<tr><td>'+newPost.author+'</td><td>'+newPost.title+'</td></tr>');			
		$("#scroll").animate({ scrollTop: $('tbody').height() }, "fast");
	});
	};

	

	
	// newPostRef = postsRef.push();
	// var usuario = $('#bliss').text()

	// Agregamos mensaje
	$('#enviar').on('click',function(){

		postsRef.push({
		author:$('#nombre').text(),
		// author:usuario,
		title:$('#inputMessage').val(),
		fecha:Firebase.ServerValue.TIMESTAMP
		});
		
		$('#inputMessage').val("");
		// $('#scroll').scrollTop(100000)
		$("#scroll").animate({ scrollTop: $('tbody').height() }, "slow");
	

	});




});
