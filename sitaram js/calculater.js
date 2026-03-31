<!DOCTYPE html>
<html>
<head>
  <title>Simple Calculator</title>
  <style>
    body {
      font-family: Arial;
      display: flex;
      justify-content: center;
      margin-top: 50px;
    }

    .calculator {
      border: 2px solid #333;
      padding: 20px;
      border-radius: 10px;
      background: #f4f4f4;
    }

    input {
      width: 100%;
      height: 40px;
      margin-bottom: 10px;
      font-size: 20px;
      text-align: right;
      padding: 5px;
    }

    button {
      width: 60px;
      height: 40px;
      margin: 5px;
      font-size: 18px;
      cursor: pointer;
    }
  </style>
</head>

<body>

<div class="calculator">
  <input type="text" id="display" disabled>

  <br>
  <button onclick="press('7')">7</button>
  <button onclick="press('8')">8</button>
  <button onclick="press('9')">9</button>
  <button onclick="press('/')">/</button>

  <br>
  <button onclick="press('4')">4</button>
  <button onclick="press('5')">5</button>
  <button onclick="press('6')">6</button>
  <button onclick="press('*')">*</button>

  <br>
  <button onclick="press('1')">1</button>
  <button onclick="press('2')">2</button>
  <button onclick="press('3')">3</button>
  <button onclick="press('-')">-</button>

  <br>
  <button onclick="press('0')">0</button>
  <button onclick="press('.')">.</button>
  <button onclick="calculate()">=</button>
  <button onclick="press('+')">+</button>

  <br>
  <button onclick="clearDisplay()">C</button>
</div>

<script>
  function press(val) {
    document.getElementById("display").value += val;
  }

  function calculate() {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  }

  function clearDisplay() {
    document.getElementById("display").value = "";
  }
</script>

</body>
</html>