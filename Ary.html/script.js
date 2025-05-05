let feitiço = "Lumos";
        let nívelDeMana=87;
        let invisível = false
       
        console.log(`o feitico é do tipo: ${typeof feitiço}`);
        console.log(`o nível de mana é tipo: ${typeof nível}`);
        console.log(`o invisível é do tipo: ${typeof invisível}`);
   
        //2. Dragões e Condições ''
   
        let Idade =20;
        let temEspadaMagica = true ;
   
        if(Idade > 18 && temEspadaMagica)
        {
        console.log("Voce pode lugar contra o Dragão")


        }
         else
         {
            console.log("Fuga enquanto há tempo!")
         }


         //3. A Pizzaria do Código História
    let temDinheiro = true;
    let estaComFome = false;
    let hojeEhSexta = true;


    if ((temDinheiro && estaComFome) || hojeEhSexta)  {
      console.log(`Vamos pedir pizza!`);
    }
      else
    {
    console.log(`Hoje não é dia de pizza.`);
    }


     //4. A Máquina de Suco Inteligente``
       
     let fruta = "laranja"; // Altere para "uva", "morango" ou outra fruta para testar


     if (fruta === "laranja")
     {
     console.log("Preparando suco de laranja");  
     }
       else if (fruta === "uva")
     {
        console.log("Preparando suco de uva");
     }
       else if (fruta === "morango")
     {
          console.log("Preparando suco de morango");
     }
       else
     {
           console.log("Essa fruta não está disponível");
     }
 
     //5. Detetive dos Dados``


     let suspeito1 = "42"; // string
     let suspeito2 = 42;   // número
     
     if (suspeito1  === suspeito2)
       {
         console.log("Eles são exatamente iguais.");
       }
           else if ("suspeito1" == suspeito2)
       {
         console.log("Eles dizem a mesma coisa, mas de formas diferentes.");
       }
         else
      {
         console.log("Eles são diferentes.");
       }
   
       //6. O Carrinho da Loja``
     
         let quantidadeItens - 2;
         let valorTotal - 150;
 
       if (quantidadeItens > 3 || valorTotal > 100)
 {
    alert("Desconto aplicado!");
 }
 else
 {
    alert("Sem desconto dessa vez.");
 }


  //7. O Robô do Café `
  let pedido = prompt("Qual café você gostaria? (café, capuccino ou expresso)");


  if (pedido === "café")
   {
      alert("Servindo café");
  }
  else if (pedido === "capuccino")
   {
      alert("Servindo capuccino");
  }
  else if (pedido === "expresso")
   {
      alert("Servindo expresso");
  }
  else
  {
      alert("Desculpe, não temos esse tipo de café");
  }


  //8. Missão: Planeta JavaScript


let combustivel = Number ("Digite a quantidade de combustível:");
let clima = prompt("Como está o clima? (bom/ruim)");


if (combustivel > 50 && clima.toLowerCase() === "bom")
   {
  alert("Pouso autorizado!");
}
else
{
  alert("Abortar missão!");
}


//9. Presente Secreto


let nomeSorteado = prompt("Quem você tirou no presente secreto?");


if (nomeSorteado === "Carlos")
  {
  alert("Compre um livro");
}
else if (nomeSorteado === "Ana")
  {
  alert("Compre um chocolate");
}
else
{
  alert("Compre um presente surpresa");
}




//10. Jogo de Pontuaçã


let pontos = Number(prompt("Digite a pontuação do jogador:"));


if (pontos >= 100)
   {
  alert("Você venceu!");
}
else
 {
  alert("Continue jogando!");
}
 
//11. Sessão de Cinema


let idade = Number ("Qual a sua idade?");


if (idade <= 12 || idade > 60)
   {
  alert("Entrada gratuita");
}
 else
 {
  alert("Precisa pagar ingresso");
}
//12. Poção Misteriosa


let ingrediente1 = prompt("Digite o primeiro ingrediente:");
let ingrediente2 = prompt("Digite o segundo ingrediente:");


if (ingrediente1 === "pele de sapo" && ingrediente2 === "asa de morcego")
   {
  alert("Poção pronta!");
}
else
{
  alert("Mistura errada!");
}


//13. Festa VIP


let nome = prompt("Digite seu nome:");
let temConvite = confirm("Você tem convite?");


if ((nome === "Joana" || nome === "Carlos" || nome === "Marcos") && temConvite)
  {
  alert("Pode entrar na festa VIP!");
}
else
 {
  alert("Entrada negada.");
}
//14. Passeio com o Pet


