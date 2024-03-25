<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testes target</title>
    <script src="./fibonacci.js"></script>
    <script src="./inverterString.js"></script>
</head>

<body>
    <div class="fibonacci">
        <h2>Verificar se um número pertence à sequência de Fibonacci</h2>
        <label for="inputNumber">Digite um número:</label>
        <input type="num" id="inputnum">
        <button onclick="checkFibonacci()">Verificar</button>
        <p id="resultado"></p>
        <p id="verificados">Números verificados como Fibonacci:</p>
    </div>

    <div class="inverterString">

        <h2>Inverter String</h2>
        <label for="inputString">Digite uma string:</label>
        <input type="text" id="inputString">
        <button onclick="inverterString()">Inverter</button>
        <p id="resultado2"></p>
    </div>


</body>

</html>