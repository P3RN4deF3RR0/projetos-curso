function insert(num) {
    if (document.getElementById('resultado').innerText.length <= 12) {
        document.getElementById('resultado').innerText += num;
    }
}
function clearDisplay() {
    document.getElementById('resultado').innerText = '';
}

function back() {
    var resultado = document.getElementById('resultado').innerText;
    document.getElementById('resultado').innerText = resultado.substring(0, resultado.length - 1);
}

function calculate() {
    var resultado = document.getElementById('resultado').innerText;
    if (resultado) {
        // Substituir 'x' por '*'
        var resultadoCorrigido = resultado.replace(/x/g, '*');

        try {
            // Avaliar a expressão corrigida
            var avaliacao = eval(resultadoCorrigido);
            // Verificar se o resultado é Infinity ou -Infinity
            ((Infinity === avaliacao)) || ((-Infinity === avaliacao)) ?
            document.getElementById('resultado').innerText = 'Inexistente' :
            document.getElementById('resultado').innerText = avaliacao

        } catch (e) {
            // Se ocorrer um erro na avaliação, exibir 'Erro'
            document.getElementById('resultado').innerText = 'Erro';
        }
    } else {
        document.getElementById('resultado').innerText = 'Erro';
    }
}

function fatorial() {
    let numero = document.getElementById('resultado').textContent;
    let fat = 1; // O fatorial de 0 e 1 é 1
  if (numero < 0) {
        // Fatorial não definido para números negativos
        clearDisplay();
        insert('inexistente');
        return;
    }

    
   for (let i = 1; i <= numero; i++) {
        fat *= i; // Multiplica fat pelo número atual
   }
    clearDisplay();
    insert(fat); // Exibe o resultado
}


function sqrt() {
    let numero = document.getElementById('resultado').textContent;
    let result = 0; // O fatorial de 0 e 1 é 1
    result = Math.sqrt(numero);
    clearDisplay();
    insert(result); // Exibe o resultado
}