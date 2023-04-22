var entrada = document.querySelector(".entrada");
var salida = document.querySelector(".salida");

var botonConvertir = document.querySelector(".convertirBraille");

botonConvertir.addEventListener("click",function(event){
    event.preventDefault();
	const textoInput = entrada.value;
    convertir(textoInput);

});
function convertir(textoInput){
    let arr = [['a','⠁'] , ['b','⠃'] , ['c','⠉'] , ['d','⠙'] , ['e','⠑'] , ['f','⠋'] , ['g','⠛'] , ['h','⠓'] , ['i','⠊'] , ['j','⠚'] , ['k','⠅'] , ['l','⠇'] , ['m','⠍'] , ['n','⠝'] , ['ñ','⠻'] , ['o','⠕'] , ['p','⠏'] , ['q','⠟'] , ['r','⠗'] , ['s','⠎'], ['t','⠞'] , ['u','⠥'] , ['v','⠧'] , ['w','⠺'] , ['x','⠭'], ['y','⠽'] , ['z','⠵'] , ['á','⠷'] , ['é','⠮'] , ['í','⠌'] , ['ó','⠬'] , ['ú','⠾'] , ['ü','⠳'] , ['.','⠄'] , [',','⠂'] , [';','⠆'] , [':','⠒'] , ['...','⠄⠄⠄'] , ['¡','⠖'] , ['!','⠖'] , ['¿','⠢'] , ['?','⠢'] , ['(','⠣'] , [')','⠜'] , ['"','⠦'] 
]
    textoInput = textoInput.toLowerCase()
      for(let i = 0; i < arr.length; i++){
        if(textoInput.includes(arr[i][0])){
            textoInput = textoInput.replaceAll(arr[i][0],arr[i][1])
        }
      }
    imprimirSalida(textoInput);
}
function imprimirSalida(textoConvertido){
    salida.value = textoConvertido;
}