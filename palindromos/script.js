function envia(){
	function invertir(cadena) 
	{
  		var x = cadena.length;
  		var cadenaInvertida = "";
 
  		while (x>=0) 
  		{
    		cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    		x--;
  		};
  		document.write(cadenaInvertida);
  		return cadenaInvertida;
	};

	function verifica(cadena1){
		if(cadena1==pal)
		{
			alert("Es palindromo :)")
		}
		else
		{
			alert("No es palindromo :(")
		}
	};

	var pal = document.querySelector("#palabra").value;
	var invertida = invertir(pal);
	verifica(invertida);
}


	
