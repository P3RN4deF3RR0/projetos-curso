function insert(num) 
{
    var numero = document.getElementById('resultado').innerText;
    document.getElementById('resultado').innerText = numero + num;
}
function clearDisplay() 
{
    document.getElementById('resultado').innerText = '';
}

function back() {
    var resultado = document.getElementById('resultado').innerText;
    document.getElementById('resultado').innerText = resultado.substring(0, resultado.length -1);
}

function calculate() 
{
    var resultado = document.getElementById('resultado').innerText;
    if(resultado) 
        {
            document.getElementById('resultado').innerText = eval(resultado);
        } 
        else 
        {
            document.getElementById('resultado').innerText = 'Erro';
        }
}