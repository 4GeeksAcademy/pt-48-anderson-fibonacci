const buttonGenerateFib = document.getElementById("generateFib");
const inputNumber = document.getElementById("inputNumber");
const resultNumbers = document.getElementById("resultNumbers");

buttonGenerateFib.addEventListener("click", () => {
  const n = parseInt(inputNumber.value);
  const newFibonacciNumber = fib(n);
  resultNumbers.innerHTML = "";
  newFibonacciNumber.forEach((num) => {
    const listItem = document.createElement("li");
    listItem.textContent = num;
    resultNumbers.appendChild(listItem);
  });
});

const fib = (n, numFibInicio = [0, 1]) => {
  if (n <= numFibInicio.length) {
    return numFibInicio;
  }

  const nextValue =
    numFibInicio[numFibInicio.length - 1] +
    numFibInicio[numFibInicio.length - 2];
  numFibInicio.push(nextValue);
  return fib(n, numFibInicio);
};