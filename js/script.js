var suma=function(){

	var o1=parseInt(document.getElementById("op1").value);
	var o2=parseInt(document.getElementById("op2").value);

	var resultado=o1+o2;
	res.value=resultado;

	var validacion=valida("op1","error");
	var validacion=valida("op2","error2");

}


var resta=function(){
	var o1=parseInt(document.getElementById("op1").value);
	var o2=parseInt(document.getElementById("op2").value);

	var resultado=o1-o2;
	res.value=resultado;
}

var mul=function(){
	var o1=parseInt(document.getElementById("op1").value);
	var o2=parseInt(document.getElementById("op2").value);

	var resultado=o1*o2;
	res.value=resultado;
}

var div=function(){
	var o1=parseInt(document.getElementById("op1").value);
	var o2=parseInt(document.getElementById("op2").value);

	var resultado=o1/o2;
	res.value=resultado;
}

window.onload=function(){
	document.getElementById("btn_suma").onclick=suma;
	document.getElementById("btn_resta").onclick=resta;
	document.getElementById("btn_mul").onclick=mul;
	document.getElementById("btn_div").onclick=div;
}