let estaChovendo = confirm("Está chovendo?");
let temTempo = confirm("Você tem tempo para passear?");


if (!estaChovendo && temTempo)
  {
  alert("Hora do passeio!");
}
else
{
  alert("Hoje não vai dar...");
}
//15. Sorveteria Gelada


let sabor = prompt("Qual sabor você quer? (baunilha, chocolate, morango)");


if (sabor === "baunilha" || sabor === "chocolate" || sabor === "morango")
   {
  alert("Servindo sorvete de " + sabor);
}
else
{
  alert("Sabor indisponível");
}
//16. MasterChef Lógico


let temIngredientePrincipal = confirm("Tem o ingrediente principal?");
let temTemperoSecreto = confirm("Tem o tempero secreto?");


if (temIngredientePrincipal || temTemperoSecreto)
   {
  alert("Prato especial pronto!");
}
else
 {
  alert("Sem os ingredientes necessários.");
}
//17. Laboratório de Comparações


let valor1 = "100";
let valor2 = 100;


console.log("Comparando com == :", valor1 == valor2);   // true
console.log("Comparando com === :", valor1 === valor2); // false
console.log("== compara apenas o valor, === compara valor e tipo.");




//18. Esqui na Montanha
let idade = Number("Qual a sua idade?");
let temEquipamento = confirm("Você tem o equipamento completo?");


if (idade > 16 && temEquipamento)
   {
  alert("Pode esquiar");
}
else
{
  alert("Não liberado.");
}
//19. Lista de Material Escolar


let tipoEnsino = ("Digite o tipo de ensino (fundamental, médio):");


if (tipoEnsino === "fundamental")
   {
  alert("Levar lápis");
}
 else if (tipoEnsino === "médio")
   {
  alert("Levar caneta");
}
else
 {
  alert("Levar lápis e caneta");
}
//20. Contato Alienígena


let sinal1 = confirm("Sinal 1 está ativo?");
let sinal2 = confirm("Sinal 2 está ativo?");


if (sinal1 && sinal2)
   {
  alert("Sinal de paz enviado");
}
else
{
  alert("Sem contato estabelecido.");
}

//22. Viagem no Tempo


let ano = Number ("Digite o ano em que você está:");


if (ano < 2020)
    {
  alert("Viajando para o passado...");
}
 else
 {
  alert("Rumo ao futuro!");
}


//23. Controle de Jogo


