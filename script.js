function operadores(){
	var o1=document.getElementById("op1").value;
	var o2=document.getElementById("op2").value;

	if(o1=="" || o2=="" ){
		resultado=0;
	}else{
		resultado=1;
	}

	return resultado;
}


var suma=function(){
	if(operadores()){
		var o1=parseInt(document.getElementById("op1").value);
		var o2=parseInt(document.getElementById("op2").value);

		var resultado=o1+o2;
		res.value=resultado;
	}else{
		alert("Todos los campos son requeridos para la suma");
	}


	

}


var resta=function(){
	if(operadores()){
		var o1=parseInt(document.getElementById("op1").value);
		var o2=parseInt(document.getElementById("op2").value);

		var resultado=o1-o2;
		res.value=resultado;
	}else{
		alert("Todos los campos son requeridos para la resta");
	}
	
}

var mul=function(){
	if(operadores()){
		var o1=parseInt(document.getElementById("op1").value);
		var o2=parseInt(document.getElementById("op2").value);

		var resultado=o1*o2;
		res.value=resultado;
	}else{
		alert("Todos los campos son requeridos para la multiplicacion");
	}
}

var div=function(){
	if(operadores()){
		var o1=parseInt(document.getElementById("op1").value);
		var o2=parseInt(document.getElementById("op2").value);

		var resultado=o1/o2;
		res.value=resultado;
	}else{
		alert("Todos los campos son requeridos para la división");
	}
}

window.onload=function(){
	document.getElementById("btn_suma").onclick=suma;
	document.getElementById("btn_resta").onclick=resta;
	document.getElementById("btn_mul").onclick=mul;
	document.getElementById("btn_div").onclick=div;
}
