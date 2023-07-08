function getFibo() {
    let numero = parseInt(prompt('Ingresa un número para mostrar la serie de Fibonacci'));
  
    while (isNaN(numero) || numero <= 0) {
      alert('Por favor, ingresa un número válido mayor que cero');
      numero = parseInt(prompt('Ingresa un número para mostrar la serie de Fibonacci'));
    }
  
    let fibonacciSecuencia = [0, 1];

    let n1 = 0
    let n2 = 1
   let fibo = 0
   
    for (let i = 2; i < numero; i++) {
     fibo = n1 + n2;
     n1 = n2;
     n2 = fibo;
     fibonacciSecuencia.push(fibo);

    }
  
    return fibonacciSecuencia;
  }
  
  let numerosFibonacci = getFibo();
  
  console.log(numerosFibonacci.join(', '));
  