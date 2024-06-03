function dividirNumeros(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var resultadoDividir = numero1 / numero2
    var teste = document.getElementById("resultadoDividir")
    teste.innerHTML=resultadoDividir
    if((numero2==0)){
        alert("seu numero nao pode ser 0, digite outro numero" )
}
}
function mediaNotas(){
    var numero3 =parseInt(document.getElementById("num3").value);
    var numero4 =parseInt(document.getElementById("num4").value);
    var numero5 =parseInt(document.getElementById("num5").value);
    var numero6 =parseInt(document.getElementById("num6").value);
    var resultado = numero3+numero4+numero5+numero6 ;
    var media = resultado/4
    if (media>5){
        alert("Você está aprovado,sua nota é " +media)
      }
      else{
        alert("você está reprovado,pois sua nota é "+media)
      }
    
    }

    function somarNumeros(){
    
        var numero1 = parseInt(document.getElementById("numero1").value);
        var numero2 = parseInt(document.getElementById("numero2").value);
        var numero3 = parseInt(document.getElementById("numero3").value);
        var resultado = numero1 + numero2
      if(numero3<resultado){
        alert(resultado+ "é maior que" +numero3)
      }
      else{
        alert(resultado+ "é menor que " +numero3)
      }
    }
    function retangulo(){
        var numero11 = parseInt(document.getElementById("nume1").value);
        var numero12 = parseInt(document.getElementById("nume2").value);
        var resultado = numero11 * numero12
        var teste = document.getElementById("resultadoretangulo")
        teste.innerHTML=resultado
    }
    
  
  
