const titulo = document.getElementById('titulo')
const lista = document.getElementById('lista')
const nombreValue = document.getElementById('nombre')
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const boton = document.getElementById('button')
const operacion = document.getElementById('boton')
const saludo = document.getElementById('saludo')
const resultado = document.getElementById('resultado')
const ejemplo = document.getElementById('ejemplo')
const labelCheck = document.getElementById('labelCheck')

titulo.innerHTML = 'primer ejercicio de JS'
lista.innerHTML = '<li> item uno </li> <li> item dos </li>'

boton.addEventListener('click', function () {
    saludo.innerHTML = 'hola: ' + nombreValue.value
    ejemplo.setAttribute('class', 'dark')
});

operacion.addEventListener('click', function () {
    resultado.innerHTML = op(num1.value, num2.value);
});

check.addEventListener('click', function () {
    labelCheck.classList.toggle('dark');
});

function op(a, b) {
    return (a + b)
}
