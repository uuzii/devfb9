function Operaciones()
{
	n1 = document.querySelector('#primerValor').value;
	n2 = document.querySelector('#segundoValor').value;
	var resultado = parseInt(n1) + parseInt(n2);
	alert(resultado);
	if (resultado>15)
	{
		document.querySelector("#colorido").style.backgroundColor = "yellow";
	}

	else if (resultado===15){
		document.querySelector("#colorido").style.backgroundColor = "green";
	}

	else{
		document.querySelector("#colorido").style.backgroundColor = "blue";
	};
};

function getRandom() {
  alert(Math.round((Math.random())*100)/100);
};



/*
function GanaUsuario() {
	if ( PiedravsTijera()=1 || PapelvsPiedra()=1 || TijeravsPapel()=1 )
	{
		return 0;
	};
};

function PierdeUsuario() {
	if ( PiedravsPapel()=1 || PapelvsTijera()=1 || TijeravsPiedra()=1 )
	{
		return 1;
	}
}

function Empate() {
	if ( PiedravsPiedra()=1 || PapelvsPapel()=1 || TijeravsTijera()=1 )
	{
		return 2;
	}
}
*/

