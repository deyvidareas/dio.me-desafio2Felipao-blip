let vitorias = prompt("Qual o numero de Vitórias do herói?");
let derrotas = prompt("Qual o numero de Derrotas do herói?");

function classificaNivel(vitorias, derrotas){

  ranking = parseInt(vitorias) - parseInt(derrotas);

  if (ranking < 10){
    return "Ferro";
  } else if (ranking >= 11 && ranking <= 20){
    return "Bronze";
  } else if (ranking >= 21 && ranking <= 50){
    return "Prata";
  } else if (ranking >= 51 && ranking <= 80){
    return "Ouro";
  } else if (ranking >= 81 && ranking <= 90){
    return "Diamante";
  } else if (ranking >= 91 && ranking <= 100){
    return "Lendário";
  } else if (ranking >= 101) {
    return "Imortal";
  }

  return ranking;

}

let nivel = classificaNivel(vitorias, derrotas);
// Exibe o resultado final
alert("O Herói de saldo de " + ranking + " vitórias está no nivel de " + nivel);