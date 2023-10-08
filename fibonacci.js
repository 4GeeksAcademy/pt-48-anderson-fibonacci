document.querySelector('#button-addon1').addEventListener("click", () => {
const longitudFib = document.querySelector ("#longitud");
});

const imprimirFib = (n, numFibInicio = [0, 1]) => {
   if (n <= numFibInicio.length) {
    return numFibInicio;
  }

  const nextValue =
    numFibInicio[numFibInicio.length - 1] +
    numFibInicio[numFibInicio.length - 2];
  numFibInicio.push(nextValue);
  return imprimirFib(n, numFibInicio);
};

const newFibonacci = document.getElementById("respuesta");
newFibonacci = imprimirFib(longitudFib);
console.log(newFibonacci);

