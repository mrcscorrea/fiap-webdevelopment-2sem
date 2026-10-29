function calcular() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let value = document.getElementById('resultado')
    let resultado = num1 * num2;
    
    value.innerText = 'Resultado: ' + resultado;
}