let botaoPressionado = ("Qual botão você pressionou? (A ou B)";


if (botaoPressionado === "A")
    {
      alert("Pular!");
    }    
    else
if (botaoPressionado === "B")
    {
      alert("Correr!");
    }
      else
      {
       alert("Botão desconhecido.");
     }
//24. Vai Pra Praia?


let ehFinalDeSemana = confirm("É final de semana?");
let tempo = ("Está ensolarado? (sim ou não)");


if (ehFinalDeSemana && tempo.toLowerCase() === "sim")
    {
     alert("Bora pra praia!");
    }
     else
 {
  alert("Melhor ficar em casa.");
}
  //25. Sabonete Inteligente


let temAgua = confirm("Tem água?");
let temSabao = confirm("Tem sabão?");


if (temAgua && temSabao)
    {
  alert("Espuma ativada!");
}
 else
  {
  alert("Nada acontece.");
}
  //26. Parabéns ou Não?


let dia = Number("Qual o dia do seu aniversário?");
let mes = Number("Qual o mês do seu aniversário?");


if (dia === 25 && mes === 12)
     { // exemplo fictício (25 de dezembro)
  alert("Parabéns!");
     }
      else
    {
     alert("Não é seu aniversário.");
    }
   
   // 27. Despertador Falante


let hora = Number("Qual é a hora agora? (Em formato 24h)");


if (hora < 12)
     {
  alert("Bom dia!");
}
else
 if (hora >= 12 && hora <= 18) {
  alert("Boa tarde!");
}
else
 {
  alert("Boa noite!");
}
//28. Interruptor Lógico


let interruptor = confirm("O interruptor está ligado?");


if (interruptor)
    {
  alert("Luz acesa");
}
 else
  {
  alert("Luz apagada.");
}


//29. Caça-Vampiros


let temAlho = confirm("Você tem alho?");
let temCruz = confirm("Você tem uma cruz?");


if (temAlho || temCruz)
     {
  alert("Você venceu o vampiro!");
}
else
 {
  alert("Você corre perigo!");
}


//30. Código de Desbloqueio


let codigoDigitado = ("Digite o código de desbloqueio:");


if (codigoDigitado === "1234")
     {
  alert("Código correto. Desbloqueio realizado!");
}
 else
  {
  alert("Código incorreto.");
}


//31. Corrida Maluca


let tempoCorrida = Number("Qual foi o tempo da corrida? (Em segundos)");


if (tempoCorrida < 10)
     {
  alert("Você venceu!");
}
 else
  {
  alert("Tente novamente.");
}


//32. Cogumelo do Poder


let vida = Number(prompt("Qual é a sua vida?"));


if (vida < 50)
    {
  alert("Usando cogumelo");
}
else
 {
  alert("Não é necessário ainda.");
}


//34. Máquina de Vendas


let valor = Number("Quanto você tem para comprar o refrigerante?");


if (valor >= 5)
     {
  alert("Produto liberado!");
}
else
{
  alert("Valor insuficiente.");
}


//35. Tiro ao Alvo


let pontos = Number("Qual a sua pontuação?");


if (pontos >= 80 && pontos <= 100)
     {
  alert("Você ganhou a medalha de ouro!");
}
else
{
  alert("Tente novamente.");
}


//36. Misturando Cores


let cor1 = prompt("Qual a primeira cor?").toLowerCase();
let cor2 = prompt("Qual a segunda cor?").toLowerCase();


if (cor1 === "azul" && cor2 === "amarelo")
    {
  alert("Verde");
}
else
{
  alert("Cor inválida");
}
//37. Entrega Rápida


let diasEntrega = Number("Quantos dias para a entrega?");


if (diasEntrega < 2)
     {
  alert("Entrega expressa");
}
 else
  {
  alert("Entrega normal.");
}




//38. Doces ou Travessuras


let data = prompt("Qual a data de hoje? (DD/MM)").split('/');
let temFantasia = confirm("Você está usando fantasia?");


if (data[0] === "31" && data[1] === "10" && temFantasia)
    {
  alert("Doces para você!");
}
else
 {
  alert("Sem doces.");
}


//39. Teste de Congelamento


let temperatura = Number("Qual é a temperatura?");


if (temperatura < 0)
     {
  alert("Água congelando!");
}
else
 {
  alert("Temperatura acima de zero.");
}




//40. Jogo da Memória


let resposta = prompt("Qual a sequência correta? (Ex: azul, verde, vermelho)");
let respostaCerta = "azul, verde, vermelho";


if (resposta === respostaCerta)
     {
  alert("Você venceu a memória!");
}
else
 {
  alert("Tente novamente.");
}
// 41. Dragão Acordado
let dragaoDormindo = true;
if (dragaoDormindo)
{
  console.log(" fuja loko.");
}
else
{
  console.log("vai passar  nunca mais  !");
}


// 42. Level Up
let pontuacao = 1050;
if (pontuacao >= 1000)
{
  console.log("o jogador e um jaguara que só!");
}


// 43. Poção Mágica
let ingredientesRaros = true;
let temCaldeirao = true;
if (ingredientesRaros && temCaldeirao)
 {
  console.log(" o chinelao a poçao ta pronta!");
}


// 44. Código Secreto
let codigo = "sombra-lunar";
if (codigo === "sombra-lunar")
 {
  console.log("ja pode abri a porta que ta boa .");
}


// 45. Duelo de Cavaleiros
let energiaJogador = 80;
let energiaInimigo = 70;
if (energiaJogador > energiaInimigo)
{
  console.log(" que baita feio tu ganhasse o jogo!");
}


// 46. Previsão do Tempo
let estaNublado = false;
let estaChovendo = true;
if (estaNublado || estaChovendo)
 {
  console.log("nao vai esqucer o  guarda-chuva pia .");
}


// 47. Desafio das Cores
let corEscolhida = "verde";
if (corEscolhida === "vermelho" || corEscolhida === "verde" || corEscolhida === "azul")
 {
  console.log("  essa cor pode .");
}


// 48. Aprovado ou Reprovado
let media = 6.5;
if (media >= 6)
{
  console.log(" vc passo seu chinelao ");
}
 else
 {
  console.log(" vc reprovou seu burro.");
}


// 49. Bússola do Herói
let direcao = "norte";
if (direcao === "norte")
 {
  console.log("vai em frente!");
}
 else
 {
  console.log("se tu nao para o bglh vai ficar loko .");
}


// 50. Salvar Progresso
let salvarPressionado = true;
if (salvarPressionado)
{
  console.log(" a favela venceu, fé nos pobres .");
}
       
    </script>