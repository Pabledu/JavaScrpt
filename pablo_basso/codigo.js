



/*

   let num1 = 10; 
   let num2 = 20;
   let resultado;

   resultado = num1 + num2; 

   alert(" O resultado é: " + resultado);

   num1 = parseInt(prompt("Digite o primeiro número da soma "));
   num2 = parseInt(prompt(" Digite o segundo número da soma "));

   resultado = num1 + num2;

   alert("O resultado é: " + resultado);
*/

/*
   //declaracao de variaveis
     let anoNacimento;
     let anoAtual;
     let resultado;
     let idadeCachorro;
     let nome;
     let qualCalculo;


     //entrada de dados pelo usuario
     nome = prompt("Qual seu nome?");
     anoNacimento = parseInt(prompt("Qual o ano de nacimento?"));
     anoAtual = parseInt(prompt("Qual o ano atual?"));

   //primeiro desafio
   resultado = anoAtual - anoNacimento;


   //segundo desafio
   idadeCachorro = resultado * 7;

   
   //terceiro desafio

   //quarto desafio
   qualCalculo = parseInt(prompt("Digite 1 pra idade Humana ou 2 para idade Canina"));

   //mostrar resultado
   if(qualCalculo == 1){
      alert(nome + ", a idade é: " + resultado);
   }
   else if(qualCalculo == 2){
      alert(nome + ", aidade em anos caninos é: " + idadeCachorro);
   } else {
      alert(nome + ", por favor digite um numero valido.");
   }

*/

   //Desafio ultimato//
   
   let nota1;
   let nota2;
   let nota3;

   nota1 = parseInt(prompt("qual a nota do 1trimestre?"));
   nota2 = parseInt(prompt("qual a nota do 2trimestre?"));
   
   nota3 = 180 -(nota1+nota2);

   if(nota3 > 0){
      alert("ainda precisa de " + nota3 + " para passar.");
   } else {
      alert("Parabens!! Voce a esta aprovado")
   }