var botoes = document.querySelectorAll(".botao")
var limpar = true;
var stringDisplay = document.querySelector(".resultado").innerText;


function escutarBotoes(id){
    document.getElementById(id).addEventListener("click", function(){
        valorPressionado = document.querySelector(`#${id}`).innerText;
        display = document.querySelector(".resultado");
        ultimaPosicString = stringDisplay.length - 1;
        
        //Botão pressionado foi um número
        if(parseInt(valorPressionado) || valorPressionado == '0'){
            if(limpar == true){
                stringDisplay = valorPressionado;
            }
            else{
                stringDisplay += valorPressionado;
            }

            limpar = false;
        }
        //Botão pressionado foi um operador ou botão clear
        else{
            valorUltPos = stringDisplay[ultimaPosicString];

            if(valorPressionado == '='){
                if(parseInt(valorUltPos) || valorUltPos == '0'){
                    result = eval(stringDisplay);
                    
                    if(result % 1 == 0){
                        stringDisplay = result;
                    }
                    else{
                        stringDisplay = result.toFixed(2);
                    }
                    
                    limpar = true;
                }
                else{
                    stringDisplay = "Expressão Incorreta";
                    limpar = true;
                }
            }
            else if(valorPressionado == 'C'){
                stringDisplay = '0';
                limpar = true;
            }
            else if(parseInt(valorUltPos) || valorUltPos == '0'){
                stringDisplay += valorPressionado;
                limpar = false;
            }
            else{
                stringDisplay =  stringDisplay.substring(0, ultimaPosicString) + valorPressionado;
                limpar = false;
            }
        }

        if(stringDisplay.length > 20){
            display.innerText = stringDisplay.substring(stringDisplay.length-20);
        }
        else{
            display.innerText = stringDisplay;
        }
    })
}


for(i = 0; i < botoes.length; i++){
    id = botoes[i].id;

    escutarBotoes(id);
}