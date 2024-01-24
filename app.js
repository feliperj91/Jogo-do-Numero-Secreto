let geraNumero = gerarNumeroAleatorio();
let tentativas = 1;

//Funcão para exibição dos textos nas TAGs H1 e p
function mensagemInicial(){
exibirNaTela('h1','Jogo do Número Secreto');
exibirNaTela('p','Digite um numero entre 1 e 10.');
}

//Função para geração de um número aleatório entre 1 e 10
function gerarNumeroAleatorio(){
	return parseInt(Math.random() * 10 + 1);
	
}

//Funcão para que recebe como parâmetro os campos TAG e Texto, para exibição na tela.
function exibirNaTela(tag, texto){
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
}

//Limpa os campos do input e mantem o foco do cursor no mesmo.
function limparCampos() {
	chute = document.querySelector('input');
	chute.value = '';
	chute.focus();
}
	
//Função responsável por gerar um novo número aleatório, limpar o input, definir as as tentativas como 1, exibir a mensagem inicial nos campos H1 e p, desabilitar o botão "Novo Jogo" e habilitar o botão "Chutar"
function reiniciarJogo(){	
	geraNumero = gerarNumeroAleatorio();
	limparCampos();
	tentativas = 1;
	mensagemInicial();
	document.getElementById('reiniciar').setAttribute('disabled',true);
	console.log(geraNumero);
	document.getElementById('chutar').removeAttribute('disabled');
}


//Função responsável por comparar o número digitado com oque foi gerado "aleatóriamente"
function verificarChute(){
	
	let chute = document.querySelector('input').value;
	
	
	if(chute == geraNumero){
		exibirNaTela('h1','Acertou!');
		let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; //Caso o número de tentativas seja maior que 1, retornara a palavra "Tentativas".
		exibirNaTela('h1',`O número secreto é ${geraNumero}!`);
		let mensagemTentativa = (`Você descobriu com ${tentativas} ${palavraTentativa}!`);
		exibirNaTela('p',mensagemTentativa);
		document.getElementById('reiniciar').removeAttribute('disabled'); //Habilita o botão "Novo Jogo".
		document.getElementById('chutar').setAttribute('disabled', true); //Desabilita o botão "Chutar".
		chute.value = geraNumero;
		
		
	} else { 
		if (chute > geraNumero){ 
			exibirNaTela('p','O numero secreto é menor.');
			
			
		} else if (chute < geraNumero){
			exibirNaTela('p','O numero secreto é maior.');
		}
		
		else {
			alert(('O número não pode ser maior que 10'));
		
		} 
		
		
	}
	tentativas++;	
	limparCampos();
	
}
mensagemInicial();	
	

		
	









