var botoes = document.getElementsByClassName("botao");
var limpar = true;


function escutarBotoes(id){
    document.getElementById(id).addEventListener("click", function(){
        valorPressionado = document.getElementById(id).innerHTML;
        display = document.querySelector(".resultado");
        ultimaPosDisplay = display.innerHTML.length - 1;
        
        if(parseInt(valorPressionado) || valorPressionado == '0'){
            if(limpar == true){
                display.innerHTML = valorPressionado;
            }
            else{
                display.innerHTML += valorPressionado;
            }

            limpar = false;
        }
        else{
            valorUltPos = display.innerHTML[ultimaPosDisplay];

            if(valorPressionado == '='){
                if(parseInt(valorUltPos) || valorUltPos == '0'){
                    result = eval(display.innerHTML);
                    
                    if(result % 1 == 0){
                        display.innerHTML = result;
                    }
                    else{
                       display.innerHTML = result.toFixed(2);
                    }
                    
                    limpar = true;
                }
                else{
                    display.innerHTML = "Expressão Incorreta";
                    limpar = true;
                }
            }
            else if(parseInt(valorUltPos) || valorUltPos == '0'){
                display.innerHTML += valorPressionado;
                limpar = false;
            }
            else{
                display.innerHTML =  display.innerHTML.substring(0, ultimaPosDisplay) + valorPressionado;
                limpar = false;
            }
        }
    })
}


for(i = 0; i < botoes.length; i++){
    id = botoes[i].id;

    escutarBotoes(id);
}