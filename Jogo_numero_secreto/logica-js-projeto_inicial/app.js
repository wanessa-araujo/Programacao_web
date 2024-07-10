alert("Bem vindo ao jogo do numero secreto");
let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1;


//enquanto chute não for igual ao numerosecreto
while (chute != numeroSecreto){
    chute = prompt ('Escolha um numero entre 1 e 10');
    // se o chute for igul a número segreto
    if (numeroSecreto == chute) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`o numero secreto é menor que ${chute}`);
        } else {
        alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }
    
}
if(tentativas > 1){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
}else{
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}


