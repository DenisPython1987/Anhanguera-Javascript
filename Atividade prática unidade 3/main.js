let computador = document.getElementById("computador");
let usuario = document.getElementById("usuario");
let resultado = document.getElementById("resultado");
let botao = document.querySelector("#button");
let comp_var = 0;
let opc_jogo = ['papel', 'pedra', 'tesoura'];

//Aqui eu crio uma função para gerar números aleatórios
function numero_aleatorio(max){
    return Math.floor(Math.random() * max);
}

//Aqui eu gero o número do índice da jogada do computador
function comp(){
    return comp_var = numero_aleatorio(3);
}

//Aqui eu pego a opção do usuário
function usu(){
    let opcao = document.querySelector("input[name='grupo-opcoes']:checked");

    //Essa parte foi corrigida pelo chat GPT. 
    //porque o if não detectava a ausência de escolha do usuário.
    return opcao ? opcao.value : null;
}

//Aqui eu crio uma função para atualizar as tags p para mostrar a escolha
//do usuário, a do computador e o resultado
function result(msg1, msg2, msg3){
    document.getElementById('computador').textContent = msg1;
    document.getElementById('usuario').textContent = msg2;
    document.getElementById('resultado').textContent = msg3; 
}

//Aqui eu crio a função principal
function jogo(){
    comp_num = comp();
    comp_jogada = opc_jogo[comp_num];
    opt = usu();

    //Aqui eu testo se o usuário escolheu alguma coisa
    if(!opt){
        document.getElementById('resultado').textContent = 'Escolha uma opção';
        return;
    }

    //Aqui é o bloco de if aninhado para testar o resultado do jogo
    if(comp_jogada == 'papel' && opt == 'papel'){
        result(comp_jogada, opt, 'Empate');
    }else if(comp_jogada == 'papel' && opt == 'tesoura'){
        result(comp_jogada, opt, 'Vitória');
    }else if(comp_jogada == 'papel' && opt == 'pedra'){
        result(comp_jogada, opt, 'Derrota');
    }else if(comp_jogada == 'tesoura' && opt == 'tesoura'){
        result(comp_jogada, opt, 'Empate');
    }else if(comp_jogada == 'tesoura' && opt == 'pedra'){
        result(comp_jogada, opt, 'Vitória');
    }else if(comp_jogada == 'tesoura' && opt == 'papel'){
        result(comp_jogada, opt, 'Derrota');
    }else if(comp_jogada == 'pedra' && opt == 'pedra'){
        result(comp_jogada, opt, 'Empate');
    }else if(comp_jogada == 'pedra' && opt == 'papel'){
        result(comp_jogada, opt, 'Vitória');
    }else if(comp_jogada == 'pedra' && opt == 'tesoura'){
        result(comp_jogada, opt, 'Derrota')
    }

}

//Aqui eu pego o evento HTML de clique no botão para ativar o jogo
document.getElementById('button').addEventListener('click', jogo);