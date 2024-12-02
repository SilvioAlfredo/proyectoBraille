var botonCopiar = document.querySelector(".copiarBraille")
botonCopiar.addEventListener("click",function(event){
	event.preventDefault();
	salida.select();
  document.execCommand('copy');
  alert("Copiado con exito!");
});